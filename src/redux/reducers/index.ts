import { type } from "node:os";
import { combineReducers } from "redux";
import { repositoriesReducer } from "../reducers/repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
