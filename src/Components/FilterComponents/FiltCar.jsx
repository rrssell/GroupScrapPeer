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