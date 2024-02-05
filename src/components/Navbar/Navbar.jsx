/** @format */

import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
function Navbar() {
    const [activeComp, setActiveComp] = useState("first");
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            setActiveComp("first");
        } else if (location.pathname === "/component2") {
            setActiveComp("second");
        } else if (location.pathname === "/component3") {
            setActiveComp("third");
        }
    }, [location.pathname]);
    return (
        <nav className="navbar navbar-light bg-danger py-0 px-3 m-0 ">
            <span
                className="navbar-brand mb-0 h1 text-white"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
            >
                Header
            </span>
            <ul className="d-flex  p-0 m-0" style={{ listStyleType: "none" }}>
                <li
                    className={
                        activeComp === "first"
                            ? "p-2 active text-white"
                            : "p-2 text-white"
                    }
                    onClick={() => {
                        setActiveComp("first");
                        navigate("/");
                    }}
                >
                    First Component
                </li>
                <li
                    className={
                        activeComp === "second"
                            ? "p-2 text-white active"
                            : "p-2 text-white"
                    }
                    onClick={() => {
                        setActiveComp("second");
                        navigate("/component2");
                    }}
                >
                    Second Component
                </li>
                <li
                    className={
                        activeComp === "third"
                            ? "p-2 text-white active"
                            : "p-2 text-white"
                    }
                    onClick={() => {
                        setActiveComp("third");
                        navigate("/component3");
                    }}
                >
                    Third Component
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
