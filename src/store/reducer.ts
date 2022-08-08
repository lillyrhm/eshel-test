import * as React from 'react';
import { useReducer } from 'react';
import { Type } from 'typescript';
import * as actions from "./actionTypes";

export interface ActionType {
    payload: any,
    type: keyof typeof actions
}

export const initialState = {
    isShowSidebar: false
}

export default function reducer(state = initialState, action: ActionType) {
    switch (action.type) {
        case actions.OPEN_SIDEBAR:
            console.log("open: ", state.isShowSidebar)
            return {
                ...state,
                isShowSidebar: true
            }
        case actions.CLOSE_SIDEBAR:
            console.log("close: ", state.isShowSidebar)
            return {
                ...state,
                isShowSidebar: false
            }
        default: return state;
    }
}