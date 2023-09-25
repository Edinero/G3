import { createContext, useState } from "react";
import { getUser } from "../api/ApiUser";
// nota
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const userStorage = JSON.parse(localStorage.getItem("user.movie")) || {};
  const [user, setUser] = useState(userStorage);

  const login = async (ClientEmail, ClientPassword) => {
    console.log("Credenciales ingresadas:", ClientEmail, ClientPassword);
    const dataUser = await getUser();
    console.log("Usuarios del API:", dataUser);

    const authUser = dataUser.find((user) => {
      return (
        user.ClientEmail === ClientEmail &&
        user.ClientPassword === ClientPassword
      );
    });

    console.log("Usuario autenticado:", authUser);

    if (authUser !== undefined) {
      storeUserInLocalStorage(authUser);
      setUser(authUser);
      return true;
    }
    return false;
  };

  const updateUserAuth = (userupdated) => {
    setUser(userupdated);
    storeUserInLocalStorage(userupdated);
  };
  function storeUserInLocalStorage(user) {
    localStorage.setItem("user.movie", JSON.stringify(user));
  }
  const logout = () => {
    localStorage.removeItem("user.movie");
    localStorage.removeItem("cartItems");
    setUser({});
    window.location.href = "/";
  };
  const isAuth = () => {
    return user.ClientEmail  ? true : false;
  };
  return (
    <AuthContext.Provider
      value={{ user, updateUserAuth, login, logout, isAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
