import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import Axios from 'axios'
import Cookies from 'js-cookie'
import { BaseUrl } from '../../../variables'

function PostCreate() {
    const clearedForm = { filename: "", description: "" }
    const [form, setform] = useState(clearedForm)

    const handelChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handelSubmit = async (e) => {
        e.preventDefault()

        const submitUser = await Axios.post(BaseUrl + '/api/post/create', form)

        if (!submitUser.data.err) {
            Cookies.set('urbanShadesToken', submitUser.data.token)
            return window.location.href = '/admin'
        }
        else {
            const errAlert = `<div class="text-center" style="padding: 10px; color: white; background-color: red; border-radius: 10px"> ${submitUser.data.err} </div>`
            console.log("ERROR: ", submitUser.data.err)
            document.getElementById('errForm').innerHTML = errAlert
        }

    }
    return (

        <div>
            <Card>
                <Card.Body>
                    <h3 className="text-center" style={{color: "black"}}>Create Post</h3>
                    <form method="post" onSubmit={handelSubmit}>
                        <input className="form-control" type="text" name="filename" placeholder="Filename with extension" onChange={handelChange} /> <br />
                        <textarea className="form-control" row="5" name="description" placeholder="Description" cols="30" rows="10" onChange={handelChange} ></textarea> <br />
                        <button className="btn btn-dark" type="submit">Submit</button>
                    </form>
                </Card.Body>
            </Card>
        </div>

    )
}

export default PostCreate
