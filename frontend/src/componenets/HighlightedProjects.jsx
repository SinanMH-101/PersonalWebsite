import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./HighlightedProjects.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const HighlightedProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let alive = true;
        axios.get("/api/projects")
            .then((r) => {
                if (!alive) return;
                const highlighted = r.data.filter(p => p.highlighted === true);
                setProjects(highlighted);


            })
        return () => { alive = false; };
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <h2>Highlighted Projects: </h2>
                <Link
                    to={`/projects`}
                >
                    <p className={styles.link}>View All</p>
                </Link>

            </div>

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
export default HighlightedProjects;
