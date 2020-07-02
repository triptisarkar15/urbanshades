import React, { useState } from "react";
import './style.css'
import { Navbar, Nav, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbartop = (props) => {
    

    return (
        <Navbar>

            <Nav className="mr-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/subscribe">Subscribe</NavLink>
                <NavLink to="/contact">Contact</NavLink>

            </Nav>
            {/* <div className='search'>
                <form inline onSubmit={submitSearch}>
                    <input type='text' className={searchClass} placeholder='Search' />
                    <img onClick={openSearch} className='searchIcon' src={require('../../assets/icons/search.png')} alt='Search' />
                </form>
            </div> */}
        </Navbar>

    );
}

export default Navbartop;
