import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      first_name: "manager",
      last_name: "admin123",
      email: "lasaaaa@gmail.com",
      password: "234232342342342",
      confirm_password: "234232342342342",
    },
  ],
  users_missions: [],
  marked_mission: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    addMission: (state, action) => {
      state.users_missions = [...state.users_missions, action.payload];
    },
    deleteMission: (state, action) => {
      state.users_missions = state.users_missions.filter(
        (mission) => mission.id != action.payload
      );
    },

  },
});

export const { addUser, addMission, deleteMission } =
  userSlice.actions;
export default userSlice.reducer;
