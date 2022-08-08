import {getDataFromApi} from "../../helpers/api";
import {useEffect, useState} from "react";

function Products(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getDataFromApi('v1/products')
          .then(data => setProducts(data))
    },[])

    return (
        <div>
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
    );
}

export default Products;