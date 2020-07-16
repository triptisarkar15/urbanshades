import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { BaseUrl } from '../../../variables'
import { Card } from 'react-bootstrap'

function Subscriber() {
    const [subscribers, setsubscribers] = useState(null)
    useEffect(() => {
        async function getPost() {
            const gettingSubs = await Axios.get(BaseUrl + '/api/subs/subs')
            setsubscribers(gettingSubs)
        }
        getPost()
    }, [])
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center" style={{color: "black"}}>Subscriber</h2>
                    <div className="row1">
                        <div className="col">
                            {subscribers && subscribers.data.res.map((sub) => (
                                <div key={sub._id}>
                                    <h4 style={{color: "black"}}>{sub.email}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Subscriber
