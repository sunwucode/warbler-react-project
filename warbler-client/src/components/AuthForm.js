import React,{ Component } from "react";
import error from "../store/reducers/error";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: "",
    };
  }

  handleChange = (e) =>{ 
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props.onAuth(authType, this.state).then(()=>{
      this.props.history.push("/")
      })
      .catch(()=> {
        return
      })

  }

  render(){
    const  {email, username, password, profileImageUrl} = this.state;
    const {heading, buttonText, signUp, errors, history, removeError } = this.props;

    history.listen(() =>{
      removeError();
    });

    return(
      <div>
        <div className="row justify-content-md-center text-center"></div>
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit} >
            <h2>{heading}</h2>
            {errors.message && <div className="alert alert-danger">{errors.message}</div>}
            <label htmlFor="email">email:</label>
            <input className="form-control" id="email" name="email" onChange={this.handleChange} value={email} type="text"/>
            <label htmlFor="password">password:</label>
            <input className="form-control" id="password" name="password" onChange={this.handleChange} type="password"/>
          
            {signUp && (
              <div>
                <label htmlFor="username">username:</label>
            <input className="form-control" id="username" name="username" onChange={this.handleChange} value={username} type="text"/>
            <label htmlFor="image-url">image URL:</label>
            <input className="form-control" id="image-url" name="profile-image" onChange={this.handleChange} type="text"/>
              </div>
            )}
            <button className="btn btn-primary btn-block btn-lg">{buttonText}</button>
          </form>
        </div>
      </div>
    )
  }
};
