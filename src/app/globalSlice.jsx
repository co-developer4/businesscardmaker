import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        backgroundColor: '',
        recommendColors: [],
    },
    reducers: {
        init : (state, action) => {
            if(action.payload?.backgroundColor)state.backgroundColor = action.payload.backgroundColor;
            if(action.payload?.recommendColors)state.recommendColors = action.payload.recommendColors;
        },
        updateBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload
        },
        addRecommendColor: (state, action) => {
            state.recommendColors.push(action.payload)
        }
    }
})

export const { init, updateBackgroundColor, addRecommendColor } = globalSlice.actions;

export default globalSlice.reducer;