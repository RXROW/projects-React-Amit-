import { Component } from "react";
class Product extends Component {
    render() {
      const { product } = this.props;
  
      return (
        <>
          <div className="card mt-2 ">
            <img src={product.image} className="card-img-top " alt={product.title} />
            <div className="card-body">
              <h4 className="card-title">{product.title}</h4>
              <p className="card-text">{product.description}</p>
              <h5 className="card-title">${product.price}</h5>
            </div>
          </div>
        </>
      );
    }
  }
  
  export default Product;