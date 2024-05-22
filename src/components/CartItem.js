import {useContext} from "react";
import {MdDelete} from "react-icons/md";
import {FaRegSquareMinus, FaRegSquarePlus} from "react-icons/fa6";
import {ShopContext} from "../context";

function CartItem({id, title, price, quantity}) {

    const {removeFromCart, changeQuantity} = useContext(ShopContext);

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="row" style={{width: '-webkit-fill-available'}}>
                <span className="col-12 col-sm-5 col-xl-8">{title}</span>
                <span className="col-12 col-sm-2 col-xl-1">${price.toFixed(2)}</span>
                <span className="col-12 col-sm-2 col-xl-1">
                    <FaRegSquareMinus role="button" onClick={() => changeQuantity(id, quantity - 1)}/>
                    <span className="mx-1" style={{}}>{quantity}</span>
                    <FaRegSquarePlus role="button" onClick={() => changeQuantity(id, quantity + 1)}/>
                </span>
                <span className="col-12 col-sm-2 col-xl-1">${(price * quantity.toString()).toFixed(2)}</span>
                <span className="col-12 col-sm-1 col-xl-1"><MdDelete role="button" onClick={() => removeFromCart(id)}/></span>
            </div>
        </li>
    );
}

export default CartItem;