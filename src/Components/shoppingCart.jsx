import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const ShoppingCart = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [imag, setImg] = useState([]);
  const [descrip, setDesc] = useState("");
  const [tit, setTit] = useState("");

  async function showImages(id, image, desc, title) {
    setDesc(desc);
    setTit(title);
    setImg(image);
    handleShow();
  }
  return (
    <>
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 mycard ">
        <div className="card p-0 overflow-hidden h-72 shadow ">
          <div className="flex"></div>
          <img
            src={props.thumbnail}
            className="object-center max-h-40 h-2/5"
            alt=""
          />
          <div className="card-body text-center">
            <h5 className="card-title">
              <b>Price:</b> $ {props.price}
            </h5>
            <p className="card-title">
              <b>Brand : </b>
              {props.brand}
            </p>
            <p className="card-title">
              <b>Model : </b>
              {props.title}
            </p>
            <p className="card-title">
              <b>Discount : </b>
              {props.discountPercentage} %
            </p>
            <p className="card-title">
              <b>Category : </b>
              {props.category}
            </p>
            <p
              onClick={() =>
                showImages(
                  props.id,
                  props.images,
                  props.description,
                  props.title
                )
              }
            >
              <button>
                <b className="hover:text-amber-400">More Details</b>
              </button>
            </p>
          </div>
        </div>
      </div>
      {/* ,=model */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Images of {tit}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex"></div>

          <div>
            <b>Description : </b>
            <i>{descrip}</i>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {imag.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`P_img`}
              className="w-1/4 p-2"
            />
          ))}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShoppingCart;
