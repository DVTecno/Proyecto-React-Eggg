import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./producto.css";
import { useState } from "react";

export const Producto = ({ producto }) => {
  const [corazonLleno, setCorazonLleno] = useState(false);

  const handleHeartClick = () => {
    setCorazonLleno(!corazonLleno);
  };

  return (
    <div className={` ${window.innerWidth >= 768 ? "w-50 mx-auto" : "w-100"}`}>
      <div className="card m-5">
        <div className="container">
          <div className="producto-card">
            <div className="row align-items-start">
              <div className="col-md-4">
                <div className="imagen mt-4 mb-4">
                  <NavLink to={`/`}>
                    <div className="img-container">
                      <img
                        src={producto.image}
                        alt={producto.title}
                        className="img-thumbnail img-fluid"
                      />
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="col-md-8 col-12">
                <div className="detalles mt-4">
                  <div className="iconos align-self-end text-end">
                    <i
                      className={`fs-4 bi bi-heart text-dark ${
                        corazonLleno ? "d-none" : ""
                      }`}
                      onClick={handleHeartClick}
                    ></i>
                    <i
                      className={`fs-4 bi-heart-fill text-danger ${
                        !corazonLleno ? "d-none" : ""
                      }`}
                      onClick={handleHeartClick}
                    ></i>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="h4">{producto.title}</p>
                  </div>
                  <div className="alert alert-info" role="alert">
                    <h4 className="alert-heading">Descripción:</h4>
                    <p className="text-break ">{producto.description}</p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-primary">Precio: ${producto.price}</h3>
                  </div>
                  <div className="mb-4">
                    <button className="btn btn-primary mb-2 me-3">
                      Comprar
                    </button>
                    <button className="btn btn-secondary mb-2 me-3">
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Producto.propTypes = {
  producto: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
