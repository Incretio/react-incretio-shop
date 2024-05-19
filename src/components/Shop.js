import React, {useState, useEffect} from "react";
import Items from "../Items";
import {SHOP_API_URL} from "../config"
import Preloader from "./Preloader";
import CartIcon from "./CartIcon";
import Cart from "./Cart";

function Shop() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([]); // [{item: {}, quantity: 0},]
    const [isCartShow, setCartShow] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(SHOP_API_URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setItems(data ?? []);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, [])

    const addToCart = (item) => {
        const itemFromCart = order.find(it => it.item.id === item.id);
        const quantity = itemFromCart ? itemFromCart.quantity + 1 : 1;
        setOrder(order.filter(it => it.item.id !== item.id).concat({item, quantity}));
    }

    const getCardQuantity = () => {
        return order
            .map(it => it.quantity)
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }

    const handleCartShow = () => {
        setCartShow(!isCartShow);
    }

    const removeFromCart = (itemId) => {
        setOrder(order.filter(it => it.item.id !== itemId));
    }

    return (
        <div className="container content">
            <CartIcon quantity={getCardQuantity()} handleCartShow={handleCartShow}/>
            {loading ?
                <Preloader/>
                :
                <Items items={items}  addToCart={addToCart}/>
            }
            {isCartShow && <Cart order={order} removeFromCart={removeFromCart}/>}
        </div>
    );
}

export default Shop;