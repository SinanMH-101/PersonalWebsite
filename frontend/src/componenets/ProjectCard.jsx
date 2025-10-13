// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import TechList from "./TexhList";

const barVariants = {
    rest: { height: 70, backgroundColor: "rgba(0,0,0,0.80)" },
    hover: { height: 150, backgroundColor: "rgba(0,0,0,0.80)" }
};

const ProjectCard = ({ title, short_desc, imgPath, slide, tech = [] }) => {
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
                            <TechList tech={tech} size={10}></TechList>
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
                        <div className={styles.techBar}>
                            <TechList tech={tech} size={15}></TechList>
                        </div>
                        
                        <p className={styles.desc}>{short_desc}</p>
                    </motion.div>
                </figcaption>
            </motion.figure>
        </div>
    );
};

export default ProjectCard;
