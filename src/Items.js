import {useContext} from "react";
import Item from "./components/Item";
import {ShopContext} from "./context";

function Items() {

    const {items} = useContext(ShopContext);

    return (
        <div className="items">
            {items.map((item) => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    );
}

export default Items;