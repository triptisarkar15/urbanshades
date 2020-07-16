import React from 'react'
import PostCreate from './PostCreate'
import Subscriber from './Subscriber'

function AdminPanel() {

    return (

        <div className="row mx-0">
            <div className="col-md-4">
                <PostCreate />
            </div>
            <div className="col-md-4">
                <Subscriber />
            </div>
        </div>

    )
}

export default AdminPanel
