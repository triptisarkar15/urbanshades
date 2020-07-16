import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
    return (
        <div>
            <div className="mainbox">
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin"></i>
                <div className="err2">4</div>
                <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <NavLink to="/">Home</NavLink> and try from there.</p></div>
            </div>
        </div>
    )
}

export default PageNotFound
