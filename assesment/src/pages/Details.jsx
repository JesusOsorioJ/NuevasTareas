import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../components/header/Header';
import { getOneProduct } from '../service/product';

export default function Details() {
  const [products, setProducts] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await getOneProduct(id);
      setProducts(response);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="details">
        {(isLoading) && (<span className="preloader" />)}
        {(!isLoading) && (
        <>
          <img src={products.image} alt="imagen" />
          <div>
            <h2>{products.title}</h2>

            <h5 className="parrafo">{products.description}</h5>
            <div className="menudetails">
              <div>
                <h2>Categories</h2>
                <h3>{products.category}</h3>
              </div>
              <div>
                <h2>Price</h2>
                <h3>{`$ ${products.price}`}</h3>
              </div>
            </div>
            <Link className="buttonbig" to="/">Home</Link>
          </div>
        </>
        )}
      </div>

    </div>

  );
}
