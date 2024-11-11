import { createContext, useContext } from "react";

const authContext = createContext({ user: null });

export const useAuthContext = () => {
  return useContext(authContext);
};

export default authContext.Provider;
