import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <button className={styles.btn}>Home</button>
            <button className={styles.btn}>Projects</button>
            <button className={styles.btn}>About Me</button>
            <button className={styles.btn}>Contact</button>
        </div>
    )
}
export default Navbar;