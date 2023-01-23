import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Schedule } from "./components/Schedule";
import { ShowDetails } from "./components/ShowDetails";

function App() {
  const [header, setHeader] = useState("TV Schedule");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout header={header} />}>
            <Route index element={<Schedule setHeader={setHeader} />} />
            <Route
              path="/show/:showId"
              element={<ShowDetails setHeader={setHeader} />}
            />
            <Route path="*" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
