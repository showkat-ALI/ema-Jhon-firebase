import React from "react";
import AllProducts from "../../hooks/AllProducts";
import UseCart from "../../hooks/useCart";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products, setProducts] = AllProducts();
  const [cart,setCart] = UseCart(products);
  const handleRemove = (key) => {
    const newCart = cart.filter(product=> product.key !== key);
    setCart(newCart)
    removeFromDb(key)
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            handleRemove={handleRemove}
            product={product}
          ></ReviewItem>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
