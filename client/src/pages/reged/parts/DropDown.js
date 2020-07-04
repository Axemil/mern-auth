import React, { useState } from "react";

const DropDown = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div className="header_drop-down">
      <div onClick={() => setFlag(!flag)} className="header_drop-down_icon">
        <div className="header_drop-down_icon-dot"></div>
        <div className="header_drop-down_icon-dot"></div>
        <div className="header_drop-down_icon-dot"></div>
      </div>
      {flag && (
        <div className="header_drop-down_menu">
          <div className="header_drop-down_menu-item">Sort by name</div>
          <div className="header_drop-down_menu-item">Sort by surname</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
