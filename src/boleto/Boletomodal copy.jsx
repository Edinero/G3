import { useEffect, useState } from "react";
import './boleto.css'
import Pantalla from '../images/pantalla.png'
import { asientos } from "./asientos";


const Boletomodal = () => {
  const [boleto, setBoleto] = useState([]);
  const numSeatsPerRow = 9;
  
const assents = asientos
  useEffect(() => {
    for (
      let letra = "A";
      letra <= "E";
      letra = String.fromCharCode(letra.charCodeAt(0) + 1)
    ) {
      for (let seatNum = 1; seatNum <= numSeatsPerRow; seatNum++) {
        asientos.push(`${seatNum}${letra}`);
        setBoleto(asientos);

        
      }
    }
  }, []);

  // console.log("Hola", boleto);
  return (
    <div
      className="modal fade"
      id="asientos"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modalsm ">
        <div className="modal-content bg-light-popup">
          <div className="modal-header">
            <h6>
            Escoge tu lugar favorito</h6>
                       <button
              type="button"
              className="btn-close close-popup"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div  className="overflow-hidden" ><img  width="90%" src={Pantalla}/></div>
            <br/>
            {boleto && boleto.map((bolet) =>
            <div className="gridul">

              <input key={asientos.id} type="checkbox" className="btn-check" id="btn-assent"  autoComplete="off"/>
              <label  className="btn btnassent" forHtml="btn-assent">{bolet}</label>
             </div>)}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boletomodal;
