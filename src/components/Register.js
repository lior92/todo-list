import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../featurs/usersSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  //States
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");
  //err massege
  const [err, setErr] = useState("");
  //Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Redux State
  const users = useSelector((state) => state.usersReducer.users);

  const users_first_name_array = [];

  for (let user of users) {
    users_first_name_array.push(user.first_name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //if name exist dont countinue
    if (users_first_name_array.includes(first_name)) {
      setErr("User exist");
    } else {
      //Basic Validation
      if (
        first_name != "" &&
        last_name != "" &&
        email != "" &&
        password != "" &&
        confirm_password != "" &&
        password == confirm_password
      ) {
        const user = {
          first_name,
          last_name,
          email,
          password,
          confirm_password,
        };
        dispatch(addUser(user));
        navigate(-1);
      } else {
        setErr("Detail not valid");
        setTimeout(() => {
          setErr("");
        }, 2000);
        setConfirm_Password("");
        setPassword("");
        setEmail("");
        setLast_name("");
        setFirst_name("");
      }
    }
  };

  return (
    <>
      <h1 className="h1 register_header">Register</h1>
      <p style={{ color: "red" }}>{err}</p>
      <form className="register_form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First name</label>
          <input
            className="form-control"
            required
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            type="text"
            id="first_name"
            placeholder="first name"
          />
        </div>
        <p id="p" style={{ display: "none" }}>
          ddd
        </p>
        <div className="form-group">
          <label htmlFor="last_name">Last name</label>
          <input
            className="form-control"
            required
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            type="text"
            id="last_name"
            placeholder="last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="user_email"
            placeholder="user email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            id="password"
            placeholder="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">confirm password</label>
          <input
            className="form-control"
            required
            value={confirm_password}
            onChange={(e) => setConfirm_Password(e.target.value)}
            type="text"
            id="confirm_password"
            placeholder="confirm password"
          />
        </div>
        <button className="btn btn-primary submit">Submit</button>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Back
        </button>
      </form>
    </>
  );
};

export default Register;
