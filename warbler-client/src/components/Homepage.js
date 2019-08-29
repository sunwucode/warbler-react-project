import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({currentUser}) => {
if(!currentUser.isAuthenticated){
  return(
    <div className="home-hero">
      <h1>what's happening</h1>
      <h4>New to warbler? </h4>
      <Link to="/signup" className="btn btn-primary"> Sign Up </Link>
    </div>
    )
}
  return(
    <div><h1>You made it !</h1></div>
  )
};

export default Homepage;