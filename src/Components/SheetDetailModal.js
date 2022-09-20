import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Select from "react-select";
export default function SheetDetailModal(props) {
  const { show, setShow, setEditMode } = props;
  const assetList = [
    { value: "Heavy Duty Line", label: "Heavy Duty Line" },
    { value: "Light Duty Line", label: "Light Duty Line" },
  ];
  const subAssetList = [
    { value: "Press Up Station", label: "Press Up Station" },
    { value: "Knockdown Station", label: "Knockdown Station" },
  ];
  const [sheetDetails, setSheetDetails] = useState({
    sheetName: "",
    asset: "",
    subAsset: "",
  });
  return (
    <Modal
      onHide={() => {
        setShow(false);
      }}
      show={show}
      centered
      size="lg"
      className="sheet-detail-modal"
    >
      <Modal.Header>New Sheet Details</Modal.Header>
      <Modal.Body>
        <p>Sheet Name</p>
        <input
          value={sheetDetails?.sheetName}
          onChange={(e) => {
            setSheetDetails({ ...sheetDetails, sheetName: e.target.value });
          }}
          className="sheet-detail-modal-input"
        />
        <p>Sheet Description</p>
        <input
          onChange={(e) => {
            setSheetDetails({
              ...sheetDetails,
              sheetDescription: e.target.value,
            });
          }}
          className="sheet-detail-modal-input"
        />
        <div className="d-flex sheet-detail-dropdowns justify-content-between">
          <div className="col-6">
            <p>Asset</p>
            <Select
              onChange={(e) => {
                setSheetDetails({ ...sheetDetails, asset: e.value });
              }}
              options={assetList}
              placeholder="Select asset"
            />
          </div>
          <div className="col-6">
            <p>Sub-Asset</p>
            <Select
              onChange={(e) => {
                setSheetDetails({ ...sheetDetails, subAsset: e.value });
              }}
              options={subAssetList}
              placeholder="Select sub-asset"
            />
          </div>
        </div>
      </Modal.Body>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => {
            if(sheetDetails?.sheetName && sheetDetails?.asset && sheetDetails?.subAsset){
            setEditMode(true);
            setShow(false);
          }}}
          className="start-button"
        >
          Start Authoring
        </button>
      </div>
    </Modal>
  );
}
