import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teams from "../components/Teams";
import Members from "../components/Members";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="team/:teamId" element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
