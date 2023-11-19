import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "./button/button.component";
import CartItem from "./CartItem";
import { selectCartItems, selectIsCartOpen } from "../store/cart/cart.selector";
import { setIsCartOpen } from "../store/cart/cart.action";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    toggleIsCartOpen();
  };

  return (
    <div className="fixed w-[90%] md:w-[250px] h-[250px] md:h-[340px] flex flex-col p-[10px] md:p-[20px] border border-[#000] bg-[#fff] top-[55px] right-[5%] md:right-12 z-50 rounded-lg animate-dropdown">
      <div className="flex flex-col h-60 overflow-y-scroll">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="text-lg  my-[50px] mx-auto">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
