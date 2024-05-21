import CartItem from "./CartItem";
import {GrClose} from "react-icons/gr";

function Cart({order = [], removeFromCart, handleCartShow, changeQuantity, payCart}) {

    const totalSum = order.map(it => it.item.price * it.quantity).reduce((prevValue, currentValue) => prevValue + currentValue, 0);

    return (
        <div className="cart">
            <ul className="list-group">
                <li className="list-group-item list-group-item-secondary fw-bold">
                    Cart
                    <GrClose className="card-icon-close" role="button" onClick={handleCartShow}/>
                </li>
            </ul>
            <ul className="list-group overflow-auto" style={{maxHeight: '600px'}}>
                {order.length ?
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="row" style={{width: '-webkit-fill-available'}}>
                            <span className="col-12 col-sm-5 col-xl-8 fw-bold">Title</span>
                            <span className="col-12 col-sm-2 col-xl-1 fw-bold">Price</span>
                            <span className="col-12 col-sm-2 col-xl-1 fw-bold">Quantity</span>
                            <span className="col-12 col-sm-2 col-xl-1 fw-bold">Sum</span>
                            <span className="col-12 col-sm-1 col-xl-1"></span>
                        </div>
                    </li>
                    :
                    <li className="list-group-item">Cart is empty</li>
                }
                {order.map((it) => (
                    <CartItem key={it.item.id}
                              {...it.item}
                              quantity={it.quantity}
                              removeFromCart={removeFromCart}
                              changeQuantity={changeQuantity}
                    />
                ))}
            </ul>
            <ul className="list-group">
                <li className="list-group-item list-group-item-secondary">
                    <span className="fw-bold">Total:</span> ${totalSum.toFixed(2)}
                </li>
                <button type="button" className="btn btn-success" onClick={payCart}>Pay Cart</button>
            </ul>
        </div>
    );
}

export default Cart;