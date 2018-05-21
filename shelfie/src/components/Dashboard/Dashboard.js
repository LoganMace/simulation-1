import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);
    let inventory = this.props.inventory.map((product, index) => (
      <Product
        key={index}
        imageUrl={product.imageurl}
        productName={product.productname}
        price={product.price}
      />
    ));

    return (
      <div className="Dashboard">
        {inventory}
      </div>
    )
  }
}

export default Dashboard;
