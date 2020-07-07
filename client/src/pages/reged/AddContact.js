import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import helper from "../../helper";

const AddContact = ({ user }) => {
  const [info] = useState(user);
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("All");
  const [result, error, fetching] = helper.useFetch("api/post-contact", {
    author: info.email,
    name,
    surname,
    phone,
    email,
    category,
  });
  const [message, setMessage] = helper.useMessage();
  useEffect(() => {
    if (result) {
      setMessage(true);
      setTimeout(() => setFlag(true), 1000);
    } else if (error) {
      setMessage(false, error);
    }
  }, [result, error]);
  return (
    <div className="page_add-contact">
      {flag && <Redirect to="/" />}
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
        <select onChange={(e) => console.log(e.target.value)}>
          {info.categories.map((categories, index) => (
            <option key={index} value={categories}>{categories}</option>
          ))}
        </select>
      </div>
      <div className="page_add-contact_block-message">{message}</div>
      <div className="page_add-contact__button-bar">
        <button onClick={fetching}>Submit</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default AddContact;
