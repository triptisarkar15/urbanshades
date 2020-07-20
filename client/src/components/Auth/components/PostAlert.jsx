import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import Axios from 'axios'
import { BaseUrl } from '../../../variables'

function PostAlert() {
    const clearedForm = { postUrl: "" }
    const [form, setform] = useState(clearedForm)

    const handelChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handelSubmit = async (e) => {
        e.preventDefault()

        const submitPost = await Axios.post(BaseUrl + '/api/subs/postalert', form)
        console.log(submitPost)
        setform(clearedForm)

    }
    return (

        <div>
            <Card>
                <Card.Body>
                    <h3 className="text-center" style={{color: "black"}}>Send Post Alert to Subscribers</h3>
                    <form method="post" onSubmit={handelSubmit}>
                        <input className="form-control" type="text" name="postUrl" placeholder="url of post" onChange={handelChange} value={form.filename} required /> <br />
                        <button className="btn btn-dark" type="submit">Submit</button>
                    </form>
                </Card.Body>
            </Card>
        </div>

    )
}

export default PostAlert
