import React from "react";
import { StatusBar } from "react-native";
import Routes from "./routes";

export default function App() {
  return (
    <>
      <StatusBar barStyles="dark-content" backgroundColor="#312e38" />
      <Routes />
    </>
  );
}
