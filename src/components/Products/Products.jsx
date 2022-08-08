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
        <section>
            {products.map(({id, images, name, description}) => (
                <div key={id}>
                    <img src={`${MEDIA_PATH}/${images[0]}`} alt={name}/>
                    <div>
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <Link to={`products/${id}`}>Details</Link>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Products;