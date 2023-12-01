import { React, createContext, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [inf, setInf] = useState();

  return (
    <AuthContext.Provider value={{ auth, setAuth ,inf , setInf }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext
