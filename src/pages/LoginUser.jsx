// import React from 'react'
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRef } from "react";
import { Link, Navigate } from "react-router-dom";

const LoginUser = () => {
  const { login, isAuth } = useContext(AuthContext);
  const [showMessage, setShowMessage] = useState(false);
  const form = useRef();

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await login(data.get("ClientEmail"), data.get("ClientPassword"));
    console.log("handleSubmitLogin ejecutado correctamente");
    if (!isAuth()) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  };
  if (isAuth()) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-50">
      <div className="w-50 max-w-md">
        <h2 className="text-2xl font-weight-bold mb-4 text-light">
          Iniciar sesión
        </h2>
        <form
          ref={form}
          onSubmit={handleSubmitLogin}
          className="bg-white shadow rounded px-4 py-4 mb-4"
        >
          <div className="mb-4">
            <label className="form-label">Correo electrónico</label>
            <input
              className="form-control"
              type="email"
              placeholder="correo@example.com"
              name="ClientEmail"
            />
            {showMessage && (
              <div className="text-danger">
                Usuario no existe. Ingrese un usuario válido.
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input
              className="form-control"
              type="password"
              placeholder="********"
              name="ClientPassword"
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-dark btn-orange">
              Ingresar
            </button>
            <br />
            
          </div>
          <div className="text-center my-2">
              <p>
                No tengo cuenta{" "}
                <Link to="/registrar">
                  <span className="registrarse">Registrarse</span>
                </Link>
              </p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
