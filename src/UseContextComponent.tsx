import Usercontext, { UserState } from "./store";
import { useContext, useState } from "react";

//

function ConsumerComponent() {
  const user = useContext<UserState>(Usercontext);
  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
      <div>age: {user.age}</div>
    </div>
  );
}

function UserContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: "Zach",
    last: "Przybilski",
    age: 30,
  });

  return (
    <Usercontext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          setUser({
            first: "Lauren",
            last: "McGrody",
            age: 25,
          })
        }
      >
        Change Context
      </button>
    </Usercontext.Provider>
  );
}

export default UserContextComponent;
