import styles from "./CardDetails.module.css";
import { ShareAltOutlined, HeartOutlined } from "@ant-design/icons";
import avatar from "./Images/avatar.png";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CardDetails=({content:{
  img,
  brand,
  year,
  model,
  distance,
  price,
  address,
  postDate,
  product_desc,
  sellerName,
  memeberSince,
  fuel,
  totalOwners,
}})=> {
  const[page,setPage]=useState(1);
  const [data,setData]=useState([]);
  const [total,setTotal]=useState(0);
  const{type}=useParams()
  useEffect(()=>{
    const getData=async()=>{
      let r= await axios.get(`https://red-violet-salmon-wrap.cyclic.app/${type}?_page=${page}&_limit=4`);
         setData(r.data);
          setTotal(Number(r.headers["x-total-count"]))
      }
   getData()
 },[type,page]);
  return (
    <div className={styles.mcontainer}>
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div style={{ border: "1px solid #CCD5D6" }} className={styles.custom}>
          <img objectFit="content" src={img} alt="content" />
        </div>
        <div style={{ textAlign: "left", border: "1px solid #CCD5D6" }}>
          <div
            style={{
              fontWeight: "700",
              fontSize: "20px",
              color: "black",
              marginBottom: "2%",
            }}
          ></div>