import { SearchOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { useState } from "react";

function FiltMotorcycle() {
  const [budget, setBudget] = useState(false);
  const [year, setYear] = useState(false);
  const [kilometer, setKilometer] = useState(false);

  return (
    <div
      style={{  textAlign: "left",
      width: "300px",
      padding: "2% 2%",
      boxSizing: "border-box",
      border: "none", }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        Used Bikes in India
      </div>
      <br />
      <div>
        <select style={{ border: "none" }}>
          <option value="0" style={{ fontSize: "16px", fontWeight: "700" }}>
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
            style={{ marginRight: "5px", color: "#002f34" }}
            type="checkbox"
          />
          Honda
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "#002f34" }}
            type="checkbox"
          />
          Bajaj
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "#002f34" }}
            type="checkbox"
          />
          Hero Honda
        </div>
      </div>
      <br />
      <hr />

      <div>ALL Models</div>
      <div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "#002f34" }}
            type="checkbox"
          />
          CB
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "#002f34" }}
            type="checkbox"
          />
          Pulsar
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "#002f34" }}
            type="checkbox"
          />
          Splender
        </div>
      </div>
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>BUDGET</div>
        <div style={{ flexGrow: "1" }}></div>
        {!budget ? (
          <DownOutlined onClick={() => setBudget(!budget)} />
        ) : (
          <UpOutlined onClick={() => setBudget(!budget)} />
        )}
      </div>

      {budget && (
        <div>
          <div style={{ marginTop: "5px", marginBottom: "5px" }}>
            Choose from options below