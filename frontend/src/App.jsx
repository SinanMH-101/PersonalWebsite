//import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./componenets/Heading";
import Project from "./componenets/HighlightedProjects";
import WorkExp from "./componenets/WorkExp";
import Main from "./pages/Main";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetaill from "./pages/ProjectDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<ProjectPage></ProjectPage>} />
      <Route path="/projects/:id" element = {<ProjectDetaill></ProjectDetaill>}></Route>
    </Routes>
  );
};

export default App;