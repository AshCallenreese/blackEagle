import React from 'react';
import './App.css';
import About from "./component/About";
import Home from "./component/Home";
import Create from "./component/Create";
import {Route, Routes} from 'react-router-dom';
import Navbar from './component/Navbar'

function App() {
    const myWidth = 220
    return (
        <div className="App">
            <Navbar
                drawerWidth={myWidth}
                content = {
                    <Routes>
                        <Route path="" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/create" element={<Create/>}/>

                    </Routes>
                }

            />




        </div>
    );
}


export default App;
