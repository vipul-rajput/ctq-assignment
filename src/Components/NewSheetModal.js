import React from "react";
import Modal from "react-bootstrap/Modal";
import { CanvaIcon, MenuIcon } from "../Assets/assets";
export default function NewSheetModal(props) {
  const { show, setShow, onSelectOption1 } = props;
  return (
    <Modal
      onHide={() => {
        setShow(false);
      }}
      className="start-type-modal"
      size="lg"
      show={show}
      centered
    >
      <h5 className="text-center">How do you want to start?</h5>
      <Modal.Body>
        <div className="d-flex justify-content-around">
          <div className="text-center col-4 start-option">
            <button onClick={()=>{
                setShow(false);
                onSelectOption1();
            }}>
              <CanvaIcon />
            </button>
            <div>
              <h6>Author from Scratch</h6>
              <p className="mt-3">
                Build a sheet by dragging & dropping using the authoring module,
                from scratch
              </p>
            </div>
          </div>
          <div className="start-option text-center col-4">
            <button>
              <MenuIcon />
            </button>
            <div>
              <h6>Choose from Templates </h6>
              <p className="mt-3">
                Choose an already built sheet from our extensive sheets library
                and edit on top of it
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
