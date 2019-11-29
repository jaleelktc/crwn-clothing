import React from 'react';

import './Hompage.style.scss';
const HomePage = ()=>{
    return(
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="contents">
                    <h1 className="title">HATE</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="contents">
                    <h1 className="title">JACKET</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="contents">
                    <h1 className="title">SNEAKERS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="contents">
                    <h1 className="title">MEN</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="contents">
                    <h1 className="title">MEN</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>
    </div>
    )
}
export default HomePage;