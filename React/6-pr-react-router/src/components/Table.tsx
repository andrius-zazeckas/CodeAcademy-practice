import axios from "axios";

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
    <>
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
              <tr
                key={order.id}
                className="order-container"
                onClick={() => handleClick(order.id)}
              >
                <td>{order.id}</td>
                <td>{order.people}</td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
