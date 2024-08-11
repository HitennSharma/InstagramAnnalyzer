import React from 'react';

function ProductList(props) {
  return (
    <>
      <div className="product-header product">
        <div className="name">Name</div>
        <div className="price">Price</div>
        <div className="quantity">Quantity</div>
        <div className="total-amount">Total Amount</div>
        <div className="btn">Delete</div>
      </div>
      {props.products.length > 0 ? (
        props.products.map((product) => (
          <div className="product" key={product.name}>
            <div className="name">{product.name}</div>
            <div className="price">${product.price}</div>
            <div className="quantity">
              <button className="btn sbtn" onClick={() => props.decreaseQuantity(product)}>
                -
              </button>
              <span>{product.quantity}</span>
              <button className="btn sbtn" onClick={() => props.increaseQuantity(product)}>
                +
              </button>
            </div>
            <div className="total-amount">{product.price * product.quantity}</div>
            <button className="btn btn-btn" onClick={() => props.removeQuantity(product)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <h1>No items to display</h1>
      )}
    </>
  );
}

export default ProductList;
