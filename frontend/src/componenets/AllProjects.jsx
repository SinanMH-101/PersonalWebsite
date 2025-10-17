import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./AllProjects.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const AllProjects = ({ onLoadingChange }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let alive = true;
        axios.get("/api/projects")
            .then((r) => {
                if (!alive) return;
                setProjects(r.data);
            })
            .catch(() => {
            })
            .finally(() => onLoadingChange?.(false));

        return () => { alive = false; };
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <h2>All Projects: </h2>

            </div>

            <div className={styles.scroller}>
                {projects.map((p) => {
                    const techList = p.tech;
                    const pid = p.id || p._id; // support either shape
                    return (
                        <div className={styles.item} key={pid}>
                            <Link to={`/projects/${pid}`} className={styles.cardLink}>
                                <ProjectCard
                                    title={p.title}
                                    short_desc={p.short_desc}
                                    imgPath={p.imgPath}
                                    tech={techList}
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default AllProjects;
