// MainComponent.js
import React from 'react';
import { useDarkMode } from './DarkModeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import Skills from './Skill';


export default function MainComponent(){
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
     
        
        <Header/>
        <AboutMe/>
        <Skills/>
        <Education/>
        <Experience/>
        <Footer/>
      
      
    </div>
  );
};

