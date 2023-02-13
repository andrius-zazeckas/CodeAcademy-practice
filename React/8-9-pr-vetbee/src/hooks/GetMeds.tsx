import axios from "axios";
import { useEffect, useState } from "react";

export const GetMeds = () => {
  const [meds, setMeds] = useState([]);
  const [isMeds, setIsMeds] = useState(true);

  const getMeds = () => {
    axios
      .get(`https://glittery-dull-snickerdoodle.glitch.me/v1/meds?limit=250`)
      .then((res) => {
        if (res.data.length !== 0) {
          return setMeds(res.data);
        }

        return setIsMeds(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getMeds();
  }, []);

  return { meds, isMeds };
};
