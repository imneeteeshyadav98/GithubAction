import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "redux/slices/user";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: [],
};

const userConfig = {
  key: "user",
  storage: storage,
};

const rootReducer = combineReducers({
  routing: routerReducer,
  user: persistReducer(userConfig, user),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default persistedReducer;
