import axios from "axios";
import { useEffect, useState } from "react";

export type TMed = {
  id: number;
  name: string | null;
  description: string | null;
};

export const useGetMeds = () => {
  const [meds, setMeds] = useState<TMed[]>([]);
  const [uniqueMeds, setUniqueMeds] = useState<TMed[]>([]);

  const getMeds = () => {
    axios
      // .get<TMed[]>(`https://glittery-dull-snickerdoodle.glitch.me/v1/meds?limit=250`)
      .get(`https://glittery-dull-snickerdoodle.glitch.me/v1/meds?limit=250`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          // setMeds(res.data.filter((med) => med.name));
          setMeds(res.data.filter((med: TMed) => med.name));
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (meds.length) {
      const tempUniqueMeds: TMed[] = [];

      meds.forEach((med) => {
        const hasMedication = tempUniqueMeds.some((medToCompare) => {
          if (
            med.name?.toLocaleLowerCase() ===
            medToCompare.name?.toLocaleLowerCase()
          ) {
            return true;
          }
        });

        if (!hasMedication) {
          tempUniqueMeds.push(med);
        }
      });

      setUniqueMeds(tempUniqueMeds);
    }
  }, [meds]);

  useEffect(() => {
    getMeds();
  }, []);

  return { meds, uniqueMeds };
};
