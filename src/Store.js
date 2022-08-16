
import { createStore } from "reactredux"
import rootReducer from "./Reducer/index";

const store = createStore(rootReducer);

export default store;