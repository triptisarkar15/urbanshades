import React ,{useEffect} from 'react';
import './style.css';

import CardAbout from '../../components/Card/CardAbout'

import Content from '../../components/Content/Content';
import Sidebar from '../Sidebar/Sidebar';


const Home = (props) => {
    useEffect(() => {
        
        document.getElementById("home").style.color = "red"
        return () => {
            document.getElementById("home").style.color = "beige"
        }
    }, [])

    return (

        <div >
            <div className="row my-0">
                <div className='col-md-5 offset-md-1'>
                    <Content />
                </div>
                <div className="col-md-3 offset-sm-8">
                    <CardAbout />

                </div>
                <div className="col-md-3 offset-sm-8">
                    <Sidebar />
                </div>
            </div>

        </div>

    );
}

export default Home;