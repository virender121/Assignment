import { createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducer: {
        addUser : (state, action) => {
            state.push(action.payload);
        },
    },
});

export const {addUser} = registrationSlice.actions;
export default registrationSlice.reducer;