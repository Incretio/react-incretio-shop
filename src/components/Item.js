function Item({id, price, image, title, description, addToCart}) {
    return (
        <div className="card">
            <div className="item-image">
                <img src={image} alt={title}/>
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title text-truncate">{title}</h5>
                <p className="card-text item-description">{description}</p>
                <hr/>
                <div className="row">
                    <span className="col"/>
                    <button
                        className="btn btn-primary col align-self-center"
                        onClick={() => addToCart({id, price, title, description})}
                    >
                        Buy
                    </button>
                    <span className="col" style={{alignContent: 'center', fontSize: '1.3rem'}}>${price}</span>
                </div>
            </div>
        </div>
    );
}

export default Item;