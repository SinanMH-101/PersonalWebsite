import { Link, NavLink } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
    function getClass({ isActive }) {
        return `${styles.btn} ${isActive ? styles.active : ""}`.trim();
    }

    return (
        <div className={styles.container}>
            <NavLink to="/" end className={getClass}>Home</NavLink>
            <NavLink to="/projects" className={getClass}>Projects</NavLink>
            <NavLink to="/contact" className={getClass}>Contact</NavLink>
             

   
            <Link to="/files/Sinan Haque CV.pdf" target="_blank" download>
                <button className={styles.btn}>
                    <div className={styles.dwn}>
                        <FaFileDownload /> CV
                    </div>
                </button>
            </Link>

            <Link to="/files/Transcript-Sinan.pdf" target="_blank" download>
                <button className={styles.btn}>
                    <div className={styles.dwn}>
                        <FaFileDownload /> Transcript
                    </div>
                </button>


            </Link>

           
        </div>
    );
};

export default Navbar;
