import React, { useState } from "react";
import Styles from "./Xlogin.module.css";

const Xlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const handleSubmit = (e) => {
    const form = e.target.closest("form");
    if (!form.checkValidity()) {
      form.reportValidity();
    } else {
      e.preventDefault();
      if (username === "user" && password === "password") {
        setIsCorrect(true);
      } else {
        setIsWrong(true);
      }
      console.log("Form submitted");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {isCorrect ? (
        <div>
          <h3>Welcome, user!</h3>
        </div>
      ) : (
        <>
          {isWrong && (
            <div className={Styles.error}>Invalid username or password</div>
          )}
          <form action="" className={Styles.form}>
            <div className={Styles.labelCont}>
              <label htmlFor="">Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
              <label htmlFor="">Password:</label>
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Xlogin;
