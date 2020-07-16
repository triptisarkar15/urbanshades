import React, { useState, useEffect } from 'react';
import './style.css';
import { Card } from 'react-bootstrap';


/**
* @author
* @function BlogPost
**/

const Post = (props) => {

    
    return (
        <div className="row md-3 offset-sm-2">
           <Card style={{ width: '48rem', padding: '15px', borderRadius: '10px' }}>
                <Card.Img variant="top" src={require('../../images/tmp5.jpg')} />
                <Card.Body>
                    <Card.Text style={{ color: 'black' }}>
                        Practice makes perfect in your sketchbook. So try to draw atleast once in a day
                        to learn with pace and perfection.
                        Enjoy your mistakes too and never try to copy exact senario in your drawings.
                </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )

}

export default Post;