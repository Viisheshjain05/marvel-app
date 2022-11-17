import axios from "axios";

import React, { useEffect, useState } from "react";

const url = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b65ec668725e834fb0e4303ce193e30e&hash=62342711d730f4addb195352a1977e5f";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const fetchData = async () => {
    const response = await axios.get(url);
    const characters = response.data;
    const { data } = characters;
    setData(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div classNameName="input_search">
      <input
        type="search"
        name=""
        id="searchBar"
        placeholder="Enter your favourite star"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="container">
        {data?.length > 0 &&
          data
            .filter((val) => {
              if (text === "") {
                return val;
              }
              return val.name.toLowerCase().includes(text);
            })
            .map((item) => {
              console.log(item.thumbnail.path + `/portrait_incredible.gif`);
              return (
                <div className="card" key={item.id}>
                  <img
                    src={
                      item.thumbnail.path +
                      `/portrait_incredible.` +
                      item.thumbnail.extension
                      // "https://terrigen-cdn-dev.marvel.com/content/prod/1x/triathlon.jpg"
                    }
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default SearchBar;
