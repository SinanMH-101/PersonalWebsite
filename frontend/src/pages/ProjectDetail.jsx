import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectCard from "../componenets/ProjectCard";
import { ProjectHeading } from "../componenets/Heading";
import styles from "./ProjectDetail.module.css"

const ProjectDetaill = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  //to-do:
  // add a back button
  // resize image

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
      <ProjectHeading title={project.title}></ProjectHeading>
      <div className={styles.container}>
        <div className={styles.card} style={{ width: "350px" }}>
          {/* <ProjectCard
            title={project.title}
            short_desc={project.short_desc}
            imgPath={project.imgPath}
            slide={false}
          /> */}


        </div>
        <div className={styles.desc}>
          <h2>{project.short_desc}</h2>
          <p>{project.tech}</p>
          <p>Github: {project.git}</p>
          <p>Link: {project.link}</p>
          <p><strong>Details:</strong> {project.long_desc}</p>
        </div>

      </div>

    </div>

  );
};

export default ProjectDetaill;
