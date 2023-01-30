import { useRef, useState } from "react";

export const PostProduct = () => {
  const post_image = useRef<HTMLInputElement>(null);
  const post_title = useRef<HTMLInputElement>(null);
  const post_price = useRef<HTMLInputElement>(null);

  const postData = () => {
    const postData = {
      image: post_image?.current?.value,
      title: post_title?.current?.value,
      price: post_price?.current?.value,
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const products = fetch("https://golden-whispering-show.glitch.me", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            ref={post_title}
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            ref={post_image}
            placeholder="Image"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            ref={post_price}
            placeholder="Price"
          />
        </div>
        <button className="btn btn-sm btn-primary" onClick={postData}>
          Post Data
        </button>
      </div>
    </div>
  );
};
