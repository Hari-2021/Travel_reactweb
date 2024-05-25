import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className='Home'>
        <h1>Welcome to Travel Explorer</h1>
        <p>Discover your next adventure!</p>
      </div>

        <div className='Main'>
            <div className='1'>
               <img src='https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='paris'></img>
               <p>Paris</p>
            </div>
            <div className='2'>
                <img src='https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW58ZW58MHwxfDB8fHww' alt='Japan'></img>
                <p>Japan</p>
            </div>
            <div className='3'>
                <img src='https://plus.unsplash.com/premium_photo-1673561276237-4428e63f5804?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3dpdHplcmxhbmR8ZW58MHwxfDB8fHww' alt='switzerland'></img>
                <p>Switzerland</p>
            </div>
        </div>

    </div>
  );
}

export default Home;
