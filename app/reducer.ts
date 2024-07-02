import { useReducer } from "react";

const initialState = { isFlipped: false };

interface State {
  isFlipped: boolean;
}

interface ToggleAction {
  type: "TOGGLE";
}

type Action = ToggleAction;

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, isFlipped: !state.isFlipped };
    default:
      return state;
  }
};