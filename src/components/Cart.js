import {BsCart4} from "react-icons/bs";

function Cart({quantity}) {

    if (!quantity) {
        return null;
    }

    return (
        <div className="cart bg-warning text-dark">
            <BsCart4/>
            <span className="cart-quantity">{quantity}</span>
        </div>
    );
}

export default Cart;