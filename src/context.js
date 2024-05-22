import {createContext, useEffect, useReducer} from "react";
import reducer from "./reducer";
import {SHOP_API_URL} from "./config";

const ShopContext = createContext();

const initialState = {
    items: [],
    isLoading: false,
    order: [], // [{item: {}, quantity: 0},]
    isCartShow: false,
    lastAddedItemDate: null,
    lastAddedItem: ''
};

function ContextProvider(props) {

    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeToast = () => {
        dispatch({type: 'CLOSE_TOAST'});
    }

    value.removeFromCart = (itemId) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: {itemId}});
    }

    value.changeQuantity = (itemId, quantity) => {
        dispatch({type: 'CHANGE_QUANTITY', payload: {itemId, quantity}});
    }

    value.addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: {item}});
    }

    value.toggleCart = () => {
        dispatch({type: 'TOGGLE_CART'});
    }

    value.clearCart = () => {
        dispatch({type: 'CLEAR_CART'});
    }

    value.getCardQuantity = () => {
        return value.order
            .map(it => it.quantity)
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }

    value.setLoading = (isLoading) => {
        dispatch({type: 'SET_LOADING', payload: {isLoading}});
    }

    value.setItems = (items) => {
        dispatch({type: 'SET_ITEMS', payload: {items}});
    }

    useEffect(() => {
        value.setLoading(true);
        fetch(SHOP_API_URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                value.setItems(data ?? []);
                value.setLoading(false);
            })
            .catch(error => {
                console.log(error);
                value.setLoading(false);
            });
    }, [])

    useEffect(() => {
        const timerId = setTimeout(value.closeToast, 3000);
        return () => clearTimeout(timerId);
    }, [value.lastAddedItem, value.lastAddedItemDate]);

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export {
    ShopContext,
    ContextProvider
};