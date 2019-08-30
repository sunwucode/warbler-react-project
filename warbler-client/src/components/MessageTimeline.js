import React from "react";  
import messageList from "../containers/MessageList";
import UserAside from "./UserAside";

const messageTimeline = props => {
  return(
    <div className="row">
      <UserAside profileImageUrl={props.profileImageUrl}
      username={props.username}
      />
      <MessageList/>
    </div>
  )
}

export default messageTimeline;