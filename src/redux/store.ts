import { createStore, Store } from "redux";
import rootReducer, { RootState } from "./rootReducer";

const store: Store<RootState> = createStore(
  rootReducer
);

export default store;
