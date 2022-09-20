import React, { useState } from "react";

import {
  Edit as EditIcon,
  SearchIcon,
  AddIcon,
  CanvaIcon,
} from "../Assets/assets";
import Select from "react-select";
import NewSheetModal from "../Components/NewSheetModal";
import SheetDetailModal from "../Components/SheetDetailModal";
export default function Edit(props) {
  const {setEditMode} = props;
  const assetList = [
    { value: "Heavy Duty Line", label: "Heavy Duty Line" },
    { value: "Light Duty Line", label: "Light Duty Line" },
  ];
  const subAssetList = [
    { value: "Press Up Station", label: "Press Up Station" },
    { value: "Knockdown Station", label: "Knockdown Station" },
  ];
  const [show, setShow] = useState(false);
  const [sheetConfigureModal, setSheetConfigureModal] = useState(false);
  return (
    <div style={{ paddingTop: "22px" }}>
      <div className="d-flex justify-content-center">
        <button className="btn sheet-button">
          <EditIcon /> Sheets
        </button>
        <div className="sheet-search col-3 d-flex">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
      </div>
      <div className="d-flex justify-content-between filters">
        <div className="d-flex filter-dropdowns">
          <Select
            classNamePrefix="filter-dropdowns"
            options={assetList}
            placeholder="Select asset"
          />
          <span className="m-2"></span>
          <Select
            classNamePrefix="filter-dropdowns"
            options={subAssetList}
            placeholder="Select sub-asset"
          />
        </div>
        <div>
          <button
            onClick={() => {
              setShow(true);
            }}
            className="btn btn-primary new-sheet-button"
          >
            <AddIcon />
            &nbsp;Author New Sheet
          </button>
        </div>
      </div>
      <div className="d-flex sheet-list justify-content-center">
        <CanvaIcon />
      </div>
      <NewSheetModal
        show={show}
        setShow={setShow}
        onSelectOption1={() => {
          setSheetConfigureModal(true);
        }}
      />
      <SheetDetailModal
        show={sheetConfigureModal}
        setShow={setSheetConfigureModal}
        setEditMode={setEditMode}
      />
    </div>
  );
}
