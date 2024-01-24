import React, { useState } from 'react'

import Styles from"./Navbar.module.css";
import search_logo from "../NavLogos/search.png"
import arrow from "../NavLogos/arrow.png";
import search2 from "../NavLogos/download.png";
import msg from "../NavLogos/msg.png";
import bell from "../NavLogos/bell.png";
import sell from "../NavLogos/sell.png";
import {Link, useNavigate} from "react-router-dom"
import Dropdown from './Dropdown';
const Navbar = () => {
  const navigate=useNavigate();
  const [show, setShow] = useState(false);
 
  return (
    <div className={Styles.navbar}>
        <div className={Styles.nav1}>
            <div className={Styles.n1}>
                <img width='50px' height='35px'
                src="https://olx-webclone.web.app/static/media/olx%20logo.f23ad0c1.png" alt="" 
                onClick={()=>navigate("/")} />
            </div>
              <div className={Styles.inp1}>
                <div className={Styles.slogo}>
                  <img width='30px' height='30px'
                  src={search_logo}  />
                </div>
                <input className={Styles.s1}   />
                <select>
                  <option><h5>India</h5></option>
                  <option><h5>Kerala</h5></option>
                  <option><h5>Bihar</h5></option>
                  <option><h5>Punjab</h5></option>
                  </select>
                {/* <img width='30px' height='30px' src={arrow} /> */}
             </div>
            <div className={Styles.inp2}>
              <input className={Styles.s2} placeholder='Find Cars, Mobile Phones and more...'/>
              <div className={Styles.slogo2}>
                <img src={search2} width='40px' height='100%'/>
              </div>