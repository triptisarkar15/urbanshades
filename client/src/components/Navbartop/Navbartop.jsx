import React from "react";
import './style.css'
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbartop = (props) => {


    return (
        
        <Navbar >

            <Nav className="justify-content-center" defaultActiveKey="/" >
                <Nav.Item  >
                    <NavLink to="/" style={{color: 'rgb(197, 195, 221)'}}>Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/posts" style={{color: 'rgb(197, 195, 221)'}}>Posts</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/subscribe"style={{color: 'rgb(197, 195, 221)'}}>Subscribe</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/contact"style={{color: 'rgb(197, 195, 221)'}}>Contact</NavLink>
                </Nav.Item>

            </Nav>
            {/* <div className='search'>
            
                <form inline onSubmit={submitSearch}>
                    <input type='text' className={searchClass} placeholder='Search' />
                    <img onClick={openSearch} className='searchIcon' src={require('../../assets/icons/search.png')} alt='Search' />
                </form>
            </div>*/}
        </Navbar>

    );
}

export default Navbartop;
