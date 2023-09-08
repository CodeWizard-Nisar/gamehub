import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a6d97817172b4628908e63da0c305477",
  },
});
