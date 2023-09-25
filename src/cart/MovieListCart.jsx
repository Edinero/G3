import React from "react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useOptions } from "../context/OptionsContext";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAssents } from "../context/AssentsContext";
import { useSala } from "../context/SalaProvider";
import { useCart } from "../context/CartContext";
const MovieListCart = ({ selectedMovie }) => {
  const { isAuth } = useContext(AuthContext);
  const { options } = useOptions();
  const { assents } = useAssents();
  const { selectedSala } = useSala();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (
      selectedMovie &&
      options &&
      options.options &&
      options.hour &&
      assents.length > 0 &&
      selectedSala
    ) {
      const cartItem = {
        movie: selectedMovie,
        options: options,
        assents: assents,
        selectedSala: selectedSala,
      };
  
      addToCart(cartItem);

      window.location.href = "/comprar";
    } else {
      alert("No se pueden agregar elementos vacíos al carrito");
    }
  };

  return (
    <>
      {" "}
      <div className="cart">
        <div
          className="offcanvas offcanvas-bottom"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header cart-slide">
            <h5
              className="offcanvas-title text-center cart-header"
              id="offcanvasBottomLabel"
            >
              HAZ AGREGADO TU PELICULA A  <span className="namcine">{selectedSala}</span>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body large">
            <div className="container d-flex gap-3 justify-content-around">
              <div className="enter-cart d-flex flex-wrap gap-4 py-2">
                <div className="sbanerimg">
                  <img
                    className="imgbanerposter"
                    src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}
                    alt={selectedMovie.original_title}
                  />
                </div>
                <div className="detailenter d-flex align-items-center">
                  <div className="text-center">
                    <span className="numenter">{assents.length}</span>
                    <h2 className="titleenter">
                      {selectedMovie.original_title}
                    </h2>
                    <p className="descenter">
                      {options.options} <br />
                      {options.hour}
                    </p>
                  </div>
                </div>
              </div>
              <div className="btns-cart d-flex flex-column gap-2 justify-content-center align-items-center">
                <div className="detailenter d-flex align-items-center">
                  <div className="text-center">
                    <h2 className="titleenter">Asientos</h2>
                    <div className="assents-container row gx-3">
                      {assents.map((assent, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="border rounded p-3 shadow">
                            {assent}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="btns-cart d-flex flex-column gap-2 justify-content-center align-items-center">
                <button
                  key="ir-a-pagar"
                  onClick={handleAddToCart}
                  className="btn btn-dark btn-orange2"
                >
                  Comprar
                </button>

                <button
                  className="btn btn-dark btn-orange3"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListCart;
