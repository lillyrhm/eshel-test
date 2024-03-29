import * as React from 'react';
import { Provider } from 'react-redux';
import store from "./store/stor";
import AppRouter from "./AppRouter";

export default function App(): JSX.Element {

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
