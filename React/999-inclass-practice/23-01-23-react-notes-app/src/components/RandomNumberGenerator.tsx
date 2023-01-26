import { useEffect, useState } from "react";

export const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true); // naudoti false jei neautorizuotas vartotojas, tada useEffect setIsLoading(true)

  const isImportantValue = randomNumber > 50;

  useEffect(() => {
    // alert("Welcome");

    // setIsLoading(true);

    const products = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (res) => res
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []); // kai masyve keiciasi reiksmes, vykdyk kodo funkcijoje

  useEffect(() => {
    // alert(randomNumber);
  }, [randomNumber, description]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <p className={isImportantValue ? "important-value" : "bold-value"}>
            {randomNumber.toFixed()}
          </p>

          {/* // Conditional rendering */}

          {isImportantValue && <p>Important Client</p>}

          <button
            onClick={() => {
              const magicNumebr = Math.random() * 100;

              setRandomNumber(magicNumebr);
            }}
          >
            Generate random number
          </button>

          <input
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </>
      )}
    </>
  );
};
