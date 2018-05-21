import React, { Component } from "react";
import axios from 'axios';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      productName: "",
      price: 0,
      products: []
    };
    this.imageHandler = this.imageHandler.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.priceHandler = this.priceHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  imageHandler(event) {
    this.setState({
      imageUrl: event.target.value
    });
  }

  nameHandler(event) {
    this.setState({
      productName: event.target.value
    });
  }

  priceHandler(event) {
    this.setState({
      price: event.target.value
    });
  }

  addHandler(name, price, image) {
    axios.post('/api/product', {name, price, image});
    this.props.getInventory();
    this.setState({
      imageUrl: "",
      productName: "",
      price: 0
    });
  }

  cancelHandler() {
    this.setState({
      imageUrl: "",
      productName: "",
      price: 0
    });
  }

  render() {
    return (
      <div className="Form">
        <div className='inputs'>
          <p className='input-titles'>Image URL:</p>
          <input
            type="text"
            value={this.state.imageUrl}
            onChange={event => this.imageHandler(event)}
          />
          <p className='input-titles'>Product Name:</p>
          <input
            type="text"
            value={this.state.productName}
            onChange={event => this.nameHandler(event)}
          />
          <p className='input-titles'>Price:</p>
          <input
            type="text"
            value={this.state.price}
            onChange={event => this.priceHandler(event)}
          />
          <div className='buttons'>
            <button className="cancel" onClick={this.cancelHandler}>
              Cancel
            </button>
            <button className="add" onClick={() => this.addHandler(this.state.productName, this.state.price, this.state.imageUrl)}>
              Add to Inventory
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
