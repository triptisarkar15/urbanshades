import React, { useState } from 'react'
import Axios from 'axios'
import { Card } from 'react-bootstrap'
import Cookies from 'js-cookie'
import { BaseUrl } from '../../variables'

function Login() {
    const clearedForm = { username: "", password: "" }
    const [form, setform] = useState(clearedForm)

    const handelChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handelSubmit = async (e) => {
        e.preventDefault()

        const submitUser = await Axios.post(BaseUrl + '/api/auth/login', form)

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
        <div className="row mx-0">
            <div className="col-md-4 offset-sm-4 my-5">
                <Card>
                    <Card.Body className="text-center">
                        <h2 className='text-center' style={{ color: "black" }} >Login</h2>
                        <form className="px-5 py-2" method="post" onSubmit={handelSubmit}>
                            <input className="form-control my-1" type="text" name="username" placeholder="Username" onChange={handelChange} required /><br />
                            <input className="form-control my-1" type="password" name="password" placeholder="Password" onChange={handelChange} required /><br />
                            <button className="btn btn-success w-100 my-1" type="submit">Submit</button>
                        </form>
                    </Card.Body>
                </Card>
                <div id="errForm" className=' my-3'>
                </div>
            </div>
        </div>
    )
}

export default Login



