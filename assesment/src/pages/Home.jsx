import { React, useEffect, useState } from 'react';

import Header from '../components/header/Header';
import ProductCard from '../components/productcard/ProductCard';
import { getAllProduct } from '../service/product';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllProduct();
      setProducts(response);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        {(isLoading) && (<span className="preloader" />)}
        {products.map((product) => (<ProductCard data={product} />))}
      </main>
    </>
  );
}
