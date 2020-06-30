import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./parts/Header";
import helper from "../../helper";

const Messages = ({ user }) => {
  const [info] = useState(user);
  const [messages, setMessages] = useState([]);
  const [sort, setSort] = useState("text");
  const [sortValue, setSortValue] = useState("desc");
  const [limit, setLimit] = useState();
  const [skip, setSkip] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("api/get-messages").then(({ data }) => setMessages(data.result));
  }, [info]);

  const handelChangeSort = (data) => {
    setSort(data);
  };
  const handleChangesetSortValue = (data) => {
    setSortValue(data);
  };
  const handleChangeLimit = (data) => {
    if (data.target.value >= 0) {
      setLimit(data.target.value);
    }
  };
  const handleChangeSkip = (data) => {
    if (data.target.value >= 0) {
      setSkip(data.target.value);
    }
  };
  const handleText = (data) => {
    setText(data.target.value);
  };

  const [result, error, fetching] = helper.useFetch("api/post-message", {
    text,
    author: info.displayName,
  });
  const [message, setMessage] = helper.useMessage();

  const handleSearch = () => {
    axios({
      method: "GET",
      url: "api/get-messages",
      headers: {
        sort,
        sortValue,
        limit: limit || 10,
        skip: skip || 0,
      },
    }).then(({ data }) => setMessages(data.result));
  };

  useEffect(() => {
    if (result) {
      handleSearch();
      setMessage(true, result);
    } else if (error) {
      setMessage(false, error);
    }
  }, [info, result, error]);

  return (
    <div className="regged-page">
      <Header />
      <div className="regged-page_body regged-page_block">
        <div className="regged-page_body_welcome-block">
          <h2>
            {" "}
            <span aria-label="Emoji" role="img">
              😏
            </span>{" "}
            Welcome, {info.displayName}, on this page you can work with
            messages.
          </h2>
        </div>
        <div className="regged-page_body_list">
          <div style={{ margin: 0 }} className="regged-page_body_list-item">
            <h2>You can get some messages or even add!</h2>
            <div className="regged-page_body_list-info">
              <div className="regged-page_body_list-radios">
                <form>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="text"
                        checked={sort === "text"}
                        onChange={() => handelChangeSort("text")}
                      />
                      <p>Text</p>
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="author"
                        checked={sort === "author"}
                        onChange={() => handelChangeSort("author")}
                      />
                      <p>Author</p>
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="addedAt"
                        checked={sort === "addedAt"}
                        onChange={() => handelChangeSort("addedAt")}
                      />
                      <p>AddedAt</p>
                    </label>
                  </div>
                </form>
                <form>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="asc"
                        checked={sortValue === "asc"}
                        onChange={() => handleChangesetSortValue("asc")}
                      />
                      <p>Asc</p>
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="desc"
                        checked={sortValue === "desc"}
                        onChange={() => handleChangesetSortValue("desc")}
                      />
                      <p>Desc</p>
                    </label>
                  </div>
                </form>
                <form>
                  <div className="number-input">
                    <label>
                      <input
                        type="number"
                        value={limit}
                        onChange={handleChangeLimit}
                      />
                      <p>Limit</p>
                    </label>
                  </div>
                  <div className="number-input">
                    <label>
                      <input
                        type="number"
                        value={skip}
                        onChange={handleChangeSkip}
                      />
                      <p>Skip</p>
                    </label>
                  </div>
                  <div className="input" onClick={handleSearch}>
                    Search
                  </div>
                </form>
              </div>
              <div className="regged-page_body_list-messages">
                {messages.map(({ text, author, deletedAt }, index, array) => {
                  if (!deletedAt)
                    return (
                      <div
                        key={index}
                        className="regged-page_body_list-message"
                      >
                        <p className="regged-page_body_list-message-text">
                          {text}
                        </p>{" "}
                        <p className="regged-page_body_list-message-author">
                          {author}
                        </p>{" "}
                      </div>
                    );
                })}
              </div>
              <div className="regged-page_body_list-messages-input">
                <input
                  placeholder="Enter text"
                  onChange={handleText}
                  type="text"
                  value={text}
                />
                <div
                  onClick={() => {
                    fetching();
                    setText("");
                  }}
                  className="regged-page_body_list-messages-submit"
                >
                  Submit
                </div>
              </div>
              <div className="regged-page_body_list-error-block">
                <div className="regged-page_body_list-error">{message}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
