import React from "react";
import { Link } from "react-router-dom";

const Contact = ({ name, surname, phone, category, _id, email }) => {
  return (
    <div key={_id} className="page-block__contact">
      <div className="page-block__contact-pic"></div>
      <div className="page-block__contact-info">
        <p>
          {name} {surname}, {category}
        </p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <div className="page-block__contact-dots">
        <Link to={"/contact/change/" + _id}>
          <div className="page-block__contact-dots-block">
            <div className="page-block__contact-dots-block-item"></div>
            <div className="page-block__contact-dots-block-item"></div>
            <div className="page-block__contact-dots-block-item"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
