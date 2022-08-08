import {useEffect, useState} from "react";
import {getDataFromApi} from "../../helpers/api";
import {MEDIA_PATH} from "../../constants";
import {Link} from "react-router-dom";

function Products(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getDataFromApi('v1/products')
          .then(data => setProducts(data))
    },[])

    return (
        <section className="products">
            {products.map(({id, images, name, description}) => (
                <div key={id} className="products__card card">
                    <img src={`${MEDIA_PATH}/${images[0]}`} alt={name} className="card__image"/>
                    <div className="card__box">
                        <h2 className="card__hdl">{name}</h2>
                        <p className="card__text">{description}</p>
                        <Link to={`products/${id}`} className="card__link">Details</Link>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Products;