import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Schedule } from "./components/Schedule";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Schedule />} />
            <Route path="*" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
