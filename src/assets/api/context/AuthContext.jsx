import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, verifyToken, logoutRequest } from "../auth";
import { set } from "zod";
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deberia tener un AuthProvider como padre");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAutehnticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const inicioDeSession = async (values) => {
    try {
      const response = await loginRequest(values);
      console.log(response);
      console.log("Logeo Exitoso");
      setIsAuthenticated(true);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      const errorsToSet = Array.isArray(error.response.data)
        ? error.response.data
        : [error.response.data.message];
      setError(errorsToSet);
    }
  };

  useEffect(() => {

    async function loginCheck() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
        return;
      }

      try {
        const response = await verifyToken(cookies.token);
        setUser(response.data);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
      }
      setLoading(false);
    }
    
    loginCheck();

  }, []);

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{
        inicioDeSession,
        user,
        isAutehnticated,
        loading,
        error,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
