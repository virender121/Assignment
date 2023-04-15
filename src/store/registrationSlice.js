import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: JSON.parse(localStorage.getItem('users') || '[]'),
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      state.users.push(user);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    setUserLoggedIn: (state, action) => {
      const { email } = action.payload;
      const userIndex = state.users.findIndex(user => user.email === email);
      if (userIndex !== -1) {
        state.users[userIndex].isLoggedIn = true;
        localStorage.setItem('users', JSON.stringify(state.users));
      }
    },
  },
});

export const { addUser, setUserLoggedIn } = registrationSlice.actions;
export default registrationSlice.reducer;



// export const registrationSlice = createSlice({
//   name: 'registration',
//   initialState,
//   reducers: {
//     addUser: (state, action) => {
//       state.push(action.payload);
//     },
//     setUserLoggedIn: (state, action) => {
//       const { email } = action.payload;
//       const userIndex = state.findIndex(user => user.email === email);
//       if (userIndex !== -1) {
//         state[userIndex].isLoggedIn = true;
//       }
//     },
//   },
// });

// export const { addUser, setUserLoggedIn } = registrationSlice.actions;
// export default registrationSlice.reducer;
