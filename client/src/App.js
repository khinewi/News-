import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Result from "./components/Result";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data:[] }
  }
  render() {
    return (
      <div>
        <Search/>
        
      </div>
    );
  }
}
export default App;