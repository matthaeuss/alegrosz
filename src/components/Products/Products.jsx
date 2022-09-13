import { useContext, useEffect, useReducer, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { handleDataFromAPI } from "../../helpers/api";
import { MEDIA_PATH } from "../../constants";

import "./Products.scss";
import Search from "../Search/Search";
import Loader from "../Loader/Loader";
import ProductFilters from "../ProductFilters/ProductFilters";
import AuthContext from "../../Context/AuthProvider";

const initialState = {
  category: undefined,
  price: undefined,
  subcategory: undefined,
  search: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "category":
      return { ...state, category: action.payload };
    case "price":
      return { ...state, price: action.payload };
    case "subcategory":
      return { ...state, subcategory: action.payload };
    default:
      return state;
  }
}

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, dispatch] = useReducer(reducer, initialState);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!Object.keys(auth).length) {
      navigate("/login", { replace: false, state: { from: location } });
    } else {
      handleDataFromAPI({
        endpoint: "v1/products",
        credentials: auth.accessToken,
      })
        .then((response) => setProducts(response))
        .catch(() => navigate("/unauthorized"));
      //axios private
    }
  }, [search, auth]);

  function searchFilter(item) {
    if (search === "") return true;
    return item.name.toLowerCase().includes(search.toLowerCase());
  }

  return (
    <>
      <Search
        setSearch={setSearch}
        search={search}
        products={products}
        searchFilter={searchFilter}
      />
      <section>
        {!products.length ? (
          <Loader fullScreen={true} />
        ) : (
          <section className="wrapper">
            <ProductFilters dispatch={dispatch} />
            <main className="products" data-cy="all_products">
              {products
                .filter((product) => {
                  return (
                    !filters.category || product.category === filters.category
                  );
                })
                .filter(searchFilter)
                .map(({ id, images, name, description, price, currency }) => (
                  // TODO CREATE A NEW COMPONENT
                  <div
                    data-cy="product"
                    key={id}
                    className="products__card card"
                  >
                    <div className="card__mask" data-cy="products-card-image">
                      <img
                        src={`${MEDIA_PATH}/${images[0]}`}
                        alt={name}
                        className="card__image"
                      />
                    </div>
                    <div className="card__box">
                      <h2 className="card__hdl">{name}</h2>
                      <p className="card__text">{description}</p>
                      <div className="card__footer">
                        <span className="card__price">
                          {currency}
                          {price}
                        </span>
                        <Link
                          data-cy="detailsLink"
                          to={`/products/${id}`}
                          className="card__link"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </main>
          </section>
        )}
      </section>
    </>
  );
}

export default Products;
