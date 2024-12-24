import React, { createContext, useState } from "react";
export const UserDataContext = createContext();
const UserContext = ({ children }) => {
  const [user, setuser] = useState({
    fullname: {
      firstName: "",
      lastName: " ",
    },
    email: "",
    password: "",
  });
  return (
    <div>
      <UserDataContext.Provider value={[user, setuser]}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
