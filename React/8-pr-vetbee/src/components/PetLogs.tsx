import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddLogButton } from "./AddLogButton";
import { AddPrescriptionButton } from "./AddPrescriptionButton";
import { ButtonContainer } from "./styles/ButtonContainer";
import { PetContainer } from "./styles/PetContainer";
import { PetsContainer } from "./styles/PetsContainer";
import { SecondaryHeader } from "./styles/SecondaryHeader";

export const PetLogs = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [isData, setIsData] = useState(true);

  const params = useParams();

  const getPetLogs = () => {
    axios
      .get(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${params.id}`)
      .then((res) => {
        if (res.data.length !== 0) {
          return setLogs(res.data);
        }

        return setIsData(false);
      })
      .catch((error) => console.error(error));
  };

  console.log(logs);

  useEffect(() => {
    getPetLogs();
  }, []);

  return (
    <>
      {!isData ? (
        <h1>NO LOGS!</h1>
      ) : (
        <div>
          <SecondaryHeader>
            <h1>{logs[0]?.name} Health records</h1>
            <ButtonContainer>
              <AddPrescriptionButton />
              <AddLogButton />
            </ButtonContainer>
          </SecondaryHeader>
          <PetsContainer>
            {logs.map((log: any, i: number) => (
              <PetContainer key={i}>
                <p>{log.status}</p>
                <p>{log.description}</p>
                <p>{new Date(log.dob).toISOString().split("T")[0]}</p>
              </PetContainer>
            ))}
          </PetsContainer>
        </div>
      )}
    </>
  );
};
