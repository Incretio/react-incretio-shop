import {BsCart4} from "react-icons/bs";

function CartIcon({quantity, handleCartShow}) {

    if (!quantity) {
        return null;
    }

    return (
        <div
            className="cart-icon bg-warning text-dark"
            onClick={handleCartShow}
        >
            <BsCart4/>
            <span className="cart-quantity">{quantity}</span>
        </div>
    );
}

export default CartIcon;