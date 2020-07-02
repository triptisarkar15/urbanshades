import React from 'react';
import './style.css';
import Header from '../../components/Header/Header';
import Navbartop from '../../components/Navbartop/Navbartop';
import CardAbout from '../../components/Card/CardAbout'

const Home = (props)=> {
    return (
        <div >
            <div className="row mx-0">
                <div className="col-md-3 offset-sm-8">                    
                    <CardAbout/>
                </div>
            </div>
        </div>
    );
}

export default Home;