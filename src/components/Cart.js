import CartItem from "./CartItem";

function Cart({order = [], removeFromCart}) {

    const totalSum = order.map(it => it.item.price * it.quantity).reduce((prevValue, currentValue) => prevValue + currentValue, 0);

    return (
        <div className="cart">
            <ul className="list-group">
                <li className="list-group-item list-group-item-secondary fw-bold">Cart</li>
                {order.length ?
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="row" style={{width: '100%'}}>
                            <span className="col-sm-6 col-xl-8 fw-bold">Title</span>
                            <span className="col-sm-2 col-xl-1 fw-bold">Price</span>
                            <span className="col-sm-1 col-xl-1 fw-bold">Quantity</span>
                            <span className="col-sm-2 col-xl-1 fw-bold">Sum</span>
                            <span className="col-sm-1 col-xl-1"></span>
                        </div>
                    </li>
                    :
                    <li className="list-group-item">Cart is empty</li>
                }
                {order.map((it) => (
                    <CartItem key={it.item.id} {...it.item} quantity={it.quantity} removeFromCart={removeFromCart}/>
                ))}
                <li className="list-group-item list-group-item-secondary">
                    <span className="fw-bold">Total:</span> ${totalSum.toFixed(2)}
                </li>
            </ul>
        </div>
    );
}

export default Cart;