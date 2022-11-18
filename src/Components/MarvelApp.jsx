import React, { useEffect, useState } from "react";
import Header from "./Input/SearchInput";
import "./MarvelApp.css";
import Card from "./CharCard/Card";
import fetchData, { filterData } from "../Common/app";

const MarvelApp = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setData(data.results);
    };
    loadData();
  }, []);



  return (



    <div className="input_search">
      {/* Add the input field with the input element  */}
      <Header setText={setText} />
      {/**
       * Render the stored data using the map function
       * before render filter them with their name
       */}
      <Card data={filterData(data, text)} text={text} />
    </div>
  );
};

export default MarvelApp;
