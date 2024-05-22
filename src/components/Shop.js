import React, {useContext} from "react";
import Items from "../Items";
import Preloader from "./Preloader";
import CartIcon from "./CartIcon";
import Cart from "./Cart";
import Toast from "./Toast";
import {ShopContext} from "../context";

function Shop() {

    const {lastAddedItem, isCartShow, isLoading, clearCart} = useContext(ShopContext);

    const payCart = () => {
        alert("Payed. Thank you!");
        clearCart();
    }

    return (
        <div className="container content">
            {!isCartShow && <CartIcon/>}
            {isLoading ? <Preloader/> : <Items/>}
            {isCartShow && <Cart payCart={payCart}/>}
            {lastAddedItem && <Toast/>}
        </div>
    );
}

export default Shop;