import "./Heading.css";
import Navbar from "./Navbar";

const Heading = () => (
    <div>
        <div className="heading-container">
            <h1 className="heading-title">Sinan Mustanjid Haque</h1>
            <ul className="heading-list">
                <li>CV</li>
                <li>Transcript</li>
                <li>LinkedIn</li>
                <li>Github</li>
            </ul>

        </div>
        <Navbar></Navbar>
    </div>
);

export default Heading;
