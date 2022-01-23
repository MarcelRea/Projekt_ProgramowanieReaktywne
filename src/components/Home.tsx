import React from "react";
import Moves from "./Move";
import Login from "./Login";
import Search from './Search';
import Footer from './Footer';

const Home = () => {
    return (
    <div className="container">
        <div className="App4">
            <Login/>
            <Search />
        </div>
        <div className="content">
            <Moves />
        </div>
        <div className="ft">
            <Footer />
        </div>
    </div>
    );
}
export default Home;
