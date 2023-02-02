import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const VisitCount = () => {
  const [count, setCount] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/asda")) {
      return setCount((prevCount) => prevCount + 1);
    }
  }, [pathname]);

  return <p>Klaidingo puslapio visitu skaicius: {count}</p>;
};
