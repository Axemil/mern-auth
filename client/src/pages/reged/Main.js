import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Link,
  Route,
  Redirect,
  useParams,
  useLocation,
} from "react-router-dom";
import Header from "../reged/parts/Header";

const Main = () => {
  const [info, setInfo] = useState();
  const [flag, setFlag] = useState(null);
  const [contacts, setContacts] = useState([]);
  let { filter } = useParams();
  let location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("token").length > 0) {
      axios
        .get("http://localhost:3000/api/check", {
          headers: { "x-auth-token": localStorage.getItem("token") },
        })
        .then(({ data }) => {
          if (data.login === true) {
            setInfo(data.user);
            setFlag(data.login);
            axios({
              method: "get",
              url: "http://localhost:3000/api/get-contact",
              headers: { author: data.user.email },
            }).then(({ data }) => setContacts(data));
          } else {
            setFlag(false);
          }
        });
    } else setFlag(false);
  }, [Main, filter, location]);

  if (flag !== null) {
    if (flag === true) {
      return (
        <div className="main">
          <div className="main_page">
            <Header info={info} label={"Contacts"} dots />
            <div className="page">
              <div className="page-block">
                {contacts.length > 0 ? (
                  contacts.map(({ name, surname, phone, category, _id }) => {
                    const contact = (
                      <div key={_id} className="page-block__contact">
                        <div className="page-block__contact-pic"></div>
                        <div className="page-block__contact-info">
                          <p>
                            {name} {surname}, {category}
                          </p>
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
                    if (filter === category) return contact;
                    else if (location.pathname === "/") return contact;
                  })
                ) : (
                  <h2 className="page-block__label">
                    <Link to="/contact/new-contact">Add new contact</Link>
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (flag === false) {
      return <Redirect to="/login" />;
    }
  } else
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

export default Main;
