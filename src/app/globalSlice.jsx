import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        backgroundColor: '',
        recommendColors: [],
        textComponents: [],
        countTextComponents: 0,
        curTextComponent: undefined,
        textMinLayer: 0,
        textMaxLayer: 0
    },
    reducers: {
        init : (state, action) => {
            if(action.payload?.backgroundColor) state.backgroundColor = action.payload.backgroundColor;
            if(action.payload?.recommendColors) state.recommendColors = action.payload.recommendColors;
            if(action.payload?.textComponents) state.textComponents = action.payload.textComponents;
            if(action.payload?.curTextComponent) state.curTextComponent = action.payload.curTextComponent;
            if(action.payload?.textMinLayer) state.textMinLayer = action.payload.textMinLayer;
            if(action.payload?.textMaxLayer) state.textMaxLayer = action.payload.textMaxLayer;
            state.countTextComponents = state.textComponents.length;
        },
        updateBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload
        },
        addRecommendColor: (state, action) => {
            state.recommendColors.push(action.payload)
        },
        addTextComponent: (state, action) => {
            state.textComponents.push(action.payload)
        },
        setTextMaxLayer: (state, action) => {
            state.textMaxLayer = action.payload
        },
        setCurTextComponent: (state, action) => {
            state.curTextComponent = action.payload
        },
        setCurTextComponentPos: (state, action) => {
            state.textComponents[ action.payload.index ].left = action.payload.xPos + "px";
            state.textComponents[ action.payload.index ].top = action.payload.yPos + "px";
        },
        setCurTextComponentSize: (state, action) => {
            state.textComponents[ action.payload.index ].left = action.payload.xPos;
            state.textComponents[ action.payload.index ].top = action.payload.yPos;
            state.textComponents[ action.payload.index ].width = action.payload.diagramWidth;
            state.textComponents[ action.payload.index ].height = action.payload.diagramHeight;
        }
    }
})

export const { init, updateBackgroundColor, addRecommendColor, addTextComponent, setTextMaxLayer, setCurTextComponent, setCurTextComponentPos, setCurTextComponentSize } = globalSlice.actions;

export default globalSlice.reducer;