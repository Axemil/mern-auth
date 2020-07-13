import React from "react";

const Loader = () => {
  return (
    <div className="unreg-page_main">
      <div className="unreg-page_card unreg-page_card-error-block">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
