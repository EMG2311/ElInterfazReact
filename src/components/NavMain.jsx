import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormProduct } from "./FormProduct";

export const NavMain=()=>{
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    return(
        <>
        <nav className='navbar navbar-expand-lg bg-body-tertiary' style={{marginBottom:'20px' }}>
          <Link className='navbar-brand' to="/">Mostrar productos</Link>
          <div style={{ position: 'fixed', top: '10px', right: '10px'}}>
            <button onClick={handleOpenModal} className="btn btn-primary" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '5px 10px' }}>
                + Agregar
            </button>
          </div>
        </nav>

        <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormProduct handleCloseModal={handleCloseModal} />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
        </Modal.Footer>
      </Modal>
        </>
        
    );
    
}