import React from 'react';
import './style.css';
import { Card } from 'react-bootstrap';

const Content = (props) => {
    return (
        <div>
            <h3 style={{ color:'#ffdde1 ', marginTop:'25px'}}>A Beginner’s Guide to Urban Sketching:</h3>
                <Card style={{width: '50rem', padding: '15px', borderRadius: '10px',backgroundImage:'linear-gradient(to bottom right, #43cea2 , #185a9d)'}}>
                <Card.Img variant="top" src={require('../../images/tmp6.jpg')} />
                <Card.Body >
                    <Card.Title style={{ color: 'black',fontFamily:'cursive',textAlign:'center', letterSpacing:'1px' }}><strong>MATERIALS REQUIRED:</strong></Card.Title>
                    <Card.Text style={{ color: 'white',fontFamily:'cursive', letterSpacing:'0.8px', fontSize:'18px' }}>
                        <ul>
                            <li> micron pens </li>
                            <li>sketechbook or water colour sheets</li>
                            <li> water colors</li>
                            <li>round brushes</li>
                            <li>color mixing pallete</li>
                        </ul>
                        
                    </Card.Text>

                </Card.Body>
            </Card>
           
            <br />
            
            <Card style={{ width: '50rem', padding: '15px', borderRadius: '10px' ,backgroundImage:'linear-gradient(to bottom left, #ffd89b , #19547b)'}}>
                <Card.Img variant="top" src={require('../../images/tmp.jpg')} />
                <Card.Body>
                    <Card.Title style={{ color: 'black', fontFamily:'cursive', textAlign:'center'}}><strong>PICK A SUBJECT THAT INTERESTS YOU:</strong></Card.Title>
                    <Card.Text style={{ color: 'white',fontFamily:'cursive', letterSpacing:'0.8px', fontSize:'18px' }}>
                        There is absolutely no point in sketching something that doesn’t get you excited –
                        rather the reality is, you’re more likely to get great results with something that interests you.
                        start with whatever interests you and I’ll guarantee the finished result will be good and quite satisfactory.
                </Card.Text>

                </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '50rem', padding: '15px', borderRadius: '10px', backgroundImage:'linear-gradient(to top left,#3a1c71 , #d76d77 ,#ffaf7b)'}}>
                <Card.Img variant="top" src={require('../../images/tmp3.jpg')} />
                <Card.Body>
                    <Card.Title style={{ color: 'black',fontFamily:'cursive' , textAlign:'center'}}><strong>WORK IN A COMFORTABLE ENVIRONMENT:</strong></Card.Title>
                    <Card.Text style={{ color: 'white',fontFamily:'cursive', letterSpacing:'0.8px', fontSize:'18px' }}>
                        I would say for beginners or less confident artists,
                        a seated position and a quite environment(indoors or outdoors) is more comfortable and allows you to concengtrate.
                        Find a location where you can easily sit on a wall or chair and this will provide you more time to capture the scenario.
                </Card.Text>

                </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '50rem', padding: '15px', borderRadius: '10px', backgroundImage:'linear-gradient(to bottom left, green , #4ca1af )'}}>
                <Card.Img variant="top" src={require('../../images/tmp2.jpg')} />
                <Card.Body>
                    <Card.Title style={{ color: 'black', fontFamily:'cursive', textAlign:'center'}}><strong>WORK WIH PEN OR PENCIL THAT YOU ARE COMFORTABLE WITH:</strong></Card.Title>
                    <Card.Text style={{ color: 'white',fontFamily:'cursive', letterSpacing:'0.8px', fontSize:'18px' }}>
                        I love drawing with pen – straightforward, using no pencil.
                        But I’m very aware this requires a lot of confidence and my advice to beginners is
                        always start with a medium you feel comfortable with and this is usually
                        pencil or a charcoal.Also remember that it is not mandatory to use colors in every drawings,
                        some sketches look great without colors too.
                </Card.Text>

                </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '50rem', padding: '15px', borderRadius: '10px' ,backgroundImage:'linear-gradient(to top right,#ed4264 , #ffedbc)'}}>
                <Card.Img variant="top" src={require('../../images/tmp4.jpg')} />
                <Card.Body>
                    <Card.Title style={{ color: 'black',fontFamily:'cursive' , textAlign:'center'}}><strong>A REMINDER- "DRAWING IS NOT A PHOTOGRAPH":</strong></Card.Title>
                    <Card.Text style={{ color: 'white',fontFamily:'cursive', letterSpacing:'0.8px', fontSize:'18px' }}>
                        Don’t try to faithfully capture the scene you are drawing as
                        you would in a photograph. A drawing is meant to be an expression of something you’re looking at,
                        not an exact reproduction or a copy. The freedom of this though builds up the confidence of any beginner
                        to sketch will help to be more satisfied with the finished result.
                </Card.Text>

                </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '50rem', padding: '15px', borderRadius: '10px', backgroundImage:'linear-gradient(to bottom right,#bdc3c7 , #2c3e50  )'}}>
                <Card.Img variant="top" src={require('../../images/tmp5.jpg')} />
                <Card.Body>
                    <Card.Title style={{ color: 'black',fontFamily:'cursive', textAlign:'center' }}><strong> DRAW MORE AND MORE: </strong></Card.Title>
                    <Card.Text style={{ color: 'white',fontFamily:'cursive', letterSpacing:'0.8px', fontSize:'18px' }}>
                        Practice makes perfect in your sketchbook. So try to draw atleast once in a day
                        to learn with pace and perfection.
                        Enjoy your mistakes too and never try to copy exact senario in your drawings.
                </Card.Text>

                </Card.Body>
            </Card>
            <br />
        </div>
    );
}

export default Content;
