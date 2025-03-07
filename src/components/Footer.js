import React from 'react';
import "./FooterStyle.css";

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }
  return (
    <div className='footer' style={{ display: "flex", flexDirection: "column" }}>
        <div>Made with ❤ by Domingo Sanchez & domingosanchez.dev@proton.me <span style={styleSymbol}>©</span> 2023</div>
        <br/>
        <div> Majevicka 8, Novi Sad, 21000, Serbia | +381 628638079 </div>
    </div>
  )
}
