"use client";

import { store } from "../app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

interface ReduxProvider {
  children: React.ReactNode;
}

let persistor = persistStore(store);

export const ReduxProvider = ({ children }: ReduxProvider) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
