import React from "react";
import './style.css';


const Subscribe = (props) => {
    return (
        <div className='body'>
            <div className="container">
                <h1>Subscribe to our Newsletter</h1>
                <p>Receive updates instanly</p>
                <div className="newsletter">
                    <input type="text" className="input" placeholder="Enter Your Email" />
                    <i className="fas fa-envelope"></i>
                    <div className="btn">Subscribe</div>
                </div>
            </div>
        </div>

    );
}

export default Subscribe;