import React from "react";
import { useSelector } from "react-redux";
import Mission from "./Mission";

const TodosList = (props) => {
  const { user_name } = props;

  //All users missions from state
  const users_missions = useSelector(
    (state) => state.usersReducer.users_missions
  );
  let display_missions = "";


  display_missions = users_missions.map((mission, index) => {
    // console.log(mission.user_name)
    if (mission.user_name == user_name) {
      return <Mission key={index} mission={mission} />;
    }
  });

  return <div className="mission_wrapper">{display_missions}</div>;
};

export default TodosList;
