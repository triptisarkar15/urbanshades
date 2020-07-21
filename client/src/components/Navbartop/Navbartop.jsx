import React from "react";
import './style.css'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbartop = (props) => {


    return (

        <Navbar >

            <Nav className="justify-content-center" defaultActiveKey="/" >
                <Nav.Item  >
                    <NavLink to="/" id="home">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/posts" id="post">Posts</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/subscribe" id="subscribe">Subscribe</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/contact" id="contact">Contact</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="mr-4" to="https://www.facebook.com/people/Tripti-Sarkar/100025504414917" id="facebook"> <img src="/icons/facebook.png" alt="facebook" style={{ width: "30px" }} /> </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="mr-4" to="https://www.instagram.com/savage_hilarity/" id="instagram"> <img src="/icons/instagram.png" alt="instagram" style={{ width: "30px" }} /> </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="mr-4" to="https://www.linkedin.com/in/tripti-sarkar-a799381a8/" id="linkedin"> <img src="/icons/linkedin.png" alt="linkedin" style={{ width: "30px" }} /> </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="mr-4" to="https://in.pinterest.com/triptisarkar2705/" id="pinterest"> <img src="/icons/pinterest.png" alt="pinterest" style={{ width: "30px" }} /> </NavLink>
                </Nav.Item>                

            </Nav>

        </Navbar>

    );
}

export default Navbartop;
