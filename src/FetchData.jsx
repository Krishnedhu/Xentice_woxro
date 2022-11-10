import axios from 'axios'
export const getData = () => {
    return axios.get("https://api.xentice.com/api/postadSelect");
  };
