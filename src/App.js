import React, { Component } from "react";
import "./App.css";
import ScaryFace from "./components/ScaryFace";
import googleIcon from "./assets/google-icon.png";
import firebase, { provider } from "./firebase";

class App extends Component {
  state = {
    user: null,
    error: {}
  };

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        this.setState({
          user
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const notLoggedIn = "Sign in with google";
    const loggedIn = "Sign out";
    const changeBtnText = this.state.user ? loggedIn : notLoggedIn;
    return (
      <div>
        <div>
          <ScaryFace rotate={1800} />
          <ScaryFace rotate={12} />
          <ScaryFace rotate={70} />
          <ScaryFace rotate={3000000} />
          <ScaryFace rotate={250} />
          <ScaryFace rotate={70} />
        </div>
        <div onClick={this.signIn}>
          <img src={googleIcon} alt="" />
          <button>{changeBtnText}</button>
        </div>
      </div>
    );
  }
}
export default App;
