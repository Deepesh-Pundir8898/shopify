import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  filteredUsers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    filterUsers: (state, action) => {
      if (action.payload === "all") {
        state.filteredUsers = state.users;
      } else {
        state.filteredUsers = state.users.filter(
          (user) => user.gender === action.payload
        );
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(
        (user) => user.login.uuid !== action.payload
      );
      state.filteredUsers = state.filteredUsers.filter(
        (user) => user.login.uuid !== action.payload
      );
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.login.uuid === action.payload.id
      );
      state.users[index] = { ...state.users[index], ...action.payload.data };
      state.filteredUsers = state.users;
    },
  },
});

export const { setUsers, filterUsers, deleteUser, updateUser } =
  userSlice.actions;
export default userSlice.reducer;
