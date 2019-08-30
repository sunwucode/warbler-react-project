import React from "react";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const UserAside = ({profileImageUrl, username}) => (
  <aside className="col-sm-2">
    <div>
      <div><img src="{profileImageUrl}" alt="{username}" className="img-thumbnail"/></div>
    </div>
  </aside>
)

export default UserAside;