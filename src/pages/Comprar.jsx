import { useState, useContext } from "react";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Checkout from "../components/checkout";

const Comprar = () => {
  const { cartItems, removeFromCart } = useCart();
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const history = useNavigate();

  const handleShowModal = () => {
    if (cartItems.length === 0) {
      alert("No contiene datos");
    } else {
      setShowModal(true);
    
    }
  };

  // const {movie} = cartItems;

  const handleCerrarModal = () => {
    setShowModal(false);
  };

  console.log("Datos Pelicula: ", cartItems);

  const handleCloseModal = () => {
    cartItems.forEach((item) => removeFromCart(item));
    setShowModal(false);
    localStorage.removeItem("cartItems");
    history("/");

    const serviceId = "service_1o8e94m";
    const templateId = "template_m0lnt9f";
    const apikey = "pe0Uovw1Rp7NDnQpi";

    const datosMovie = cartItems.map((item) => {
      return (
        item.movie.title +
        " " +
        item.options.options +
        " " +
        item.options.hour +
        " " +
        item.selectedSala +
        " " +
        item.assents.join(", ") +
        "<br />"
      );
    });

    const templateParams = {
      ClientEmail: user.ClientEmail,
      ClientName: user.ClientName,
      ClientLastName: user.ClientLastName,
      message: datosMovie,
    };

    emailjs.send(serviceId, templateId, templateParams, apikey);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart( item.id === item.id);
  };

  return (
    <div className="container mt-5 mb-5">
              <h2 className="card-title text-center mb-4 text-light">
                Carrito de Compras
              </h2>
      <div className="row justify-content-center ">
        <div className="col-md-8">
          <div className="card shadow ">
            <div className="card-body ">
              {cartItems.length === 0 ? (
                <p>No hay elementos en el carrito.</p>
              ) : (
                <div className="row row-cols-md-3 g-4 flex-wrap ">
                  {cartItems.map((item) => (
                    <div key={item.movie.id} >
                      <div className="card shadow d-flex" >
                        <img 
                          src={`https://image.tmdb.org/t/p/original/${item.movie.poster_path}`}
                          alt={item.movie.title}
                          className="card-img img-cart "
                          
                        />
                        <div className="card-body detallecompra">
                          <h4 className="card-title">{item.movie.title}</h4>
                          <p className="card-text">
                            Asientos: {item.assents.join(", ")}
                          </p>
                          <p className="card-text">
                            Horario: {item.options.hour}
                          </p>
                          <p className="card-text">
                            Fecha: {item.options.options}
                          </p>
                          <p className="card-text">Sala: {item.selectedSala}</p>
                          <div className=" d-flex justify-content-center">
                            <button
                              onClick={() => handleRemoveFromCart(item)}
                              className="btn btn-danger rounded-5 px-4"
                            >
                              eliminar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="text-center mt-4 d-flex justify-content-around">
                <div>
                  <button className="btn btn-cart2 rounded-5 px-4" onClick={handleShowModal}>
                    Ir a Pagar
                  </button>
                </div>
                <div>
                  <Link to="/" className="btn btn-cart2 rounded-5 px-4">
                    Seguir Comprando
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content custom-modal-content">
              {" "}
              {/* Agregamos la clase personalizada aquí */}
              <div className="modal-header bg-dark-3 text-light">
                <h5 className="modal-title">Metodo de Pago</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCerrarModal}
                ></button>
              </div>
              <div className="modal-body pt-0">
                <Checkout/>
                <div className=" mt-0 my-2 text-center">
                  <h6>Detalle de la Compra</h6>
                </div>
                <div className="detallecompra">
              
                {cartItems.map((item) => (
                  <div className="py-4 border-bottom" key={item.movie.id}>
                    
                    <p className="fw-bold">Pelicula: {item.movie.title}</p>
                    <div className="item-compra d-flex gap-4 flex-wrap">
                    <p>Sala: {item.selectedSala}</p>
                    <p>Fecha: {item.options.options}</p>
                    <p>Horario: {item.options.hour}</p>
                    <p>Asientos: {item.assents.join(", ")}</p>
                    </div>
                  </div>
                ))}
                </div>
                <div></div>
              </div>
              <div className="modal-footer ">
                <button
                  type="button"
                  className="btn btn-cart2 rounded-5 px-4"
                  onClick={handleCloseModal}
                >
                  Confirmar Compra
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCerrarModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comprar;
