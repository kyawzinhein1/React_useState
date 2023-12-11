import React, { useState } from "react";
import Card from "./Card";

const FormBox = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      address.trim().length === 0
    ) {
      window.confirm("please fill all field !!!");
      return;
    }

    const userInfo = {
      name,
      email,
      address,
    };

    props.getUserInfo(userInfo);

    setName("");
    setEmail("");
    setAddress("");
  };
  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={handleName} />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} onChange={handleEmail} />
        </div>
        <div className="form-div">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="email"
            value={address}
            onChange={handleAddress}
          />
        </div>
        <button type="submit" className="btn">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default FormBox;
