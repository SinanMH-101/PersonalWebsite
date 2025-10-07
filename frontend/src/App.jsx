//import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./componenets/Heading";
import Project from "./componenets/HighlightedProjects";
import WorkExp from "./componenets/WorkExp";
import Main from "./pages/Main";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<ProjectPage></ProjectPage>} />
    </Routes>
  );
};

export default App;