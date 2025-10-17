import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectCard from "../componenets/ProjectCard";
import { ProjectHeading } from "../componenets/Heading";
import styles from "./ProjectDetail.module.css"
import TechList from "../componenets/TexhList";
import { PageData } from "../../utils/PageData";

const ProjectDetaill = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  const hasValue = (s) => typeof s === "string" && s.trim().length > 0;

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

    <div className={styles.topcontainer}>
      <ProjectHeading title={project.title}></ProjectHeading>
      <div className={styles.container}>
        <div className={styles.card} style={{ width: "350px" }}>
        </div>
        <div className={styles.desc}>
          <h2>{project.short_desc}</h2>
          <TechList tech={project?.tech} size={20} />


          {hasValue(project.git) && (
            <p>
              GitHub:{" "}
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.git}
              </a>
            </p>
          )}

          {hasValue(project.link) && (
            <p>
              Live:{" "}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site
              </a>
            </p>
          )}

          <div
            className={styles.extraHtml}
            dangerouslySetInnerHTML={{ __html: PageData[project.title] }}
          >
          </div>


        </div>

      </div>

    </div>

  );
};

export default ProjectDetaill;
