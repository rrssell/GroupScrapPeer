import React,{useState} from "react";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading} from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom";
import styles from "./Post.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import { useReducer } from 'react';
import {useDispatch} from "react-redux";
import {postData} from "../Redux/AppReducer/action";
import { POSTDATA_SUCCESS } from "../Redux/AppReducer/actionType";
const initialState={
    name:"",
    price:"",
    year:"",
    distance:"",
    fuel:"",
    address:"",
    postDate:Date().toString().substr(3,15),
    totalOwners:"",
    state:"",
    category:"cars",
    brand:"",
    model:"",
    transmission:"",
    product_desc:"",
    img:""
}
function reducer(state,{type,payload}){
    switch(type){
      case "name":return {...state,name:payload}
      case "price":return {...state,price:payload} 
      case "year":return {...state,year:payload}
      case "distance":return {...state,distance:payload}
      case "fuel":return {...state,fuel:payload}
      case "address":return {...state,address:payload}
      case "postDate":return {...state,postDte:payload} 
      case "totalOwners":return {...state,totalOwners:payload}
      case "state":return {...state,state:payload}
      case "category":return {...state,category:payload}
      case "brand":return {...state,brand:payload}
      case "model":return {...state,model:payload}
      case "transmission":return {...state,transmission:payload}
      case "product_desc":return {...state,product_desc:payload}
      case "img":return {...state,img:payload}
      default:return state;
    }
    }
export const Post=()=>{
    const [image, setImage] = useState({ preview: "", raw: "" });
    const [state,setter]=useReducer(reducer,initialState);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleChange = e => {
      if (e.target.files.length) {
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
        console.log(e.target.files[0]);
        setter({type:"img",payload:e.target.files[0].webkitRelativePath});
      }
    };
  
    const handleUpload = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image.raw);
  
      await fetch("YOUR_URL", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: formData
      });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(postData(state)).then((r)=>{
            if(r===POSTDATA_SUCCESS){
                alert("Congratulations! Your Ad is Live!");
                
                navigate("/",{replace:true});
            }
        });

    };

    return 