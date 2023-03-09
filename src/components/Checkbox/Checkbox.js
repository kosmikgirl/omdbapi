import React from "react";
import { Checkbox } from "antd";

export const Check = ({ label, checked, onCheckboxChange}) => {
  const onHandleChange = (event) => {
    onCheckboxChange(event.target.checked);
  };
  return (
    <Checkbox checked={checked} onChange={onHandleChange}>
      {label}
    </Checkbox>
  );
};
