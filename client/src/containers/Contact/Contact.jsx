import React, {useState} from 'react'
import { Card } from 'react-bootstrap'

function Contact(props) {
    const clearedForm = {first_name: '', last_name: '', email: '', description: ''}
    const [form, setform] = useState(clearedForm)

    const handelChange = (e)=>{
        setform({...form, [e.target.name]: e.target.value})
    }
    const handelSubmit = (e)=>{
        e.preventDefault()
        console.log(form)
        setform(clearedForm)
    }
    
    return (
        <div>
            <div className="row mx-0">
                <div className="col-md-4 offset-sm-4">
                    <Card>
                        <Card.Body>
                            <h1 className="text-center" style={{color: "black"}}>Contact Me</h1>
                            <form action="" method="post" onSubmit={handelSubmit}>
                                <input className="form-control my-3" type="text" name="first_name" placeholder="First Name"  onChange={handelChange} required />
                                <input className="form-control my-3" type="text" name="last_name" placeholder="Last Name"  onChange={handelChange} required />
                                <input className="form-control my-3" type="email" name="email" placeholder="Email"  onChange={handelChange} required />
                                <textarea className="form-control my-3" name="description" placeholder="Description"  onChange={handelChange} cols="30" rows="10" required></textarea>
                                <button className="btn btn-success w-100 my-3" type="submit">Submit</button>
                            </form>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>  
    )
}   
export default Contact           
