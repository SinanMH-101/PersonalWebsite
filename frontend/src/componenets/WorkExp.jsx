import WorkExpCard from "./WorkExpCard";
import axios from "axios"
import style from "./WorkExp.module.css"
import { useEffect, useState } from "react";
const WorkExp = () => {

    const [data, setData] = useState([]);
    const [err, setErr] = useState([]);

    useEffect(() => {
        let alive = true;
        axios
            .get("api/workexp")
            .then((r) => { if (alive) setData(r.data); })
            .catch(() => { if (alive) setErr("Failed to load work experience"); });
        return () => { alive = false; };
    }, []);


    return (
        <div className={style.container}>
            <h2>Work Experience: </h2>
            {err && <p className={style.error}>{err}</p>}
            {data.map((x) => (
                <div className={style.item} key={x.id}>
                    <WorkExpCard
                        role={x.role}
                        company={x.company}
                        duration={x.duration}
                        responsibilities={x.responsibilities}>
                    </WorkExpCard>
                </div>
            ))}

        </div>
    )
}

export default WorkExp;