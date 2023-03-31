import React from "react";
import './Regions.css'
import SideBar from "../../../svgs/sideBar.svg"
import Road from "../../../svgs/Road.svg"
import Calicut from "../../../svgs/Calicut.svg"
import Trivandrum from "../../../svgs/Trivandrum.svg"
import Kochi from "../../../svgs/Kochi.svg"
import HorizontalFloatingBar from "../../../svgs/horizontalFloatingBar.svg"
import Marquee from "react-fast-marquee";
export default function Regions() {
  return (
    <div className="regions-section">
      <div className="upper-section">
      <span className="sideBarRegions">
      <a href="https://www.youtube.com/@Google" rel="noreferrer" target="_blank"><img src={SideBar} alt="illustrations.svg"/></a>
      </span>
      <p className="RegionsText">Regions</p>
      <span className="mainImage">
      <img className="Road" src={Road} alt="illustrations.svg"/>
      <img className="Calicut" src={Calicut} alt="illustrations.svg"/>
      <img className="Trivandrum" src={Trivandrum} alt="illustrations.svg"/>
      <img className="Kochi" src={Kochi} alt="illustrations.svg"/>
        
      </span>
        </div>
        <Marquee pauseOnHover speed={1} delay={0} gradient={false}>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>

        </Marquee>
    </div> 
  );
}