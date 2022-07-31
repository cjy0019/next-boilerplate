import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import userSlice from './user/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

let initialRootState: RootState;

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    if (state === initialRootState) {
      return {
        ...state,
        ...action.payload,
      };
    }
    return state;
  }
  return rootReducer(state, action);
};

const createStore = () => {
  const store = configureStore({ reducer, devTools: process.env.NODE_ENV !== 'production' });
  initialRootState = store.getState();
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;

export const wrapper = createWrapper(createStore);
