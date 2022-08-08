import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import storage from "redux-persist/lib/storage";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import persistReducer from "redux-persist/es/persistReducer";
import rootSaga from "./saga";
import { middleware as thunkMiddleware } from "redux-saga-thunk";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunkMiddleware, sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export default store;

export type AppDispatch = typeof store.dispatch;
