import { useEffect, useState } from "react";
import './boleto.css'
import Pantalla from '../images/pantalla.png'
import { asientos } from "./asientos";


const AssentsApp = () => {
  const [boleto, setBoleto] = useState([]);
  
  
  useEffect(() => {
    setBoleto(asientos)
    
  }, []);

  const handleOnchange=(event)=>{
    setOptions({...options, [event.target.name]:event.target.value} )
    }  

  //  console.log("Hola 2", boleto);
  return (
    <div>               
       <div>
                <img  width="90%" src={Pantalla}/></div>
            <br/>
    
            {boleto && boleto.map((bolet) =>
            <div className="gridul">
              
           <input 
           key="asientoID"
  type="checkbox" 
  name="butacas"
  className="btn-check" id="btnbutaca"
  onChange={handleOnchange}
  value={bolet}
  autoComplete="off"
 />
<label 
className="btn btn-info" forHtml="btnbutaca">{bolet}</label>

             </div>)}
          </div>
       
  );
};

export default AssentsApp;