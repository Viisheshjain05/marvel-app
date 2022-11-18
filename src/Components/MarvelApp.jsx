import React, { useEffect, useState } from "react";
import SearchInput from "./Input/SearchInput";
import "./MarvelApp.css";
import Card from "./CharCard/Card";
import app from "../Common/app";

const MarvelApp = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const data = await app.fetchData();
      setData(data.results);
    };
    loadData();
  }, []);

  let charArr = app.filterData(data, text);
  return (
    <div className="input_search">
      {/* Add the input field with the input element  */}
      <SearchInput setText={setText} />

      {/* filter them with their name */}
      <div className="container">
        {charArr?.length > 0
          ? charArr.map((char) => <Card char={char} />)
          : null}
      </div>
    </div>
  );
};

export default MarvelApp;
