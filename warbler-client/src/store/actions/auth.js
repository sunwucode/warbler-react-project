import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";


export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function authUser(type, userData) {
  return dispacth => {
    return new Promise((resolve, reject) => {
      return apiCall("post", `api/auth/${type}`, userData)
      .then((token, ...user) => {
          localStorage.setItem("jwtToken", token)
          dispacth(setCurrentUser(user))
          resolve();
      })
      .catch()
    })
  }
}