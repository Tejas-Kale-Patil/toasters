/** @format */

import "./App.css";
import Component1 from "./components/Component1/Component1";
import Component2 from "./components/Component2/Component2";
import Component3 from "./components/Component3/Component3";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <div className="app">
            <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Component1/>} />
                    <Route path="/component2" element={<Component2/>} />
                    <Route path="/component3" element={<Component3/>} />
                </Routes>
            </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
