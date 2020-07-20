import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './style.css';

function Contact(props) {
    useEffect(() => {

        document.getElementById("contact").style.color = "red"
 
        
        return () => {
            document.getElementById("contact").style.color = "beige"
        }
    }, [])
    const clearedForm = { first_name: '', last_name: '', email: '', description: '' }
    const [form, setform] = useState(clearedForm)

    const handelChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setform(clearedForm)
    }
    return (
        <div className="body">
        <div class="contact-form" style={{ backgroundImage: 'linear-gradient(to bottom left,#734b6d,#ffd89b ,#19547b, #734b6d)'}}>
            <h1 style={{color:'black' ,fontFamily:'cursive'}}>Contact </h1>
            <form action="" method="post" onSubmit={handelSubmit}>
            <div class="txtb">
                <label>Full Name :</label>
                
                <input type="text" name="text" className="input" value="" placeholder="" onChange={handelChange} required />
            </div>

            <div class="txtb">
                <label>Email :</label>
                
                <input type="email" name="email" className="input" value={form.email} placeholder="" onChange={handelChange} required/>
            </div>

        
            <div class="txtb">
                <label placeholder="" onChange={handelChange} required>Message:</label>
                <textarea></textarea>
            </div>
            <a class="btn" onClick={handelSubmit}>Submit</a>
            </form>
        </div>
        </div>
        
    )
}
export default Contact;           
