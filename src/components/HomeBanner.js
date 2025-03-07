import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Domingo Sanchez</div>
              <div className="staticTitle">
                Senior 
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li>+<span>Full Stack Engineer</span></li>
              </ul>
            </div>
        </div>
        {/* <div className="mask">
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div> */}
    </div>
  )
}
