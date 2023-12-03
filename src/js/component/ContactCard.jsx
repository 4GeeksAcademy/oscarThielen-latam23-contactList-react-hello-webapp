import React, { useState } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

export const Card = ({ name, address, email, phone, id, deleteContact }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDelete = (id) => {
    deleteContact(id);
    setModalOpen(false); // Cerrar el modal después de eliminar el contacto
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="d-flex justify-content-center align-items-center h-100">
              <img
                src={rigoImage}
                className="img-fluid rounded-circle"
                alt="Profile"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <div>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">📍 {address}</p>
                <p className="card-text">✉️ {email}</p>
                <p className="card-text">📞 {phone}</p>
              </div>
              <div className="d-flex justify-content-end">
                <div id="buttons" className="btn btn-primary me-2">
                  <Link to={`/editcontact/${id}`}>
                    ✏️
                  </Link>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={openModal} // Abrir el modal cuando se hace clic en el botón de eliminar
                >
                  🗑
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">
                  Confirmación de borrado
                </h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro de que deseas borrar este contacto?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Cancelar
                </button>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(id)}>
                  Borrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalOpen && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};