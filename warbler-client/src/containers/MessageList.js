import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../store/actions/messages";

class MessageList extends Component {
  componentDidMount(){
    this.props.fetchMessages();
  }
  render() {
    const { messages } = this.props;
    let MessageList = messages.map(m => (
      <MessageItem 
      key={.m.Id}
      date= {m.createdAt}
      text={m.text}
      username={m.user.username}
      profileImageUrl={m.user.profileImageUrl}
      />
    ));
    return MessageList;
  }
}

function mapStateToProps(state) {
  return{
      messages: state.messages
  };
}
export default withRouter(connect(mapStateToProps, { fetchMessages })(MessageList));