import {useContext} from "react";
import {BsCart4} from "react-icons/bs";
import {ShopContext} from "../context";

function CartIcon() {

    const {getCardQuantity, toggleCart} = useContext(ShopContext);

    const quantity = getCardQuantity();
    if (!quantity) {
        return null;
    }

    return (
        <div
            className="cart-icon bg-warning text-dark"
            onClick={toggleCart}
        >
            <BsCart4/>
            <span className="cart-quantity">{quantity}</span>
        </div>
    );
}

export default CartIcon;