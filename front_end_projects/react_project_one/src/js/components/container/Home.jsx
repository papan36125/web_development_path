import React, { Component } from "react";
import ReactDOM from "react-dom";
import ModuleOne from "../presentational/ModuleOne.jsx";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      current_page: 'home'
    };
    this.change_module = this.change_module.bind(this);
  }
  change_module(event) {
    this.setState({ current_page: event.target.id });
  }
  render() {
    if(this.state.current_page === 'home'){
      return(
        <form id="home-form">
        <button type="button" className="btn btn-primary btn-lg btn-block" id="module-one" onClick={this.change_module}>Module One</button>
        <button type="button" className="btn btn-primary btn-lg btn-block" disabled>Module Two</button>
        <button type="button" className="btn btn-primary btn-lg btn-block" disabled>Module Three</button>
        <button type="button" className="btn btn-primary btn-lg btn-block" disabled>Module Four</button>
        </form>
      );
    } else if(this.state.current_page === 'module-one'){
      return (
        <form id="module-one-form">
          <ModuleOne
            text="SEO title"
            label="seo_title"
            type="text"
            id="seo_title"
            value={this.state.title}
            handleChange={this.handleChange}
          />
        </form>
      );
    }

  }
}
export default Home;
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
