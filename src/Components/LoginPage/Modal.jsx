import React, { useRef, useState } from "react";
import styles from "./Modal.module.css";
import { OTPpage } from "./OTPpage";
import { useNavigate } from "react-router-dom";

export const Modal = ({ show, handleClose }) => {
  const navigate=useNavigate()
  const [emailSection, setEmailSection] = useState(false);
  const [phoneSection, setPhoneSection] = useState(false);
  const [mainSection, setMainSection] = useState(true);
  const [otpSection, setOtpSection] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otpLength,setOtpLength]=useState(false);
  const [page, setPage] = useState(0);
  const [name,setName]=useState("");
  const pointer = useRef(null);
  const slides = [
    {
      url: "./loginEntryPointChat.webp",
      text: "Close deals from the comfort of your home",
      id: 1,
    },
    {
      url: "./loginEntryPointPost.webp",
      text: "Help us become one of the safest places to buy and sell",
      id: 2,
    },
    {
      url: "./loginEntryPointFavorite.webp",
      text: "Keep all your favorites in one place",
      id: 3,
    },
  ];

  const showEmailSection = () => {
    pointer.current = "email";
    setEmailSection(true);
    setMainSection(false);
    setOtpSection(false);
    setPhoneSection(false);
    setOtpLength(false);
  };
  const showOtpSection = () => {
    setOtpSection(true);
    setEmailSection(false);
    setMainSection(false);
    setPhoneSection(false);
    setOtpLength(false);
    alert("Your OTP is 2579.");
  };
  const gotoMain = () => {
    setMainSection(true);
    setEmailSection(false);
    setPhoneSection(false);
    setOtpSection(false);
    setOtpLength(false);
  };
  const handlePhone = () => {
    pointer.current = "phone";
    setPhoneSection(true);
    setMainSection(false);
    setEmailSection(false);
    setOtpSection(false);
    setOtpLength(false);
  };
  const gotoEmail = () => {
    if (pointer.current === "phone") {
      setEmailSection(false);
      setPhoneSection(true);
      setMainSection(false);
      setOtpSection(false);
      setOtpLength(false);
    } else {
      setEmailSection(true);
      setPhoneSection(false);
      setMainSection(false);
      setOtpSection(false);
      setOtpLength(false);
    }
  };
  const handleDec = (value) => {
    value = (page - value) % 3;
    setPage(value);
  };
  const handleInc = (value) => {
    value = (page + value) % 3;
    setPage(value);
  };

  if (!show) {
    return null;
  }