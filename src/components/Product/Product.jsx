import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { MEDIA_PATH } from "../../constants";
import "./Product.scss";
import { getAllProductData } from "../../helpers/api";
import Loader from "../Loader/Loader";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getAllProductData(id).then((data) => setProduct(data));
  }, []);

  return (
    <>
      {Object.keys(product).length !== 0 ? (
        <>
          <div className="product">
            <main className="container">
              <section className="slider">
                <div className="slider__slides">
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
                <div>
                  <h2>{product.name}</h2>
                  <p>Opis: {product.description}</p>
                  <p>Kategoria: {product.category}</p>
                  <p>Podkategoria: {product.subcategory}</p>
                  <p>Na stanie: {product.stock}</p>
                  <div className="card__footer">
                    <span className="card__price">
                      {product.price} {product.currency}
                    </span>
                  </div>
                </div>
              </section>
              <section className="container container--opinion">
                <h3 className="opinion__hdl">Zobacz opinie: </h3>
                {product.opinions &&
                  product.opinions.map(({ id, stars, content, author }) => (
                    <div key={id} className="opinion">
                      <h3 className="opinion__author">{`${author}:`}</h3>
                      <p className="opinion__content">{`"${content}"`}</p>
                    </div>
                  ))}
                <button className="opinion_btn">Add opinion</button>
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
