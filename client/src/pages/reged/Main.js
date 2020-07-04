import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./parts/Header";
import AsideMenu from "./parts/AsideMenu"


const Main = ({ user }) => {
  const [info] = useState(user);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("api/get-messages").then(({ data }) => setMessages(data.result));
  }, [info]);

  return (
    <div className="main">
      <AsideMenu info={info}/>
      <div className="main_page">
        <Header />
      </div>
      
      
    </div>
  );
};

export default Main;
