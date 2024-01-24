import React from 'react'
import Styles from "./Footer.module.css";
import { RiFacebookCircleLine } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { AiOutlineYoutube } from 'react-icons/ai';
const Footer = () => {
  return (
    
        <div className={Styles.fm}>
        <div className={Styles.fm1}>
            <div className={Styles.fm1a}>
                <img src="footer.jpg" alt="" />
            </div>
            <div className={Styles.fm1b}>
                <h1>ScrapPeer</h1>
                <p>Your Best Trading Partner</p>
            </div>
            <div className={Styles.fm1c}>
                <h3>GET YOUR APP TODAY</h3>
                <div className={Styles.fm1cimg}>
                <img src="https://statics.OLX.in/external/base/img/appstore_2x.webp" alt="" />
                <img src="https://statics.OLX.in/external/base/img/playstore_2x.webp" alt="" />
                </div>
            </div>

        </div>
        <div className={Styles.fm2}>
        <div>
            <h4>POPULAR LOCATIONS</h4>
            <p><a href="#">Manila</a></p>
           <p><a href="#">Navotas</a></p>
           <p><a href="#">Malabon</a></p>
           <p><a href="#">Caloocan</a></p>
        </div>
        <div>
        <h4>TRENDING LOCATIONS</h4>
            <p><a href="#">Manila</a></p>
           <p><a href="#">Navotas</a></p>
           <p><a href="#">Malabon</a></p>
           <p><a href="#">Caloocan</a></p>
        </div>
        <div>
        <h4>ABOUT US</h4>
            <p><a href="#">About ScrapPeer Group</a></p>
           <p><a href="#">Careers</a></p>
           <p><a href="#">Contact Us</a></p>
           <p><a href="#">ScrapPeer People</a></p>
           
        </div>