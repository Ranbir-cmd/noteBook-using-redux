import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import note_reducer from "./reducers/notes.reducer";

export const store = createStore(note_reducer, composeWithDevTools());
