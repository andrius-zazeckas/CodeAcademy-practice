import axios from "axios";
import { useEffect, useState } from "react";
import { Search } from "./Filter";

export const Products = ({
  products,
  isLoading,
  fetchProducts,
  setProducts,
  filtered,
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
    // const filteredLC = filtered.map(({ title }: any) =>
    //   title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    // );
    // console.log(filteredLC);

    const results = filtered.filter((res: any) =>
      res.title
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          filterTitle
            .toLocaleLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        )
    );
    setProducts(results);
    // if (filterTitle) {
    // setProducts((prevProducts: any) =>
    //   prevProducts.filter((prevProduct: any) =>
    //     prevProduct.title
    //       .toLocaleLowerCase()
    //       .includes(filterTitle.toLocaleLowerCase())
    //   )
    // );
    // } else {
    //   fetchProducts();
    // }
  }, [filterTitle, filtered, setProducts]);

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
