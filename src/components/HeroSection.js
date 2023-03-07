import React from 'react'
import './HeroSection.css'
// import leftGraphic from 
// import rightGraphic from '
// import Button from 
// import illustrations from 
import { NavLink } from 'react-router-dom'


export default function HeroSection() {
  return (
    <div>
    <div className="upperSection">
        <h3 className="toCenter">Hello, We Welcome you to</h3>
        <h1 className="brightColors">GOOGLE DEVELOPER STUDENT CLUBS</h1>
        <h1 className="kerala">KERALA</h1>
        </div>
        <div className="centerGraphics">
        <div className="leftGraphics">
            <img src='/svgs/leftGraphic.svg'  alt="leftGraphics.svg"/>
            </div>
            <div className="btnHero">
            <NavLink to="/"><img src='/svgs/Explore.svg' alt="centerButton.svg"/></NavLink>
            </div>
            <div className="leftGraphics">
            <img src='/svgs/rightGraphic.svg' alt="rightGraphics.svg"/>
            </div>
            </div>
            <div className="bottomIllustrations">
        <img src='/svgs/illustrations.svg' alt="extraIllustrations.svg"/>
        </div>   
    
    </div>
  )
}
