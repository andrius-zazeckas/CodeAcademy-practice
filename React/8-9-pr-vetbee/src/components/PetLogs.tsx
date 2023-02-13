import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddLogButton } from "./AddLogButton";
import { ButtonLink } from "./ButtonLink";
import { LogsFilter } from "./LogsFilter";
import { ButtonContainer } from "./styles/ButtonContainer";
import { PetContainer } from "./styles/PetContainer";
import { PetsContainer } from "./styles/PetsContainer";
import { SecondaryHeader } from "./styles/SecondaryHeader";

export const PetLogs = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [isLogs, setIsLogs] = useState(true);
  const [isPrescriptions, setIsPrescriptions] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const params = useParams();

  useEffect(() => {
    const getPetLogs = () => {
      axios
        .get(
          `https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${params.id}`
        )
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

    getPetLogs();
    getPetPrescriptions();
  }, [params.id]);

  return (
    <>
      <SecondaryHeader>
        {!isLogs && !isPrescriptions ? (
          <h1>NO LOGS!</h1>
        ) : (
          <h1>{logs[0]?.name}: Health records</h1>
        )}
        <ButtonContainer>
          <ButtonLink
            message="ADD PRESCRIPTIONS"
            link={`/add-prescription/${params.id}`}
          />
          <AddLogButton params={params} />
        </ButtonContainer>
      </SecondaryHeader>

      <LogsFilter
        isLogs={isLogs}
        isPrescriptions={isPrescriptions}
        isActive={isActive}
        setIsActive={setIsActive}
      />

      {isActive ? (
        <PetsContainer>
          {logs.map((log: any, i: any) => (
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

      {isActive ? (
        <PetsContainer>
          {prescriptions.map((prescription: any, i: any) => (
            <PetContainer key={i}>
              <p>{prescription.status}</p>
              <p>{prescription.description}</p>
              <p>{new Date(prescription.dob).toISOString().split("T")[0]}</p>
            </PetContainer>
          ))}
        </PetsContainer>
      ) : (
        <></>
      )}
    </>
  );
};
