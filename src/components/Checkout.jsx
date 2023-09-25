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
            <img className="btn tarjc" width={'100px'} src={Visa} alt="visa" />
            <img className='btn tarjc' width={'100px'} src={Master} alt="visa" />
        </div>

        <form className="row g-3 shadow pb-4 rounded-4 px-2">
  
  <div className="col-12">
   
    <input type="text" className="form-control" id="inputAddress2" placeholder="Nombre de la tarjeta"/>
  </div>
  <div className="col-md-6">
    
    <input type="text" required className="form-control" placeholder='Numero de la tarjeta'/>
  </div>
  <div className="col-md-4">
    <input className='form-control' type="date" name="" id="" placeholder='Vencimiento' />
    
    
  </div>
  <div className="col-md-2">
    
    <input type="text" required className="form-control" placeholder='CVV'/>
  </div>








    </form>
</div>
  
    </>
  )
}

export default Checkout