//use axios to get API and then import into Data.js to be able receive

import axios from "axios";

export const API = "https://randomuser.me/api/?results=200&nat=us";

export const fetchData = async (query) => {
  const url = `${API}/search?query=${query}`;

  return await axios.get(url);
};
fetchData("react");
