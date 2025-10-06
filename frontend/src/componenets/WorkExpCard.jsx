import styles from "./WorkExpCard.module.css";

const WorkExpCard = ({ role, company, duration, responsibilities = [] }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.role}>{role}</h3>
            <p className={styles.subtext}>
                {company}{company && duration ? "  •  " : ""}{duration}
            </p>

            {responsibilities.length > 0 && (
                <ul className={styles.resp}>
                    {responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WorkExpCard;