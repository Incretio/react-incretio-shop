import React, {useEffect, useState} from "react";
import Items from "../Items";
import {SHOP_API_URL} from "../config"
import Preloader from "./Preloader";
import CartIcon from "./CartIcon";
import Cart from "./Cart";
import Toast from "./Toast";

function Shop() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([]); // [{item: {}, quantity: 0},]
    const [isCartShow, setCartShow] = useState(false);
    const [lastAddedItemDate, setLastAddedItemDate] = useState(null);
    const [lastAddedItem, setLastAddedItem] = useState('');

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
        if (itemFromCart) {
            changeQuantity(itemFromCart.item.id, itemFromCart.quantity + 1);
        } else {
            setOrder(order.concat({item, quantity: 1}));
        }
        setLastAddedItem(item.title);
        setLastAddedItemDate(new Date());
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

    const changeQuantity = (itemId, quantity) => {
        quantity = Math.min(quantity, 9)
        quantity = Math.max(quantity, 1)
        setOrder(order.map(it => it.item.id === itemId ? {item: it.item, quantity} : it));
    }

    const payCart = () => {
        alert("Payed. Thank you!");
        setOrder([]);
        setCartShow(false);
    }

    const clearLastAddedItem = () => {
        setLastAddedItem('');
        setLastAddedItemDate(null);
    }

    return (
        <div className="container content">
            <CartIcon quantity={getCardQuantity()} handleCartShow={handleCartShow}/>
            {loading ?
                <Preloader/>
                :
                <Items items={items} addToCart={addToCart}/>
            }
            {isCartShow && <Cart order={order}
                                 removeFromCart={removeFromCart}
                                 handleCartShow={handleCartShow}
                                 changeQuantity={changeQuantity}
                                 payCart={payCart}/>}
            {lastAddedItem && <Toast name={lastAddedItem} createdDate={lastAddedItemDate} closeToast={clearLastAddedItem}/>}
        </div>
    );
}

export default Shop;