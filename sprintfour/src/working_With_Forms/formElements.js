import React from "react";
import { useState, useEffect } from "react";
import "./formElements.css";

export function FormElement() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [datas, setDatas] = useState("");

  const saveDataInJson = (e) => {
    e.preventDefault();

    setDatas([
      ...datas,
      {
        firstName: name.firstName,
        lastName: name.lastName,
        email: email,
        password: password,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(...datas));
  }, [datas]);

  return (
    <div className="formElements">
      <h1>Form Elements</h1>
      <form onSubmit={saveDataInJson}>
        <label>First Name</label>
        <input
          type={"text"}
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          required
        />
        <label>Last Name</label>
        <input
          type={"text"}
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          required
        />
        <br />
        <label>Email Id</label>
        <input
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <lable>Password</lable>
        <input
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
}
