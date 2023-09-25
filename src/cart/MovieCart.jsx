import { useEffect, useState } from "react";
import Pantalla from "../images/pantalla.png";
import { asientos } from "../boleto/asientos";
import { useOptions } from "../context/OptionsContext";
import { useAssents } from "../context/AssentsContext";
import { useSala } from "../context/SalaProvider";
const MovieCart = () => {
  const { options, setOptions } = useOptions();
  const { assents, setAssents } = useAssents();
  const { selectedSala, setSelectedSala } = useSala();
  const [boleto, setBoleto] = useState([]);

  useEffect(() => {
    setBoleto(asientos);
  }, []);

  const handleOnchange = (event) => {
    setOptions({ ...options, [event.target.name]: event.target.value });
  };
  const handleOnchecked = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAssents([...assents, value]);
    } else {
      setAssents(assents.filter((bt) => bt !== value));
    }
    console.log("que hay?", assents);
  };
  const handleSalaChange = (event) => {
    setSelectedSala(event.target.value);
  };


  // console.log("asientos", assents);

  return (
    <div className="text-light text-center">
      <div className="inputselect pb-4 d-flex gap-2 justify-content-center flex-wrap">
        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option1"
          autoComplete="off"
          onChange={handleOnchange}
          value={"Lunes, 18-set-23"}
        />
        <label className="btn btn-dark" htmlFor="option1">
          LUNES
          <br />
          18-Set-23
        </label>

        <input
          type="radio"
          className="btn-check btnactive"
          name="options"
          id="option2"
          autoComplete="off"
          onChange={handleOnchange}
          value={"Martes, 19-set-23"}
        />
        <label className="btn btn-dark " htmlFor="option2">
          MARTES
          <br />
          19-Set-23
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option3"
          autoComplete="off"
          onChange={handleOnchange}
          value={"Miercoles, 20-set-23"}
        />
        <label className="btn btn-dark" htmlFor="option3">
          MIERCOLES
          <br />
          20-Set-23
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option4"
          autoComplete="off"
          onChange={handleOnchange}
          value={"Sabado, 23-set-23"}
        />
        <label className="btn btn-dark" htmlFor="option4">
          SABADO
          <br />
          23-Set-23
        </label>
        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option5"
          autoComplete="off"
          onChange={handleOnchange}
          value={"Domingo, 24-set-23"}
        />
        <label className="btn btn-dark" htmlFor="option5">
          DOMINGO
          <br />
          24-Set-23
        </label>
      </div>
      <p className="text-light text-center cart-text ">HORARIOS</p>
      <div className="inputselect pb-4 d-flex gap-2 justify-content-center flex-wrap">
        <input
          type="radio"
          className="btn-check"
          name="hour"
          id="hour1"
          autoComplete="off"
          onChange={handleOnchange}
          value={"10:00am"}
        />
        <label className="btn btn-dark" htmlFor="hour1">
          10:00am
        </label>
        <input
          type="radio"
          className="btn-check"
          name="hour"
          id="hour2"
          autoComplete="off"
          onChange={handleOnchange}
          value={"03:00pm"}
        />
        <label className="btn btn-dark" htmlFor="hour2">
          03:00pm
        </label>
        <input
          type="radio"
          className="btn-check"
          name="hour"
          id="hour3"
          autoComplete="off"
          onChange={handleOnchange}
          value={"05:00pm"}
        />
        <label className="btn btn-dark" htmlFor="hour3">
          05:00pm
        </label>
        <input
          type="radio"
          className="btn-check"
          name="hour"
          id="hour4"
          autoComplete="off"
          onChange={handleOnchange}
          value={"07:00pm"}
        />
        <label className="btn btn-dark" htmlFor="hour4">
          07:00pm
        </label>
        <input
          type="radio"
          className="btn-check"
          name="hour"
          id="hour5"
          autoComplete="off"
          onChange={handleOnchange}
          value={"09:00pm"}
        />
        <label className="btn btn-dark" htmlFor="hour5">
          9:00pm
        </label>
      </div>
      <div className="py-2 d-flex justify-content-around">
        <div className="col-md-8">
          {/* <label htmlFor="sala" className="form-label">
            Seleccione Sala
          </label> */}
          <select
            name="sala"
            className="form-select inputselect px-4 text-center"
            aria-label="Default select example"
            onChange={handleSalaChange}
            value={selectedSala}
          >
            <option value="">-- Seleccione sala --</option>
            <option value={"Cinema Plaza Norte"}>Cinema Plaza Norte</option>
            <option value={"Cinema San Miguel"}>Cinema San Miguel</option>
            <option value={"Cinema Centro Civico"}>Cinema Centro Civico</option>
            <option value={"Cinema La Molina"}>Cinema La Molina</option>
            <option value={"Cinema Risso"}>Cinema Risso</option>
            <option value={"Cinema Jockey Plaza"}>Cinema Jockey Plaza</option>
          </select>
        </div>
      </div>
      <div className="py-2">

        <div className="d-inline-flex gap-1 mb-4">
          <a
            className="btn btn-dark dark3 mt-2"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Selecciona tus asientos
          </a>
        </div>

        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <div className="content-ass"></div> 
            <div className="pb-5">
              <img width="90%" src={Pantalla} />
            <br />
            </div>
            <div className="butacascine mt-4">
            <li className="row">
              {asientos &&
                asientos.map((asiento, index) => (
                  <li className="col-3 btn-butaca" key={index}>
                    <span className="btn d-inline-flex btn-butaca butaca">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="butacas"
                        id={`btnbutaca-${index}`}
                        onChange={handleOnchecked}
                        autoComplete="off"
                        value={asiento}
                      />
                      <label
                        className="form-check-label text-black"
                        htmlFor={`btnbutaca-${index}`}
                      >
                        {asiento}
                      </label>
                    </span>
                  </li>
                ))}
            </li>
            </div>

          </div>
        </div>
      </div>

      <button
        className="btn btn-cart"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
        // onClick={() => handleAddToCart(movie)}
      >
        Agregar Entradas
      </button>
      {/* <Boletomodal /> */}
    </div>
  );
};

export default MovieCart;
