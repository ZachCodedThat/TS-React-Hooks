import { useReducer } from "react";

const initalState = {
  counter: 100,
};

// these Action types will be used as the second argument within the counterReducer funtion that takes, [state, action] which allows us to package the diffrent
//  state changes within one function call using the switch. Additonally with TS it takes guess work out when writing the various cases because intelsense picks up
//  the proper variables needed at certain positions in the function.

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function counterReducer(state: typeof initalState, action: ACTIONTYPES) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      throw new Error("bad action");
  }
}

// This is the main component that renders the stored initalValue of the counter to the screen
//
// useReducer takes the initalState and returns state and the reducer function and returns dispatch that is used to
// two buttons are rendered with a onClick() which is passed a call back function that fires the coorosponding dispatch which

function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initalState);

  return (
    <div>
      <div>{state.counter}</div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              payload: 10,
            })
          }
        >
          increment
        </button>
        |
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              payload: 5,
            })
          }
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default UseReducerComponent;
