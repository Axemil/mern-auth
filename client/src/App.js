import React, { useState } from "react";
import Routes from "./routes";
import helper from "./helper";




function App() {
  const postData = helper.useCheck()
  const [, setUser] = useState(null)
  const login = (info) => {
    postData("api/check", info.token).then((data) => {
      data.login === true ? localStorage.setItem('token', info.token) : localStorage.setItem('token', false)
    });
    setUser(info.user)
  };
  return (
    <div className="App">
      <Routes login={login}/>
    </div>
  );
}

export default App;
