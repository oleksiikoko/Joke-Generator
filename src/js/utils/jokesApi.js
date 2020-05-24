import axios from "../core/axiosJokes";

export default {
  getJokes: (query) => {
    return axios.get(query).then((response) => {
      if (response.status !== 200) {
        console.log("Categories error");
      }
      return response.data;
    });
  },
  getCategories: () => {
    return axios.get("/categories").then((response) => {
      if (response.status !== 200) {
        console.log("Categories error");
      }
      return response.data;
    });
  },
};
