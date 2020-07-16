import React from 'react';
import './style.css';
import { Card } from 'react-bootstrap';

const Content = (props) => {
    return (
        <div>
            <h3 >A Beginner’s Guide to Urban Sketching:</h3>
                <Card style={{width: '50rem', padding: '15px', borderRadius: '10px',backgroundColor:'grey'}}>
                <Card.Img variant="top" src={require('../../images/tmp6.jpg')} />
                <Card.Body >
                    <Card.Title style={{ color: 'black' }}>MATERIALS REQUIRED:</Card.Title>
                    <Card.Text style={{ color: 'white' }}>
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
            
            <Card style={{ width: '50rem', padding: '15px', borderRadius: '10px' }}>
                <Card.Img variant="top" src={require('../../images/tmp.jpg')} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>PICK A SUBJECT THAT INTERESTS YOU:</Card.Title>
                    <Card.Text style={{ color: 'black' }}>
                        There is absolutely no point in sketching something that doesn’t get you excited –
                        rather the reality is, you’re more likely to get great results with something that interests you.
                        start with whatever interests you and I’ll guarantee the finished result will be good and quite satisfactory.
                </Card.Text>

                </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '50rem', padding: '15px', borderRadius: '10px' }}>
                <Card.Img variant="top" src={require('../../images/tmp3.jpg')} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>WORK IN A COMFORTABLE ENVIRONMENT:</Card.Title>
                    <Card.Text style={{ color: 'black' }}>
                        I would say for beginners or less confident artists,
                        a seated position and a quite environment(indoors or outdoors) is more comfortable and allows you to concengtrate.
                        Find a location where you can easily sit on a wall or chair and this will provide you more time to capture the scenario.
                </Card.Text>

                </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '50rem', padding: '15px', borderRadius: '10px' }}>
                <Card.Img variant="top" src={require('../../images/tmp2.jpg')} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>WORK WIH PEN OR PENCIL THAT YOU ARE COMFORTABLE WITH:</Card.Title>
                    <Card.Text style={{ color: 'black' }}>
                        I love drawing with pen – straightforward, using no pencil.
                        But I’m very aware this requires a lot of confidence and my advice to beginners is
                        always start with a medium you feel comfortable with and this is usually
                        pencil or a charcoal.Also remember that it is not mandatory to use colors in every drawings,
                        some sketches look great without colors too.
                </Card.Text>

                </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '50rem', padding: '15px', borderRadius: '10px' }}>
                <Card.Img variant="top" src={require('../../images/tmp4.jpg')} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>A REMINDER- "DRAWING IS NOT A PHOTOGRAPH":</Card.Title>
                    <Card.Text style={{ color: 'black' }}>
                        Don’t try to faithfully capture the scene you are drawing as
                        you would in a photograph. A drawing is meant to be an expression of something you’re looking at,
                        not an exact reproduction or a copy. The freedom of this though builds up the confidence of any beginner
                        to sketch will help to be more satisfied with the finished result.
                </Card.Text>

                </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '50rem', padding: '15px', borderRadius: '10px' }}>
                <Card.Img variant="top" src={require('../../images/tmp5.jpg')} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}> DRAW MORE AND MORE: </Card.Title>
                    <Card.Text style={{ color: 'black' }}>
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
