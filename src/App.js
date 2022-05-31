import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store"
import AppRouter from "./AppRouter";

export default function App() {

  return (
    <Provider store={store}>
      {console.log(store)}
      <AppRouter />
    </Provider>
  );
} 
 