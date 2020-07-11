import React, { useState, useCallback } from "react";

const useMessage = () => {
  const [result, setResult] = useState(null);
  const message = useCallback((flag, data = "") => {
    if (flag) {
      setResult(
        <div className="message_success">
          <p>
            {" "}
            <span aria-label="Emoji" role="img">
              🥳
            </span>{" "}
            Success
            <span aria-label="Emoji" role="img">
              🥳
            </span>
          </p>
        </div>
      );
    } else if (!flag) {
      setResult(
        <div className="message_error">
          <p>
            {" "}
            <span aria-label="Emoji" role="img">
              ❌
            </span>{" "}
            {data.result}{" "}
            <span aria-label="Emoji" role="img">
              ❌
            </span>
          </p>
          {data.errors.map((item, index, array) => {
            return (
              <h6 className="message_error-submessage" key={index}>
                {item.msg}
              </h6>
            );
          })}
        </div>
      );
    }
  }, []);

  return [result, message];
};

export default useMessage;
