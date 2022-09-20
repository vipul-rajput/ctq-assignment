import React, { useEffect, useRef, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { AddIcon, RemoveIcon } from "../Assets/assets";
const InputComponent = ({ field, id, setFormInputs, formInputs }) => {
  useEffect(() => {
    if (field === "Checklist") {
      let newFormInputs = [...formInputs];
      newFormInputs[id].options = ["Option 1", "Option 2"];
      setFormInputs(newFormInputs);
    }
  }, [field]);
  if (field === "Text") {
    return <input type="text" />;
  }
  if (field === "Checklist") {
    // let newFormInputs = [...formInputs];
    // newFormInputs[id].options = ["Option 1", "Option 2"];
    // setFormInputs(newFormInputs);
    return (
      <div className="checklist-field">
        <input type="text" placeholder="Field Title" />
        <div className="checklist-options">
          {formInputs[id].options &&
            formInputs[id].options.length > 0 &&
            formInputs[id].options.map((option, index) => {
              return (
                <div className="d-flex">
                  <input type="checkbox" />
                  <input
                    className="checklist-options-input"
                    type="text"
                    value={option}
                    onChange={(e) => {
                      let newFormInputs = [...formInputs];
                      newFormInputs[id].options[index] = e.target.value;
                      setFormInputs(newFormInputs);
                    }}
                    placeholder="Option"
                  />
                  <button>
                    <RemoveIcon />
                  </button>
                </div>
              );
            })}
          <button
            onClick={() => {
              let newFormInputs = [...formInputs];
              newFormInputs[id].options.push("");
              setFormInputs(newFormInputs);
            }}
            className="add-opt-button"
          >
            <AddIcon /> Add an Option
          </button>
        </div>
      </div>
    );
  }
  if (field === "date-time") {
    return <input type="date" />;
  }
  if (field === "section") {
    return (
      <div className="section-field">
        <sub style={{ color: "#7D7676" }}>Section 01</sub>
        <input
          type="text"
          onChange={(e) => {
            let newFormInputs = [...formInputs];
            newFormInputs[id]["sectionName"] = e.target.value;
            setFormInputs(newFormInputs);
          }}
          defaultValue="Section Title"
          placeholder="Section Title"
        />
        <input
          onChange={(e) => {
            let newFormInputs = [...formInputs];
            newFormInputs[id]["sectionDescription"] = e.target.value;
            setFormInputs(newFormInputs);
          }}
          style={{ fontWeight: "400" }}
          type="text"
          placeholder="Section Description"
        />
      </div>
    );
  }
};

export default function CreateSheet() {
  let height = window.innerHeight;
  const fields = ["Text", "Checklist", "Select Date & Time"];
  const dragItem = useRef();
  const dragOverItem = useRef();
  const dragStart = (e, field) => {
    dragItem.current = field;
  };
  const dragEnter = (e) => {
    console.log(e);
    let formInput = {
      type: dragItem.current,
      // options: [],
      // sectionName: "",
      // sectionDescription: "",
    };
   
    setFormInputs([...formInputs, formInput]);
    console.log(formInputs);
  };
  const onDragOver = (e) => {
    console.log(e);
    e.stopPropagation();
    e.preventDefault();
  }

  const [formInputs, setFormInputs] = useState([]);
  return (
    <div className="d-flex create-sheet">
      <div className="col-3">
        <div className="row-title">Fields</div>
        {/* {fields.map((field, index) => {
          return (
            <div
              onDragStart={(e) => dragStart(e, field)}
              draggable
              className="field"
              key={index}
              style={{ height: `40px` }}
            >
              {field}
            </div>
          );
        })} */}

        <div className="field-type">Basic Fields</div>
        <div className="field">
          <div
            onDragStart={(e) => dragStart(e, "Text")}
            draggable
            className="draggable"
          >
            Text
          </div>
        </div>
        <div className="field-type">Selection Fields</div>
        <div className="field">
          <div className="field">
            <div
              className="draggable"
              onDragStart={(e) => dragStart(e, "Checklist")}
              draggable
            >
              Checklist
            </div>
          </div>
        </div>
        <div className="field">
          <div
            className="draggable"
            onDragStart={(e) => dragStart(e, "date-time")}
            draggable
          >
            Select Date & Time
          </div>
        </div>
        <div className="field-type">Attachment Fields</div>
        <div className="field">
          <div
            className="draggable"
            onDragStart={(e) => dragStart(e, "file")}
            draggable
          >
            Upload File
          </div>
        </div>
        <div className=" field-type">Layout</div>
        <div className="field">
          <div
            className="draggable"
            onDragStart={(e) => dragStart(e, "section")}
            draggable
          >
            Section
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row-title">Canvas</div>
        <div
          className="drop-area"
          onDragOver={(e)=>onDragOver(e)}
          onDrop={(e) => dragEnter(e)}
          // onDragEnter={(e) => dragEnter(e)}
        >
          {formInputs &&
            formInputs.map((input, index) => {
              return (
                <InputComponent
                  setFormInputs={setFormInputs}
                  formInputs={formInputs}
                  field={input.type}
                  key={index}
                  id={index}
                />
              );
            })}
        </div>
      </div>

      <div className="col-3">
        <div className="row-title">Controls</div>
      </div>
    </div>
  );
}
