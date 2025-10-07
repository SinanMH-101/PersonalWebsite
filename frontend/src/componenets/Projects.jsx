import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import axios from "axios";

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let alive = true;
        axios
            .get("/api/projects")
            .then((r) => { if (alive) setProjects(r.data); })

        return () => { alive = false; };
    }, []);

    return (
        <div className={styles.container}>
            <h2>Highlighted Projects: </h2>
            <div className={styles.scroller}>
                {projects.map((p) => (
                    <div className={styles.item} key={p.id}>
                        <ProjectCard title={p.title} short_desc={p.short_desc} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Project;
