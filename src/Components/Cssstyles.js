import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryNavbar = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px;
  border: 10px solid #f7f8f9;
  background-color: #ffffff;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #eeeeee;

  div:nth-child(1) {
    margin-left: 6%;
    margin-right: 1%;
    font-size: 20px;
    color: black;
    font-weight: 450;
  }

  a {
    text-decoration: none;
    color: black;
    margin: 5px 12px 5px 5px;
    font-size: 15px;
  }

  a:hover {
    color: #5eece5;
  }
`;

export const CardWrapper = styled.div`
    border: 1px solid #CCD5D6;
    border-radius: 5px;
    text-align: left;
    margin: 0.6%;
    cursor: pointer;
    flex-basis: 30%;
    background-color: white;

    div:nth-child(1) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    div:nth-child(1) > div {
        flex-grow: 1;
    }

    div:nth-child(1) > img{
        height:35vh;
        width:100%;
        margin-top: 2%;
        max-width: 85%;
    }

    div:nth-child(1) > button {
        height: 5vh;
        border: 0;
        outline: none;
        background: #ffffff;
        font-size: 20px;
        cursor: pointer;
        margin: 3% 0 0 0;
    }

    div:nth-child(2) {
        margin: 0 0 0 5%;
    }