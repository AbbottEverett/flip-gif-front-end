import { combineReducers } from 'redux';
import {
    BRUSH_COLOR_SET, 
    ERASER_COLOR_SET,
    SELECTED_TOOL_SET
} from '../actions/actionTypes';

function brushColor(state = { r: 0, g: 0, b: 0}, action) {
    switch(action.type) {
        case BRUSH_COLOR_SET: {
            return action.brushColor;
        }
        default: {
            return state;
        }
    }
}

function eraserColor(state = { r: 255, g: 255, b: 255}, action) {
    switch(action.type) {
        case ERASER_COLOR_SET: {
            return action.eraserColor;
        }
        default: {
            return state;
        }
    }
}

function selectedTool(state = null, action) {
    switch(action.type) {
        case SELECTED_TOOL_SET: {
            if (state === action.toolName) return null;
            return action.toolName;
        }
        default: {
            return state;
        }
    }
} 

export default combineReducers({
    brushColor,
    eraserColor,
    selectedTool
});