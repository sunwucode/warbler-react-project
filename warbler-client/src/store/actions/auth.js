import { apiCall, SetTokenHeader } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";


export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout(){
  return dispacth => {
    localStorage.clear();
    dispacth(setCurrentUser({}));
  };
}

export function setAuthorizationToken(token){
  SetTokenHeader(token);
}

export function authUser(type, userData) {
  return dispacth => {
    return new Promise((resolve, reject) => {
      return apiCall("post", `api/auth/${type}`, userData)
      .then((token, ...user) => {
          localStorage.setItem("jwtToken", token)
          dispacth(setCurrentUser(user))
          dispacth(removeError)
          resolve();
      })
      .catch(error => {
        dispacth(addError(error.message));
        reject();
      });
    });
  };
}