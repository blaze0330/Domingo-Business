import React from "react";
import "./AboutMeStyle.css";

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
          <h3>Hey there, 👋</h3>
          I'm <span> Domingo </span>, Senior Full Stack Engineer <span> </span> I build websites with a focus on responsiveness, accessibility and pleasing aesthetics. Being well versed in all the key languages allows me to rapidly design, code and deploy in an organized and efficient manner. While I specialize in <span>backend development,</span> I'm also delving into <span>frontend technologies.</span> I'm all ears for <span>new opportunities</span> to create awesome software solutions. Let's team up and cook up some digital wonders together.
          <br/> <br/>
          Beyond coding, <span>I'm an artist at heart❤️</span> – you'll often find me lost in the world of sketches and colors. I really enjoy being creative, so I like to spend my free time drawing, sketching, and painting. It's a great way for me to unwind and tap into my creative side.
        </div>
        {/* <div className="profile-photo">
          <div className="heading"> About Me</div>
          <img className="img" src={myProfile} alt="Profile"></img>
        </div> */}
        <div className="name">D & S</div>
      </div>
  );
}
