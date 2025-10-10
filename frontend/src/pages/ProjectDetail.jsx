import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectCard from "../componenets/ProjectCard";

const ProjectDetaill = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setErr("");

    axios
      .get(`/api/projects/${id}`, { signal: controller.signal })
      .then((r) => {
        setProject(r.data);
        console.log("fetched:", r.data); // <-- log the fresh data
      })
      .catch((e) => {
        if (axios.isCancel?.(e)) return;
        setErr("Failed to load project");
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [id]);

  // Optional: log when state actually updates
  useEffect(() => {
    if (project) console.log("state updated:", project);
  }, [project]);

  if (loading) return <p style={{ color: "white" }}>Loading…</p>;
  if (err) return <p style={{ color: "white" }}>{err}</p>;
  if (!project) return <p style={{ color: "white" }}>Not found</p>;

  return (
    <div>
        <div style={{ color: "white", padding: 16 }}>
            <h1>{project.title}</h1>
            <img className = {"IMG"} src={`/${project.imgPath}`}></img>
            
            <p><strong>Short:</strong> {project.short_desc}</p>
            <p><strong>Details:</strong> {project.long_desc}</p>
        </div>

    </div>
  
  );
};

export default ProjectDetaill;
