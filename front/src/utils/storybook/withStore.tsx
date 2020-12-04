import { configureAppStore } from "../../store";
import { Provider } from "react-redux";
import React, { ReactNode } from "react";

export const withStore = (...args: Parameters<typeof configureAppStore>) => (
  Story
) => () => {
  const store = configureAppStore(...args);
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};
