import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#F94892'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="BitSong - Blockchain-Based Music Streaming Platform"
        projectDesc="BitSong offers a seamless and innovative platform for music streaming and content distribution, powered by blockchain technology"
        projectImg={require('./images/projectWiggles.jpg')}
      />

      <ProjectCard
        projectTitle="AI-Powered Recruitment Simplification Platform"
        projectDesc="This project is a cutting-edge, AI-driven recruitment platform designed to revolutionize the hiring process for companies."
        projectImg={require('./images/projectGlassmorphism.png')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="Epilog"
        projectDesc="Epilog develops cost-effective yet powerful and innovative digital vision technology with unmatched visual fidelity and range, backed by AI."
        projectImg={require('./images/projectRogfree.png')}
      />
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
