import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./HighlightedProjects.module.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
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
                <Link to="/projects" className={styles.view}>
                    <span className={styles.linkText}>view all</span>
                    <FaArrowRightLong className={styles.icon} />
                </Link>

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
export default HighlightedProjects;
