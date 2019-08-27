import axios from "axios";

export function SetTokenHeader(token) {
  if(token){
    axios.defaults.header.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.header.common["Authorization"];
  }
}

export function apiCall (method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method](path,data)
    .then(res => {
      return resolve(res.data);
    })
    .catch(err => {
      return reject(err.response.data.error)
    });
  });
};