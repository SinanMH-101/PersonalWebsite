// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

const barVariants = {
    rest: { height: 52, backgroundColor: "rgba(0,0,0,0.80)" },
    hover: { height: 150, backgroundColor: "rgba(0,0,0,0.55)" }
};

const ProjectCard = ({ title, short_desc, imgPath, slide }) => {
    if (slide == false) {
        return (
            <div>
                <motion.figure
                    className={styles.card}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"         // hover anywhere on the figure
                    whileFocus="hover"         // keyboard focus support (tab)
                    tabIndex={0}
                >
                    <img
                        className={styles.image}
                        src={`/${imgPath}`}
                        alt={title}
                    />
                    <figcaption className={styles.caption}>
                        <motion.div
                            className={styles.text}
                            variants={barVariants}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                        >
                            <h1 className={styles.cardTitle}>{title}</h1>
                            <p className={styles.desc}>{short_desc}</p>
                        </motion.div>
                    </figcaption>
                </motion.figure>
            </div>
        )
    }
    return (
        <div>
            <motion.figure
                className={styles.card}
                initial="rest"
                animate="rest"
                whileHover="hover"         // hover anywhere on the figure
                whileFocus="hover"         // keyboard focus support (tab)
                tabIndex={0}
            >
                <img
                    className={styles.image}
                    src={imgPath}
                    alt={title}
                />
                <figcaption className={styles.caption}>
                    <motion.div
                        className={styles.text}
                        variants={barVariants}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                        <h1 className={styles.cardTitle}>{title}</h1>
                        <p className={styles.desc}>{short_desc}</p>
                    </motion.div>
                </figcaption>
            </motion.figure>
        </div>
    );
};

export default ProjectCard;
