import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    function getClass({ isActive }) {
        return `${styles.btn} ${isActive ? styles.active : ""}`.trim();
    }

    return (
        <div className={styles.container}>
            <NavLink to="/" end className={getClass}>Home</NavLink>
            <NavLink to="/projects" className={getClass}>Projects</NavLink>

            {/* Convert these to real routes later */}
            <button className={styles.btn}>CV</button>
            <button className={styles.btn}>Transcript</button>
            <button className={styles.btn}>Contact</button>
        </div>
    );
};

export default Navbar;
