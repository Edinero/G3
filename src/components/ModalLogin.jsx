// import React from 'react'

const ModalLogin = () => {
    
  return (
    <>
       
   
    <div className="modal fade" id="loginmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content bg-dark-popup">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
            <button type="button" className="btn-close close-popup" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className='form' action="">
                <input type="text" />
                <input type="password" />

            </form>
            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default ModalLogin