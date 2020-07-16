import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './style.css';
import { Card } from 'react-bootstrap';
import { BaseUrl } from '../../variables'


const Post = (props) => {
    //{ filename: "", description: "" }
    const [posts, setposts] = useState(null)
    useEffect(() => {
        async function getPost() {
            const gettingPost = await Axios.get(BaseUrl + '/api/post/posts')
            setposts(gettingPost)
        }
        getPost()
    }, [])
    return (
        <div className="row">
            <div className="col-md-3 offset-sm-2">
                <div className="row1">
                    {posts && posts.data.res.map((post) => (
                        <div className="col my-4"  key={post._id}>
                            <Card style={{ width: '48rem', padding: '15px', borderRadius: '10px' }}>
                                <Card.Img variant="top" src={`/images/PostImages/${post.filename}`} />
                                <Card.Body>
                                    <Card.Text style={{ color: 'black' }}>
                                        {post.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )

}

export default Post;