import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = ({ user }) => {
  const [info] = useState(user);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "api/get-contact",
      headers: { author: info.email },
    }).then(({ data }) => setContacts(data));
  }, [info]);
  return (
    <div className="page">
      <div className="page-block">
        {contacts.length > 0 ? (
          contacts.map(({ name, surname, phone }, index) => (
            <div key={index} className="page-block__contact">
              <div className="page-block__contact-pic"></div>
              <div className="page-block__contact-info">
                <p>
                  {name} {surname}
                </p>
                <p>{phone}</p>
              </div>
              <div className="page-block__contact-dots">
                <div className="page-block__contact-dots-block">
                  <div className="page-block__contact-dots-block-item"></div>
                  <div className="page-block__contact-dots-block-item"></div>
                  <div className="page-block__contact-dots-block-item"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="page-block__label">
            <Link to="/new-contact">Add new contact</Link>
          </h2>
        )}
      </div>
    </div>
  );
};

export default Main;
