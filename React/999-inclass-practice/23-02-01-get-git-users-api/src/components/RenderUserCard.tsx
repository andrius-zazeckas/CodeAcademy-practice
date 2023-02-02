import { useState } from "react";

export const RenderUserCard = ({ user }: any) => {
  const [isIdVisible, setIsIdVisible] = useState(false);

  const visibilityHandler = () => {
    setIsIdVisible((prevIsIdVisible) => !prevIsIdVisible);

    // if (!isIdVisible) {
    //   return setIsIdVisible(true);
    // }
    // setIsIdVisible(false);
  };

  return (
    <>
      <div className="user-container" onClick={visibilityHandler}>
        {isIdVisible ? (
          <h3>{user.id}</h3>
        ) : (
          <div>
            <h3>{user.login}</h3>
            <p>
              Visit users github by clicking <a href={user.url}>Here</a>
            </p>
            <p>User type: {user.type}</p>
          </div>
        )}
      </div>
    </>
  );
};
