import URI from "./config";
import axios from "axios";

let app = {};

app.fetchData = async () => {
  const response = await axios.get(URI);
  const characters = response.data;
  const { data } = characters;
  //   setData(data.results);
  return data;
};

app.filterData = (data, text) => {
  const value = data.filter((fiterby) => {
    if (text === "") {
      return data;
    }
    return fiterby.name.toLowerCase().includes(text.toLowerCase());
  });

  return value;
};

export default app;
