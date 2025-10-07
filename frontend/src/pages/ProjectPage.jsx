import Heading from "../componenets/Heading";
import AllProjects from "../componenets/AllProjects";
import { useState } from "react";

const ProjectPage = () => {
    const [loading, setLoading] = useState(true);


    return (
        <div style={{ position: "relative" }}>
            <Heading />
            <AllProjects onLoadingChange={setLoading} />

            {loading && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.4)",
                        display: "grid",
                        placeItems: "center",
                        zIndex: 9999,
                    }}
                >
                    <p style={{ color: "white" }}>Loading…</p>
                </div>
            )}
        </div>


    )

}
export default ProjectPage