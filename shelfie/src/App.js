import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
// import Product from "./components/Product/Product";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  };

  getInventory(){
    axios.get("/api/inventory").then(response => {
      // console.log(response);
      this.setState({
        inventory: response.data
      });
    });
  };

  render() {
    console.log(this.state.inventory);
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form getInventory={this.getInventory}/>
      </div>
    );
  }
}

export default App;
