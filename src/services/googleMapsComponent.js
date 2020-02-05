import axios from "axios";

export default {
  searchPharmacies: query => {
    // console.log query
    return axios
      .post(`http://localhost:3001/api/pharmacy/search`, { query }) // the proxy isn't working properly
      .then(res => res.data)
      .catch(err => console.log("err in service ", err));
  }
};
