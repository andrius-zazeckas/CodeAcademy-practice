import axios from "axios";

export const Table = ({ data, fetchData }: any) => {
  const handleClick = (id: number) => {
    if (window.confirm("Delete order?")) {
      alert(`${id}`);
    }

    const deleteOrder = () => {
      axios
        .delete(`https://golden-whispering-show.glitch.me/${id}`)
        .then(() => fetchData())
        .catch((error) => console.error(error));
    };
  };

  return (
    <>
      <table className="container">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Number of People</th>
            <th>Price</th>
          </tr>
        </thead>
        {data.map((order: any) => (
          <tbody
            key={order.id}
            className="order-container"
            onClick={() => handleClick(order.id)}
          >
            <tr>
              <td>{order.id}</td>
              <td>{order.people}</td>
              <td>{order.price}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
