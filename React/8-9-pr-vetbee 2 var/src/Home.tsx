import axios from "axios";
import { useEffect, useState } from "react";
import { AddPetButton } from "./components/AddPetButton";
import { PetsList } from "./components/PetsList";
import { PetsContainer } from "./components/styles/PetsContainer";
import { SecondaryHeader } from "./components/styles/SecondaryHeader";

export const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    axios
      .get("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <SecondaryHeader>
            <h1>Pet List</h1>
            <AddPetButton />
          </SecondaryHeader>
          <PetsContainer>
            <PetsList data={data} fetchData={fetchData} />
          </PetsContainer>
        </div>
      )}
    </>
  );
};
