import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Add = () => {
  const [newOrder, setNewOrder] = useState({
    people: null,
    price: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewOrder({
      ...newOrder,
      [prop]: event.target.value,
    });
  };

  const handleOrderSubmit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();

    axios
      .post("https://believed-shore-vanadium.glitch.me/", {
        people: newOrder.people,
        price: newOrder.price,
      })
      .then((res) => {
        alert(`${res.data.msg}`);
        navigate(-1);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <form onSubmit={handleOrderSubmit}>
        <div className="card">
          <input
            value={newOrder.people ?? ""}
            onChange={(event) => handleInputChange(event, "people")}
            placeholder="People"
            type="number"
          />

          <input
            value={newOrder.price ?? ""}
            onChange={(event) => handleInputChange(event, "price")}
            placeholder="Price"
            type="number"
          />
          <Button />
        </div>
      </form>
    </div>
  );
};
