import React, { useState } from "react";
import './style.css';
import Axios from "axios";
import { BaseUrl } from '../../variables'

const Subscribe = (props) => {

    const clearedForm = { email: "" }
    const [form, setform] = useState(clearedForm)

    const handelChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handelSubmit = async () => {
        const submitEmail = await Axios.post(BaseUrl + '/api/subs/create', form)
        console.log(submitEmail)
        setform(clearedForm)

    }

    return (
        <div className='body'>
            <div className="container">
                <h1>Subscribe to our Newsletter</h1>
                <p>Receive updates instanly</p>
                <div className="newsletter">
                    <input type="email" className="input" name="email" placeholder="Enter Your Email" onChange={handelChange} value={form.email} />
                    <i className="fas fa-envelope"></i>
                    <div className="btn" onClick={handelSubmit}>Subscribe</div>
                </div>
            </div>
        </div>

    );
}

export default Subscribe;