import axios from "axios";
import { useState } from "react";

export const PostProductAxios = () => {
  const [newProduct, setNewProduct] = useState({
    image: null,
    title: null,
    price: null,
  });

  const handleInputChange = (event: any, prop: any) => {
    setNewProduct({
      ...newProduct,
      [prop]: event.target.value,
    });
  };

  const handleProductSubmit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();

    axios
      .post("https://golden-whispering-show.glitch.me", {
        title: newProduct.title,
        image: newProduct.image,
        price: newProduct.price,
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleProductSubmit}>
      <div className="card">
        <input
          value={newProduct.title ?? ""}
          onChange={(event) => handleInputChange(event, "title")}
          placeholder="Title"
        />

        <input
          value={newProduct.image ?? ""}
          onChange={(event) => handleInputChange(event, "image")}
          placeholder="Image"
        />

        <input
          value={newProduct.price ?? ""}
          onChange={(event) => handleInputChange(event, "price")}
          placeholder="Price"
          type="number"
        />

        <button>Add product</button>
      </div>
    </form>
  );
};
