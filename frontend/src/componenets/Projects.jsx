import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/projects")
            .then((r) => r.json())
            .then(setProjects);
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
