import React from 'react';
import './style.css';
import { Card } from 'react-bootstrap';

const CardAbout = (props) => {
    return (
        <div style={{marginTop:'-4490px', marginLeft:'15px', display:'flexbox'}}>
        <Card style={{ paddingTop:'19px', boxSizing: 'border-box', paddingBottom:'16px'}}>
            <Card.Img variant="top" src={require('../../images/myself.png')}  />
            <Card.Body>
                <Card.Title style={{color:'black' ,fontFamily:'cursive', textAlign:'center'}}><strong>About Me</strong></Card.Title>
                <Card.Text style={{color:'black'}}>
                <span>Hello Creatives !!</span><br />
                I am Tripti Sarkar. I am a Computer Science Engineer living in India.I am fond of sketching which acts as a mood-booster 
                for me to feel refreshing and serene.
                I admire to draw on locations whether indoors or outdoors (depending on my mood and weather conditions) capturing my sight. 
                I feel contentment to share my creativity for drawing with everyone and make this process much more cheerful.
                </Card.Text>
               
            </Card.Body>
            </Card>
        </div>
    );
}

export default CardAbout;
