import React from 'react';
import './Menu.item.style.scss'
const MenuItem = ({title,imageUrl,size,id})=>{
    return(
        <div style={{backgroundImage:`url(${imageUrl})`}} className={`${ size } menu-item`}>
                <div className="contents">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
    );
}
export default MenuItem;
