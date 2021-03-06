import { createContext } from "react";

const initialState = {
  first: "Zach",
  last: "Przybilski",
  age: 30,
};

export type UserState = typeof initialState;
// createContext by default takes the default value passed to it and makes it the state in this case it's
// initalState. For clarity I have passed it the typeof "initialState" which sets the type explicitly to the initalState object which will check against anything that is passed in to useContext.
const context = createContext<typeof initialState>(initialState);

export default context;
