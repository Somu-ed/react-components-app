import "./styles.css";
import { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);

  async function fetchProducts(skip) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${skip}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);

        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts(count === 0 ? 0 : count * 20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisabledButton(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const handleReset = () => {
    setCount(0);
    setProducts([]);
  };

  if (loading) {
    return <div>Loading Data... Please wait!</div>;
  }

  return (
    <div className="load-more-container">
      <h1>Load More Data Component</h1>
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div className="product" key={item.id}>
                <img src={item.images[0]} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disabledButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>{disabledButton ? <p>No more products to display...</p> : null}</div>
    </div>
  );
}
