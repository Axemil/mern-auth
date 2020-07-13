import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import helper from "../../helper";
import axios from "axios";
import Header from "./parts/Header";
import Loader from "./parts/Loader";

const FormContact = () => {
  //Для редиректов
  const history = useHistory();
  //Инфа юзера
  const [info, setInfo] = useState("");
  //Состояние проверки токена
  const [flag, setFlag] = useState(null);
  //Id контакта
  let { userId } = useParams();
  //Флаг для взаимодействия с текущим контактом
  const [view, setView] = useState(false);

  //Информация контакта
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("All");

  //Постит новый контакт
  const [result, error, fetching] = helper.useFetch(
    "http://localhost:3000/api/post-contact",
    {
      author: info.email,
      name,
      surname,
      phone,
      email,
      category,
    }
  );

  const [updateResult, updateError, updateFetching] = helper.useUpdate("http://localhost:3000/api/update-contact", {
    id: userId,
    author: info.email,
    name,
    surname,
    phone,
    email,
    category,
  })

  const deleteContact = () => {
    axios.delete("http://localhost:3000/api/delete-contact", {
      data: {
        userId
      }
    }).then(() => {
      history.push("/")
    })
  }



  const [message, setMessage] = helper.useMessage();

  useEffect(() => {
    //Блок для изменения контакта
    if (userId) {
      axios
        .post("http://localhost:3000/api/get-one-contact", {
          userId,
        })
        .then(({ data }) => {
          if (data.error) {
            setName("");
            setSurname("");
            setPhone("");
            setEmail("");
            setCategory("All");
            setView(false);
          } else {
            setName(data.name);
            setSurname(data.surname);
            setPhone(data.phone);
            setEmail(data.email);
            setCategory(data.category);
            setView(true);
          }
        });
    } else {
      setName("");
      setSurname("");
      setPhone("");
      setEmail("");
      setCategory("All");
      setView(false);
    }

    //Проверка на логин
    axios
      .get("http://localhost:3000/api/check", {
        headers: { "x-auth-token": localStorage.getItem("token") },
      })
      .then(({ data }) => {
        if (data.login === true) {
          setInfo(data.user);
          setFlag(true);
        } else setFlag(false);
      });

    if (result || updateResult) {
      setMessage(true);
      setTimeout(() => history.push("/"), 1000);
    } else if (error || updateError) {
      setMessage(false, error || updateError);
    }
  }, [updateResult, updateError, result, error, userId, setMessage, history]);


  if (flag !== null) {
    if (flag === true)
      return (
        <div className="main">
          <div className="main_page">
            <Header info={info} label="Work with contact" dots />
            <div className="page_back">
              <div className="page_add-contact">
                <div className="page_add-contact-item">
                  <label>Name:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Input name"
                  />
                </div>
                <div className="page_add-contact-item">
                  <label>Surname:</label>
                  <input
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder="Input surname"
                  />
                </div>
                <div className="page_add-contact-item">
                  <label>Phone:</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Input phone"
                  />
                </div>
                <div className="page_add-contact-item">
                  <label>Email:</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Input email"
                  />
                </div>
                <div className="page_add-contact-item">
                  <label>Category:</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {info.categories.map((categories, index) => (
                      <option key={index} value={categories}>
                        {categories}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="page_add-contact_block-message">{message}</div>
                <div className="page_add-contact__button-bar">
                  <button
                    onClick={() => {
                      if (!view) fetching();
                      else updateFetching();
                    }}
                  >
                    {view ? "Edit" : "Add contact"}
                  </button>
                  <Link to="/">
                    <button>Cancel</button>
                  </Link>
                  {view && <button onClick={deleteContact}>Delete</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    else if (flag === false) {
      return <Redirect to="/login" />;
    }
  } else
    return <Loader />
};

export default FormContact;
