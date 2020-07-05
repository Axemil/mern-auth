import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import helper from "../../helper";

const AddContact = ({ user }) => {
  const [info] = useState(user);
  const [flag, setFlag] = useState(false)
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
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
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Input name"
        />
      </label>
      <label>
        Surname:
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Input surname"
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Input phone"
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Input email"
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Input category"
        />
      </label>
      {message}
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
