import React from 'react';
import Nav from "./Components/Nav";
import SideBar from "./Components/SideBar";
import {Route, Routes} from "react-router-dom";
import GaramMasala from "./pages/GaramMasala";

function App() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route exact path={"/"} element={<SideBar/>}/>
                <Route path={"/gm"} element={<GaramMasala/>}/>
            </Routes>
        </>
    );
}

export default App;
