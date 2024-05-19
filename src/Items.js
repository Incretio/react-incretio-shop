import Item from "./components/Item";

function Items({items, addToCart}) {
    return (
        <div className="items">
            {items.map((item) => (
                <Item key={item.id} {...item} addToCart={addToCart}/>
            ))}
        </div>
    );
}

export default Items;