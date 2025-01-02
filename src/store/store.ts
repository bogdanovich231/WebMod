import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
