import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeElement = (id: any) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  useEffect(() => {
    const products = fetch("https://golden-whispering-show.glitch.me")
      .then((response) => response.json())
      .then((data) => setProducts(data));

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="container">
          {products &&
            products.map((product) => (
              <div key={product.id} className="product-container">
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <h2>{product.price}</h2>
                <button
                  onClick={() => {
                    removeElement(product.id);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
