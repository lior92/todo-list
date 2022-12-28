import React, { useState } from "react";
import TodoList from "./TodosList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMission } from "../featurs/usersSlice";

const UserPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //Hooks
  const { user_name } = useParams();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.usersReducer.users);
  //  const user_obj = users.find(user=>user.first_name == user_name)

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 1101);
    //creat obj to add to user_missions
    const user_missions = {
      id,
      user_name,
      title,
      content,
    };
    //case we refresh the page (now when we refresh we losing the users arry and the user_missions not relevant) ***after try to save on local mybe
    if (users.length > 0) {
      dispatch(addMission(user_missions));
    }
  };

  return (
    <>
      <h1 className="h1 user_page_header">{`Hello ${user_name.toUpperCase()}`}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            className="form-control"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            placeholder="title"
          />
        </div>
        <div className="form-outline textarea_part">
          <textarea
            maxLength="50"
            className="form-control"
            rows="2"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="task"
            placeholder="mission"
            style={{ resize: "none" }}
          ></textarea>
          <button className="btn btn-primary add_mission_btn">Add</button>
        </div>
      </form>
      <br />

      <TodoList user_name={user_name} />
    </>
  );
};

export default UserPage;
