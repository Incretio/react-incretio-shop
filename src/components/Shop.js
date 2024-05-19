import React, {useState, useEffect} from "react";
import Items from "../Items";
import {SHOP_API_URL} from "../config"
import Preloader from "./Preloader";
import Cart from "./Cart";

function Shop() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([]); // [{item: {}, quantity: 0},]

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

    return (
        <div className="container content">
            <Cart quantity={getCardQuantity()}/>
            {loading ?
                <Preloader/>
                :
                <Items items={items}  addToCart={addToCart}/>
            }
        </div>
    );
}

export default Shop;