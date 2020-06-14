import React, { useState } from "react";

const useInput = ({ type, label, placeholder, alternate }) => {
  const [value, setValue] = useState("");
  const input = (
    <div className={ !alternate ? "unreg-page_block-input" : "unreg-page_block-input_alternate"}>
      { !alternate && <label>{ label }</label> }
      <input
        className="unreg-page_input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
    </div>
  );
  return [value, input];
};

export default useInput;
