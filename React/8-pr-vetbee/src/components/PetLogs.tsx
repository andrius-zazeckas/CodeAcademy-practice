import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddLogButton } from "./AddLogButton";
import { AddPrescriptionButton } from "./AddPrescriptionButton";
import { LogsFilter } from "./LogsFilter";
import { ButtonContainer } from "./styles/ButtonContainer";
import { FilterContainer } from "./styles/FilterContainer";
import { PetContainer } from "./styles/PetContainer";
import { PetsContainer } from "./styles/PetsContainer";
import { SecondaryHeader } from "./styles/SecondaryHeader";

export const PetLogs = ({ filterLogs }: any) => {
  const [logs, setLogs] = useState<any[]>([]);
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [isLogs, setIsLogs] = useState(true);
  const [isPrescriptions, setIsPrescriptions] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const params = useParams();

  const getPetLogs = () => {
    axios
      .get(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${params.id}`)
      .then((res) => {
        if (res.data.length !== 0) {
          return setLogs(res.data);
        }

        return setIsLogs(false);
      })
      .catch((error) => console.error(error));
  };

  const getPetPrescriptions = () => {
    axios
      .get(
        `https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions/${params.id}`
      )
      .then((res) => {
        if (res.data.length !== 0) {
          return setPrescriptions(res.data);
        }

        return setIsPrescriptions(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPetLogs();
    getPetPrescriptions();
  }, []);

  return (
    <>
      {!isLogs && !isPrescriptions ? (
        <h1>NO LOGS!</h1>
      ) : (
        <div>
          <SecondaryHeader>
            <h1>{logs[0]?.name}: Health records</h1>
            <ButtonContainer>
              <AddPrescriptionButton params={params} />
              <AddLogButton params={params} />
            </ButtonContainer>
          </SecondaryHeader>

          <LogsFilter
            isLogs={isLogs}
            isPrescriptions={isPrescriptions}
            logs={logs}
            prescriptions={prescriptions}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          {isActive ? (
            <PetsContainer>
              {logs.map((log: any, i: number) => (
                <PetContainer key={i}>
                  <p>{log.status}</p>
                  <p>{log.description}</p>
                  <p>{new Date(log.dob).toISOString().split("T")[0]}</p>
                </PetContainer>
              ))}
            </PetsContainer>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};
