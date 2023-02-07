import axios from "axios";
import { useEffect, useState } from "react";
import { PetList } from "./components/PetList";

export const Home = () => {
  const [data, setData] = useState<any[]>([]);

  const fetchData = () => {
    axios
      .get("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <PetList data={data} />;
};
