import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalActive : false
}

const modalSlice = createSlice({
    name:'slice',
    initialState,
    reducers : {
        close(state){
            state.isModalActive = false;
        },
        open(state){
            state.isModalActive = true;
        },
        toggle(state){
            state.isModalActive = !state.isModalActive;
        }
    }
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;