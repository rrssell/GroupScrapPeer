import React from 'react';
import styles from "./Sell.module.css";
import {Box, Center, Flex, Heading} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {ChevronRightIcon} from "@chakra-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCar,faBuilding, faMobileButton, faBriefcase, faMotorcycle, faDisplay, faTruckPlane, faCouch, faShirt, faGuitar, faShieldDog, faBellConcierge} from "@fortawesome/free-solid-svg-icons";
const Sellerpage = () => {
  const showBox=(menu)=>{
    let carbox=document.getElementById("auto");
    let propertybox=document.getElementById("property");
    let mobilebox=document.getElementById("mobile");
    let jobbox=document.getElementById("job");
    let bikebox=document.getElementById("bike");
    let abox=document.getElementById("appliance");
    let sparebox=document.getElementById("spare");
    let fbox=document.getElementById("furniture");
    let fashionbox=document.getElementById("fashion");
    let bookbox=document.getElementById("book");
    let petbox=document.getElementById("pet");
    let sbox=document.getElementById("service");
    if(menu==="auto"){
    
      carbox.style.display="block";
    }
    else{
      carbox.style.display="none";
    }
    if(menu==="property"){
      
        propertybox.style.display="block";
      }
      else{
        propertybox.style.display="none";
      }
    if(menu==="mobile"){
        
          mobilebox.style.display="block";
        }
        else{
          mobilebox.style.display="none";
        }
      if(menu==="job"){
          
            jobbox.style.display="block";
          }
          else{
            jobbox.style.display="none";
          }
      if(menu==="bike"){
           
              bikebox.style.display="block";
            }
            else{
              bikebox.style.display="none";
            }
      if(menu==="appliance"){
             
                abox.style.display="block";
              }
              else{
                abox.style.display="none";
              }
      if(menu==="spare"){
               
                  sparebox.style.display="block";
                }
                else{
                  sparebox.style.display="none";
                }
      if(menu==="furniture"){
                 
                    fbox.style.display="block";
                  }
                  else{
                    fbox.style.display="none";
                  }
      if(menu==="fashion"){
                    
                      fashionbox.style.display="block";
                    }
                    else{
                      fashionbox.style.display="none";
                    }
      if(menu==="book"){
                     
                        bookbox.style.display="block";
                      }
                      else{
                        bookbox.style.display="none";
                      }
      if(menu==="pet"){
                      
                          petbox.style.display="block";
                        }
                        else{
                          petbox.style.display="none";
                        }
      if(menu==="service"){
                         
                            sbox.style.display="block";
                          }
                          else{
                            sbox.style.display="none";
                          }
  };
  return (<></>