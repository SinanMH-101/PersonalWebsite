//import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./componenets/Heading";
import Project from "./componenets/Projects";
import WorkExp from "./componenets/WorkExp";
import Main from "./pages/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<Project />} />
    </Routes>
  );
};

export default App;