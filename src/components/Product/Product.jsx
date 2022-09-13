import { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { MEDIA_PATH } from "../../constants";
import { getAllProductData } from "../../helpers/api";
import "./Product.scss";

import Loader from "../Loader/Loader";
import ProgressBar from "../ProgressBar/ProgressBar";
import AuthContext from "../../Context/AuthProvider";

function Product() {
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getAllProductData(id, auth.accessToken)
      .then((data) => {
        setProduct(data);
      })
      .catch(() => navigate("/unauthorized"));
  }, []);

  return (
    <>
      {Object.keys(product).length !== 0 ? (
        <>
          <ProgressBar weight={500} />
          <div className="product">
            <main className="container">
              <section className="slider" data-cy="product-details-slider">
                <div className="slider__slides" data-cy="product-details-image">
                  {product.images &&
                    product.images.map((img, idx) => (
                      <input
                        type="radio"
                        name="r"
                        id={`r${idx + 1}`}
                        key={idx}
                        className="slider__input"
                      />
                    ))}
                  {product.images &&
                    product.images.map((img, idx) => (
                      <div className={`slider__images s${idx}`} key={idx}>
                        <img
                          src={`${MEDIA_PATH}/${img}`}
                          alt={img}
                          key={idx}
                          className="slider__img"
                        />
                      </div>
                    ))}
                  <div className="slider__navigation">
                    {product.images &&
                      product.images.map((img, idx) => (
                        <label
                          htmlFor={`r${idx + 1}`}
                          className="slider__bar"
                          key={idx}
                        ></label>
                      ))}
                  </div>
                </div>
              </section>

              <section>
                <div
                  className="product__details"
                  data-cy="product-details-description"
                >
                  <h1>{product.name}</h1>
                  <li>Description: {product.description}</li>
                  <li data-cy="productCategory">
                    Category: {product.category}
                  </li>
                  <li>Sub-Category: {product.subcategory}</li>
                  <li>Available: {product.stock}</li>
                  <div className="card__footer" data-cy="product-details-price">
                    <p>
                      <span className="card__price">
                        {product.price} {product.currency}
                      </span>
                    </p>
                  </div>
                </div>
              </section>
              <section
                className="container container--opinion"
                data-cy="product-details-opinion"
              >
                <h3 className="opinion__hdl">Opinions: </h3>
                {product.opinions &&
                  product.opinions.map(({ id, stars, content, author }) => (
                    <div
                      key={id}
                      className="opinion"
                      data-cy="product-details-opinions"
                    >
                      <h3 className="opinion__author">{`${author}:`}</h3>
                      <p className="opinion__content">{`"${content}"`}</p>
                      {/*<p className="opinion__content">{`"${stars}"`}</p>*/}
                    </div>
                  ))}
                <button
                  className="opinion__btn"
                  data-cy="product-details-button"
                >
                  Add opinion
                </button>
              </section>
            </main>
          </div>
        </>
      ) : (
        <Loader fullScreen={true} />
      )}
    </>
  );
}

export default Product;
