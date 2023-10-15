import React, { Component } from "react";
 import Product from "./Product";
class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: []
   
    };
  }

  componentDidMount() {
    this.getProducts();
   
  }

  getProducts = () => {
      

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ product: data });
      });
  };

 

 

  render() {
    const { product} = this.state;

    return (
      <>
        <h2 className="text-center text-bg-primary p-2">Our Products</h2>
        <div className="container">
          <div className="row">
            {product.map((product) => {
              return (
                <div className="col-3" key={product.id}>
                  <Product product={product} showBtn={true} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Data;