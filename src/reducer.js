function reducer(state, action) {

    const {type, payload} = action;

    switch (type) {
        case 'CLOSE_TOAST':
            return {
                ...state,
                lastAddedItem: '',
                lastAddedItemDate: null
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                order: state.order.filter(it => it.item.id !== payload.itemId)
            }
        case 'CHANGE_QUANTITY': {
            const quantity = Math.max(Math.min(payload.quantity, 9), 1);
            return {
                ...state,
                order: state.order.map(it => it.item.id === payload.itemId ? {item: it.item, quantity} : it)
            }
        }
        case 'ADD_TO_CART': {
            const itemFromCart = state.order.find(it => it.item.id === payload.item.id);
            if (itemFromCart) {
                itemFromCart.quantity += 1;
            } else {
                state.order = state.order.concat({item: payload.item, quantity: 1});
            }
            return {
                ...state,
                lastAddedItem: payload.item.title,
                lastAddedItemDate: new Date()
            }
        }
        case 'TOGGLE_CART': {
            return {
                ...state,
                isCartShow: !state.isCartShow
            }
        }
        case 'CLEAR_CART': {
            return {
                ...state,
                order: [],
                isCartShow: false
            }
        }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: payload.isLoading
            }
        case 'SET_ITEMS':
            return {
                ...state,
                items: payload.items
            }
        default:
            return this.state;
    }
}

export default reducer;