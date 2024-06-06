import { createSlice } from '@reduxjs/toolkit';

const initStateUser = {
    dataUser: [],
    dataLogin: [],
    isAuth: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initStateUser,
    reducers: {
        registerUser: (state, action) => {
            const data = action.payload;

            if (Array.isArray(state.dataUser)) {
                state.dataUser.push(data);
            } else {
                state.dataUser = [data];
            }
        },

        // setUser: (state, action) => {
        //     const data = action.payload;
        //     if (Array.isArray(state.dataUser)) {
        //         state.dataUser.push(data);
        //     } else {
        //         state.dataUser = [data];
        //     }
        // },
    },
});

export const { setUser, registerUser } = userSlice.actions;
export default userSlice.reducer;
