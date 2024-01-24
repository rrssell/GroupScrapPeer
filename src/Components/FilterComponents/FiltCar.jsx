import { SearchOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getAtypeproduct } from "../../Redux/AppReducer/action";

function FiltCar() {
  const [kilometer, setKilometer] = useState(false);
  const [fuel, setFuel] = useState(false);
  const [transmission, setTransmission] = useState(false);
  const [budget, setBudget] = useState(false);
  const [year, setYear] = useState(false);
  const [owner, setOwner] = useState(false);
  const [inspection, setInspection] = useState(false);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSort = searchParams.get("sortBy");
  const urlCategory = searchParams.getAll("brand");

  const [sortBy, setSortBy] = useState(urlSort || "");
  const [brand, setBrand] = useState(urlCategory || []);
  //filtering
  const handleChange = (e) => {
    let newCategory = [...brand];
    const option = e.target.value;

    //if option is already present then remove it else ppush it.
    if (brand.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setBrand(newCategory);
  };

  useEffect(() => {
    if (brand || sortBy) {
      let params = {};
      brand && (params.brand = brand);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
      // dispatch(getBooks({ params: { brand } }));
    }
  }, [brand, searchParams, sortBy]);

  //sorting
  const handleSort = (e) => {
    let radioValue = e.target.value;
    setSortBy(radioValue);
  };

  //reseting
  const handleReset = () => {
    if (brand || sortBy) {
      setSortBy("");
      setBrand([]);
      dispatch(getAtypeproduct());
    }
  };
  return (
    <div
      style={{
        textAlign: "left",
        width: "300px",
        padding: "2% 2%",
        boxSizing: "border-box",
        border: "none",
      }}
    >
      <div style={{ fontSize: "23px", fontWeight: "bold" }}>
        Used Cars in India
      </div>
      <br />
      <div>
        <select style={{ border: "none" }}>
          <option value="0" style={{ fontSize: "14px", fontWeight: "600" }}>
            CATEGORIES
          </option>
          <option value="1">Cars</option>
          <option value="2">Motor Cycles</option>
          <option value="3">For Sale: Houses & Apartments</option>
          <option value="4">Scooters</option>
          <option value="5">Commercial and Other Vehicles</option>
          <option value="6">For Rent: Houses & Apartments</option>
        </select>
      </div>
      <br />
      <hr />
      <div>
        <select style={{ border: "none" }}>
          <option value="0" style={{ fontSize: "16px", fontWeight: "700" }}>
            LOCATIONS
          </option>
          <option value="1">India</option>
          <option value="2">Maharashtra</option>
          <option value="3">Tamil Nadu</option>
          <option value="4">Uttar Pradesh</option>
          <option value="5">Kerala</option>
          <option value="6">Delhi</option>
          <option value="4">Punjab</option>
        </select>
      </div>
      <br />
      <hr />
      <div style={{ color: "rgba(0,47,52,.64)", marginBottom: "3%" }}>
        Filters
      </div>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid black",
            width: "90%",
            padding: "5%",
          }}
        >
          <input
            style={{ border: "none" }}
            type="text"
            placeholder="Search brand or model"
          />
          <div style={{ flexGrow: "1" }}></div>
          <SearchOutlined />
        </div>
      </div>
      <br />

      <div>ALL BRANDS</div>
      <div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "black" }}
            type="checkbox"
            value="Maruti Suzuki"
            checked={brand.includes("Maruti Suzuki")}
            onChange={handleChange}
          />
          Maruti Suzuki
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "black" }}
            type="checkbox"
            value="Toyota"
            checked={brand.includes("Toyota")}