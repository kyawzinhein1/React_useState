import React, { useState } from "react";
import Form from "./FormBox";
import List from "./List";

const Main = () => {
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = (userInfoObj) => {
    setUserInfo([...userInfo, userInfoObj])
  };

  return (
    <div>
      <section className="main">
        <Form getUserInfo = {getUserInfo} />
        <List userInfo = {userInfo} />
      </section>
    </div>
  );
};

export default Main;
