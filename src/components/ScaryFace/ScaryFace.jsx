import React, { Component } from "react";
import styles from "./ScaryFace.module.scss";
import ScaryFaceMain from "../../assets/scary.png";
import LeftEye from "../../assets/eye1big.png";
import RightEye from "../../assets/eye2big.png";

class ScaryFace extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  render() {
    const eyeRote = { transform: `rotate(${this.props.rotate}deg)` };
    const eyeNormal = { transform: `rotate(0deg)` };
    const rotateEyes = this.state.isClicked ? eyeRote : eyeNormal;
    return (
      <div onClick={this.handleClick}>
        <img src={ScaryFaceMain} alt="Shea" className={styles.ScaryFace} />
        <img
          src={LeftEye}
          alt="Eye"
          className={`${styles.LeftEye}`}
          style={rotateEyes}
        />
        <img
          src={RightEye}
          alt="Eye"
          className={`${styles.RightEye}`}
          style={rotateEyes}
        />
      </div>
    );
  }
}

export default ScaryFace;
