import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  //err massege
  const [err, setErr] = useState("");

  //Hooks
  const navigate = useNavigate();
  //Users from state
  const users = useSelector((state) => state.usersReducer.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(users).length > 0) {
      users.map((user) => {
        if (
          user.first_name == name &&
          user.password == password &&
          name != "" &&
          password != ""
        ) {
          navigate(`user_page/${name}`);
        } else {
          setErr("User not exsist");
          setPassword("");
          setName("");
        }
      });
    } else {
      setErr("User not exsist");
      setPassword("");
      setName("");
    }
  };

  return (
    <>
      <p className="h1 login">Login</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">User Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Type your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            id="password"
            className="form-control"
            placeholder="Type your password"
          />
        </div>
        <button className="btn btn-primary">Enter</button>
        <button
          onClick={() => navigate("register")}
          className="btn btn-primary register"
        >
          Register
        </button>

        <p style={{ color: "red" }}>{err}</p>
        <hr />
      </form>
    </>
  );
};

export default Login;
