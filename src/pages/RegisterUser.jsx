// import React from 'react'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState, useRef } from "react";
import { CreateUser, getUser } from "/src/api/ApiUser.jsx";
import { useNavigate, Navigate } from "react-router-dom";
import emailjs from "@emailjs/browser";




const RegisterUser = () => {
  const history = useNavigate();
  const { isAuth } = useContext(AuthContext);
  const [emailExists, setEmailExists] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [newUser, setNewUser] = useState({
    ClientName: "",
    ClientLastName: "",
    ClientEmail: "",
    ClientCelular: "",
    ClientDateBirthday: "",
    ClientGenero: "",
    ClientNumDni: "",
    ClientUserName: "",
    ClientPassword: "",
  });
  const form = useRef();
  const isPasswordValid = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-=]/.test(password);
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };
  const handleInputSign = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setNewUser({
      ...newUser,
      [name]: value,
    });
    if (name === "ClientPassword") {
      if (!isPasswordValid(value)) {
        setPasswordError(true); 
      } else {
        setPasswordError(false); 
    }
  }
  };
  const handleSubmitRegister = async (event) => {
    event.preventDefault();

    // Verificar si el correo ya existe
    const users = await getUser();
    const emailExists = users.some(
      (user) => user.ClientEmail === newUser.ClientEmail
    );

    if (emailExists) {
      setEmailExists(true);
    } else {
      const response = await CreateUser(newUser);
      if (response) {
        
        alert("Usuario creado correctamente");
        history("/login");

        const serviceId = "service_1o8e94m";
        const templateId = "template_mr4ujte";
        const apikey = "pe0Uovw1Rp7NDnQpi";

        emailjs.sendForm(serviceId, templateId, form.current, apikey).then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      }
    }
  };
  if (isAuth()) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-50">
      <div className="w-50 max-w-md">
        <h2 className="text-2xl font-weight-bold mb-4 text-light">Registro</h2>
        <form
          ref={form}
          onSubmit={handleSubmitRegister}
          className="bg-white shadow rounded px-4 py-4 mb-4"
        >
          <div className="mb-4">
            <label className="form-label">Correo electrónico</label>
            <input
              className="form-control"
              type="email"
              placeholder="correo@example.com"
              name="ClientEmail"
              value={newUser.ClientEmail}
              onChange={handleInputSign}
              required
            />
            {emailExists && (
              <div className="text-danger">
                Este correo ya está en uso. Utilice otro.
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
              value={newUser.ClientPassword}
              onChange={handleInputSign}
              required
            />
            {passwordError && (
              <div className="text-danger">
                La contraseña debe ser segura y cumplir con los requisitos.
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="form-label">Nombre</label>
            <input
              className="form-control"
              type="text"
              placeholder="Tu nombre"
              name="ClientName"
              value={newUser.ClientName}
              onChange={handleInputSign}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Apellido Paterno</label>
            <input
              className="form-control"
              type="text"
              placeholder="Tu apellido paterno"
              name="ClientLastName"
              value={newUser.ClientLastName}
              onChange={handleInputSign}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Tipo de Documento de Identidad</label>
            <select
              className="form-select"
              name="ClientTipoDni"
              value={newUser.ClientTipoDni}
              onChange={handleInputSign}
            >
              <option value="">Selecciona un tipo</option>
              <option value="Dni">DNI</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="form-label">
              Numero de documento de identidad
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Número de Doc."
              name="ClientNumDni"
              value={newUser.ClientNumDni}
              onChange={handleInputSign}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Número de Celular</label>
            <input
              className="form-control"
              type="tel"
              placeholder="Tu número de celular"
              name="ClientCelular"
              value={newUser.ClientCelular}
              onChange={handleInputSign}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Fecha de Nacimiento</label>
            <input
              className="form-control"
              type="date"
              name="ClientDateBirthday"
              value={newUser.ClientDateBirthday}
              onChange={handleInputSign}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Género</label>
            <select
              className="form-select"
              name="ClientGenero"
              value={newUser.ClientGenero}
              onChange={handleInputSign}
            >
              <option value="">Selecciona un género</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="mb-4 d-flex flex-column align-items-center justify-content-center ">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="acceptTerms"
                required
              />
              <label className="form-check-label" htmlFor="acceptTerms">
                Aceptar Términos y Condiciones
              </label>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-dark btn-orange">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
