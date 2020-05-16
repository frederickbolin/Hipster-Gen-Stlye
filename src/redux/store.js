import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from "redux-thunk";

import rootReducer from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
// This middleware scope helps me in production stage side not for users to see the developer log/tools middlewares(URL search). But for the developer side It should show the development logs and tools(npm or yarn start). Writing process.env.NODE_ENV helps recognize rather its in production or development stage in order to render the Logs/Tools.

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistStore };
