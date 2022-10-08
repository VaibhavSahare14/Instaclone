import React from 'react';
import Main_BG from '../images/mainImage.png'
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function landing_page() {
    return (
        <>
            <div className="home-container">
                <div className="col-1">
                    <img src={Main_BG} alt="Sample_Image" />
                </div>
                <div className="col-2">
                    <div className="main-text">
                        10x Team 04
                    </div>
                    <button type='button'>
                        <Link to="/postview" style={{ color: '#59A082', textDecoration: 'none' }}> Enter </Link>
                    </button>
                </div>
            </div>
        </>
    )
}