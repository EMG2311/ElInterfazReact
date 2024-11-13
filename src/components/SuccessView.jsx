export const SuccessView = ({message, onClose})=>{
    return (
        <>
    <div className="modal-backdrop fade show" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
    <div className="modal fade show d-block" tabIndex="-1" style={{ display: 'block', zIndex: 1050 }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content rounded-3 shadow-lg">
          <div className="modal-header border-0">
            <h5 className="modal-title text-center w-100" style={{ fontSize: '1.25rem' }}>
                
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p className="text-center" style={{ fontSize: '1rem', marginBottom: '20px' }}>
              {message}
            </p>
          </div>
          <div className="modal-footer border-0 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-success px-4 py-2"
              onClick={onClose}
            >
              ¡Listo!
            </button>
          </div>
        </div>
      </div>
    </div>
        
        </>
    )
}