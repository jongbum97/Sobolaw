import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/user/userSlice";
import sessionStorage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const reducers = combineReducers({
  user: userReducer,
});

// 세션 스토리지에 redux 저장하기 위한 설정, blacklist에는 저장하지 않을 reducer, whitelist에는 저장할 reducer를 넣는다.
const persistConfig = {
  key: "root",
  storage: sessionStorage,
  blacklist: [],
};

// redux store 생성
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// redux store에 persist 적용
const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
