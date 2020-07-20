import React from 'react'
import PostCreate from './PostCreate'
import Subscriber from './Subscriber'
import PostAlert from './PostAlert'

function AdminPanel() {

    return (

        <div className="row mx-0">
            <div className="col-md-4">
                <PostCreate />
            </div>
            <div className="col-md-4">
                <Subscriber />
            </div>
            <div className="col-md-4">
                <PostAlert />
            </div>
        </div>

    )
}

export default AdminPanel
