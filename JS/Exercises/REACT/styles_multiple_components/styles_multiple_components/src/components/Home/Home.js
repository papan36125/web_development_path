import React from 'react';
import ReactDOM from 'react-dom';
import { AttentionGrabber } from '../AttentionGrabber/AttentionGrabber';
import {styles} from "../../styles";
import {Wow} from "../FacebookColorThief/FacebookColorThief";

const divStyle = {
  background: styles.background,
  height:     '100%'
};

export class Home extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <AttentionGrabber />
        <Wow />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}
