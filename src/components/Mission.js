import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteMission } from "../featurs/usersSlice";

const Mission = (props) => {
  //Hooks
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const { mission } = props;

  const toggleMark = (e) => {
    setToggle(!toggle);
    console.log(toggle);
    if (toggle == true) {
      e.parentNode.firstChild.style.textDecorationLine = "none";
    } else {
      e.parentNode.firstChild.style.textDecorationLine = "line-through";
    }
  };

  return (
    <div className={"mission"}>
      <h5>{mission.title}</h5>
      <p>{mission.content}</p>
      <button
        className="logo_btn delete"
        onClick={() => dispatch(deleteMission(mission.id))}
      >
        ❌
      </button>
      <button className="logo_btn done" onClick={(e) => toggleMark(e.target)}>
        ✅
      </button>
    </div>
  );
};

export default Mission;
