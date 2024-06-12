import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer
});

export default store;