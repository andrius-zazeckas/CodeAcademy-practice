import axios from "axios";
import { Hover } from "./styling/HoverStyle";

export const Table = ({ data, fetchData }: any) => {
  const handleClick = (id: number) => {
    if (window.confirm("Delete order?")) {
      axios
        .delete(`https://believed-shore-vanadium.glitch.me/${id}`)
        .then((res) => {
          alert(`${res.data.msg}`);
          fetchData();
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Number of People</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order: any) => (
            <Hover
              key={order.id}
              onClick={() => handleClick(order.id)}
              color="blue"
            >
              <td>{order.id}</td>
              <td>{order.people}</td>
              <td>{order.price}</td>
            </Hover>
          ))}
        </tbody>
      </table>
    </div>
  );
};
