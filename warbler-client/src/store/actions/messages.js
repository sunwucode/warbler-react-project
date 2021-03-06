import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
});

export const fetchMessages = () => {
  return dispatch => {
    return apiCall("GET", "/api/messages")
    .then(function(res){ dispatch(loadMessages(res));
     })
    .catch(function(err) {addError(err.message)}
    );
  }
}