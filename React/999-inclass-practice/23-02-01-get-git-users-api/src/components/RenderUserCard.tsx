import { useState } from "react";

export const RenderUserCard = ({ user }: any) => {
  const [isIdVisible, setIsIdVisible] = useState(false);
  const [isUserCardVisible, setIsUserCardVisible] = useState(true);

  const visibilityHandler = () => {
    if (isUserCardVisible) {
      setIsIdVisible(true);
      return setIsUserCardVisible(false);
    }
    setIsIdVisible(false);
    setIsUserCardVisible(true);
  };

  return (
    <>
      <div className="user-container" onClick={visibilityHandler}>
        {isUserCardVisible && (
          <div>
            <h3>{user.login}</h3>
            <p>
              Visit users github by clicking <a href={user.url}>Here</a>
            </p>
            <p>User type: {user.type}</p>
          </div>
        )}
        {isIdVisible && <h3>{user.id}</h3>}
      </div>
    </>
  );
};
