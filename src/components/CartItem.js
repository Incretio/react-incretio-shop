import { MdDelete } from "react-icons/md";

function CartItem({id, title, price, quantity, removeFromCart}) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="row" style={{width: '100%'}}>
                <span className="col-sm-6 col-xl-8">{title}</span>
                <span className="col-sm-2 col-xl-1">${price.toFixed(2)}</span>
                <span className="col-sm-1 col-xl-1">{quantity}</span>
                <span className="col-sm-2 col-xl-1">${(price * quantity.toString()).toFixed(2)}</span>
                <span className="col-sm-1 col-xl-1"><MdDelete role="button" onClick={() => removeFromCart(id)}/></span>
            </div>
        </li>
    );
}

export default CartItem;