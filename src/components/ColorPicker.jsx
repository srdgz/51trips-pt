import React from "react";

const ColorPicker = ({ label, value, onChange }) => {
  return (
    <label>
      <span>{label}:</span>
      <input type="color" value={value} onChange={onChange} />
    </label>
  );
};

export default ColorPicker;
