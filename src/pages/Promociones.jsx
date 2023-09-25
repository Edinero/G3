// import React from 'react'
import Promo1 from '../images/promo1.jpg'
import Promo2 from '../images/combo2.jpg'
import Promo3 from '../images/combo3.jpg'
import Promo4 from '../images/combo4.jpg'


const Promociones = () => {
  return (
    <div className='mt-4 gx-0 mx-auto text-center text-light '>
        <h4 className='py-4'>PROMOCIONES</h4>
        <div className="imagenes-promo py-4 d-flex gap-4 flex-wrap justify-content-center" >
            <img width={'300px'} src={Promo1} />
            <img width={'300px'} src={Promo2} />
            <img width={'300px'} src={Promo3} />
            <img width={'300px'} src={Promo4} />


        </div>
        

    </div>
  )
}

export default Promociones