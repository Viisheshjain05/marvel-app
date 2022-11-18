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

  let charArr = filterData(data, text);
  return (
    <div className="input_search">
      {/* Add the input field with the input element  */}
      <Header setText={setText} />

      {/* filter them with their name */}
      {charArr?.length > 0 ? charArr.map((char) => <Card char={char} />) : null}
    </div>
  );
};

export default MarvelApp;
