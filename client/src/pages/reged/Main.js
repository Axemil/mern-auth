import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Link,
  Redirect,
  useParams,
  useLocation,
} from "react-router-dom";
import Header from "../reged/parts/Header";
import Contacts from "./parts/Contacts";
import Loader from "./parts/Loader";

const Main = () => {
  //Инфа юзера
  const [info, setInfo] = useState();
  //Обработка состояния токена
  const [flag, setFlag] = useState(null);
  //Массив контактов
  const [contacts, setContacts] = useState([]);
  //Филтер контактов взятый из параметра URL
  let { filter } = useParams();
  //Получение URL
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
  }, [ filter, location]);

  if (flag !== null) {
    if (flag === true) {
      return (
        <div className="main">
          <div className="main_page">
            <Header info={info} label={"Contacts"} dots />
            <div className="page">
              <Contacts contacts={contacts} filter={filter} />
            </div>
          </div>
        </div>
      );
    } else if (flag === false) {
      return <Redirect to="/login" />;
    }
  } else
    return <Loader />
};

export default Main;
