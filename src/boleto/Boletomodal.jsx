import { useEffect, useState } from "react";
import './boleto.css'
import Pantalla from '../images/pantalla.png'
import { asientos } from "./asientos";


const Boletomodal = () => {
  const [boleto, setBoleto] = useState([]);
  const [assents, setAssents] = useState({butacas:''});
  
  useEffect(() => {
    setBoleto(asientos)
    
  }, []);

  const handleOnchange=(event)=>{
    setAssents({...assents, [event.target.name]:event.target.value} )};

    console.log('Asiento', assents)

  //  console.log("Hola 2", boleto);
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
            <div  className="overflow-hidden" >
              
              
              <img  width="90%" src={Pantalla}/></div>
            <br/>
          
            {boleto && boleto.map((bolet) =>
  <div className="gridul">
              
<input key="asientoID" type="checkbox"  name="butacas" className="btn-check" id="btnbutaca" onChange={handleOnchange} value={bolet} autoComplete="off"
 />
<label key ='labelid' className="btn btn-info" forHtml="btnbutaca">{bolet}</label>

  </div>
)}

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
