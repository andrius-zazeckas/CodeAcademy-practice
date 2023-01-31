import axios from "axios";
import { useEffect, useState } from "react";

export const Products = ({
  products,
  isLoading,
  fetchProducts,
  setProducts,
}: any) => {
  const [filterTitle, setFilterTitle] = useState("");

  const removeProduct = (id: number) => {
    axios
      .delete(`https://golden-whispering-show.glitch.me/${id}`)
      .then(() => fetchProducts())
      .catch((error) => console.error(error));

    // const newProducts = products.filter((product: any) => product.id !== id);
    // setProducts(newProducts);
  };

  useEffect(() => {
    if (filterTitle) {
      const filteredProducts = products.filter((product: any) =>
        product.title
          .toLocaleLowerCase()
          .includes(filterTitle.toLocaleLowerCase())
      );

      setProducts(filteredProducts);
    }
  }, [filterTitle, setProducts]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="container">
          {products &&
            products.map((product: any, i: number) => (
              <div key={`${product.id} - ${i}`} className="product-container">
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <h2>{product.price}</h2>
                <button
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      )}
      <label htmlFor="filter-title">Produkto paieska</label>
      <input
        onChange={(event) => setFilterTitle(event.target.value)}
        value={filterTitle}
        name="filter-title"
      />
    </>
  );
};
