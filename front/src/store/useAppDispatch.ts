import { configureAppStore } from "./index";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export type AppDispatch = ReturnType<typeof configureAppStore>["dispatch"];
export const useAppDispatch = (...args: Parameters<typeof useDispatch>) =>
  useDispatch<AppDispatch>();
