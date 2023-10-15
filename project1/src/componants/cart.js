import React, { Component } from 'react';

class Cart extends Component {
 
  render() {
  const { prop1, prop2 } = this.props;

  return (
    <div>
      <h1>Hello{prop1}</h1>
      <p>Pro{prop2}</p>
    </div>
)}
  }
 
export default Cart;
