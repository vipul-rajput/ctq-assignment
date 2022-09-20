import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
export default function DropDown(props) {
  const { placeholder = "Select", items = [] } = props;
  return (
    <Dropdown placeholder={placeholder}>
      <Dropdown.Toggle></Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
