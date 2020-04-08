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
        <Search
          // onResult={data => {
          //   console.log(data)
          //   // this.setState({data: data.articles})
          // }}
        />
      </div>
    );
  }
}
export default App;