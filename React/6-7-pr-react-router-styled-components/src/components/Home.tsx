import axios from "axios";
import { useEffect, useState } from "react";
import { Add } from "./Add";
import { Table } from "./Table";

export const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    axios
      .get("https://believed-shore-vanadium.glitch.me/")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  <Add />;

  return (
    <>
      {isLoading ? <p>Loading</p> : <Table data={data} fetchData={fetchData} />}
    </>
  );
};
