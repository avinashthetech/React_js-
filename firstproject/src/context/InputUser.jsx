import React, { useContext, useEffect, useState } from "react";
import { GlobalData2 } from "./Profile";

export const InputUser = () => {
  let [dbData, setDbData] = useState(null);

  let users = useContext(GlobalData2);
  console.log(users);

  useEffect(() => {
    setDbData(users);
  }, [users]);

  return (
    <div>
      <h1>This is User</h1>
      {dbData ? (
        <ol>
          {dbData.map((user, index,) => (
            <li key={index}>{user.name}</li>
          ))}
        </ol>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};
