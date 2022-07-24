import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';

const Home = () => {
    return (
        <div className='home'>
            <SideBar />
            <div className="home__contenu">
                < Navbar />
            </div>
        </div>
    );
};

export default Home;