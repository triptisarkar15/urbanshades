import React from "react";
import './style.css';
import { Card } from "react-bootstrap";

const Sidebar = (props) => {

    return (
        <div style={{display:'flexbox',marginLeft:'15px'}} >
            <Card style={{ marginTop: '-3496px', boxSizing: 'border-box' }}>
                <Card.Body>
                <Card.Title style={{color:'black' , textAlign:'center'}}><strong>Social Media Links</strong></Card.Title>
                <Card.Text style={{color:'black'}}>Follow me on:</Card.Text>
                <ul style={{color:'black'}}>
                <li><a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer" style={{color:'black'}}>Instagram</a></li>
                <br />
                <li><a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer" style={{color:'black'}}>Facebook</a></li>
                <br />
                <li><a href='https://www.linkedin.com' target='_blank' rel="noopener noreferrer" style={{color:'black'}}>LinkedIn</a></li>
                <br /> 
                </ul> 
                </Card.Body>
            </Card>

        </div>

    );
}

export default Sidebar;
