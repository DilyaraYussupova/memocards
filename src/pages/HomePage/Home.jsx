import React from 'react';
import './Home.css';

const Home = (props) => (
    <div className="Home">
        <h1 className="text-center">Welcome to <span>MemoCards</span></h1>
        <h3 className="text-center">Please <a href="/login">sign up</a> to create your personal study set.</h3>
    </div>
)

export default Home;