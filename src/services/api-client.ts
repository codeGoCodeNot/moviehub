import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "9d86524a9ebdf121e001933ee50c799e",
  },
});
