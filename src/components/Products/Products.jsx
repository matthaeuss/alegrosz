import {useEffect, useState} from "react";

import {Link} from "react-router-dom";

import {getDataFromApi} from "../../helpers/api";
import {MEDIA_PATH} from "../../constants";

import "./Products.scss";

function Products(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getDataFromApi('v1/products')
          .then(data => setProducts(data))
    },[])

    return (
        <section className="products">
            {products.map(({id, images, name, description, price, currency}) => (
                <div key={id} className="products__card card">
                    <div className="card__mask">
                        <img src={`${MEDIA_PATH}/${images[0]}`} alt={name} className="card__image"/>
                    </div>
                    <div className="card__box">
                        <h2 className="card__hdl">{name}</h2>
                        <p className="card__text">{description}</p>
                        <div className="card__footer">
                            <span className="card__price">{price} {currency}</span>
                            <Link to={`products/${id}`} className="card__link">Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Products;