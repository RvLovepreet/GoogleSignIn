import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: { id: '', familyName: '', givenName: '', email: '', name: '' },
  reducers: {
    addKey: (state, action) => {
      console.log(action.payload, 'hello in add key');
      console.log(state, 'hello in add key');
      state = action.payload;
      return state;
    },
    removeKey: (state, action) => {
      console.log(state, 'hello');
      state = action.payload;
      return state;
    },
  },
});
export const { addKey, removeKey, addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
