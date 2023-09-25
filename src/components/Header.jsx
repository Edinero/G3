import Logo from "../images/logocinema.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import avatarHombre from "../assets/avatar-hombre.png";
import avatarMujer from "../assets/avatar-mujer.png";
import "./header.css";

const Header = () => {
  const { user, logout, isAuth } = useContext(AuthContext);

  return (
    <>
      <header className="bg-dark">
        <div className="py-2 px-4 d-flex justify-content-between align-items-center bg-dark">
          <div className="logo">
            <Link to="/">
              <img className="logo-img" src={Logo} alt="Logo" />
            </Link>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark mobile-nav">
            <div className="">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active-menu" : ""
                      }
                      to="/"
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active-menu" : ""
                      }
                      to="/peliculastop"
                    >
                      PELICULAS TOP
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active-menu" : ""
                      }
                      to="/"
                    >
                      SALAS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active-menu" : ""
                      }
                      to="/promociones"
                    >
                      PROMOCIONES
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="d-flex align-items-center text-center gap-2 movil2">
            <nav className="nav-login d-flex align-items-sm-start">
              <Link className="dropdown-item" to="/comprar">
                <i className="bi bi-cart4 fs-4 text-light "></i>
              </Link>
            </nav>

            <nav className="nav-login d-flex align-items-center">
              <div className="h-2 ">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle d-flex align-items-center"
                      to="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {!isAuth() ? (
                        <i className="bi bi-person-circle fs-4 text-light"></i>
                      ) : user.ClientGenero === "Masculino" ? (
                        <img
                          src={avatarHombre}
                          className="h-20 w-20"
                          style={{ height: "2rem", width: "2rem" }}
                        />
                      ) : (
                        <img
                          src={avatarMujer}
                          className="h-20 w-20"
                          style={{ height: "2rem", width: "2rem" }}
                        />
                      )}
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <Link className="dropdown-item" to="/login">
                          Inicio Sesion
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-dark"
                          to="/registrar"
                        >
                          Registro
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={logout}>
                          Salir
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="p-2 gap-2 text-wrap d-flex ">
                <p className="text-white pt-3 user-nm">{user.ClientName}</p>
                {/* <h4 className="text-white fs-6 d-flex">{user.ClientLastName}</h4> */}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
