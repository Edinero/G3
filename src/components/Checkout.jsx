import Visa from '../images/visa.png'
import Master from '../images/master.png'
import LogoCompra from '../images/logocinemax.png'




const Checkout = () => {
  return (
    <>
    <div className='pt-2 text-center'>
        <img width={'200px'} src={LogoCompra} alt="" />
        <hr/>
    </div>
    <div className="mb-3 mt-0 fw-bold text-center px-2">

        <div className="tarjetascredito d-flex gap-4 justify-content-center py-4">
            <img typeof="radio" className="btn tarjc" width={'100px'} src={Visa} alt="visa" />
            <img className='btn tarjc' width={'100px'} src={Master} alt="visa" />
        </div>

        <form className="row g-3 shadow pb-4 rounded-4 px-2">
  
  <div class="col-12">
   
    <input type="text" class="form-control" id="inputAddress2" placeholder="Nombre de la tarjeta"/>
  </div>
  <div class="col-md-6">
    
    <input type="text" required class="form-control" placeholder='Numero de la tarjeta'/>
  </div>
  <div class="col-md-4">
    <input className='form-control' type="date" name="" id="" placeholder='Vencimiento' />
    
    {/* <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select> */}
  </div>
  <div class="col-md-2">
    
    <input type="text" required class="form-control" placeholder='CVV'/>
  </div>








    </form>
</div>
  
    </>
  )
}

export default Checkout