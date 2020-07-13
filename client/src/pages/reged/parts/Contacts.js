import React from "react";
import { Link, useLocation } from "react-router-dom";
import Contact from "./Contact";

const Contacts = ({ contacts, filter }) => {
  const location = useLocation();
  if (!contacts.length)
    return (
      <div className="page-block">
        <h2 className="page-block__label">
          <Link to="/contact/new-contact">Add new contact</Link>
        </h2>
      </div>
    );
  return (
    <div className="page-block">
      {contacts.map(({ name, surname, phone, category, _id, email }, index) => {
        const contact = (
          <Contact
            key={index}
            name={name}
            surname={surname}
            phone={phone}
            category={category}
            _id={_id}
            email={email}
          />
        );
        if (filter === category) return contact;
        else if (location.pathname === "/") return contact;
      })}
    </div>
  );
};

export default Contacts;
