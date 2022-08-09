import {useEffect, useState} from "react";

import {useParams} from "react-router-dom";

import './Product.scss'
import {getAllProductData} from "../../helpers/api";

function Product() {

    const {id} = useParams();
    const[product, setProduct] = useState({});

    useEffect(() => {
        getAllProductData(id).then((data) => setProduct(data));
    },[]);


    return (
        <pre>{JSON.stringify(product, null, 2)}</pre>
    );
}

export default Product;