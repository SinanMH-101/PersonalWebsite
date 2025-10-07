import "./Heading.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Navbar from "./Navbar";

const Heading = () => (
    <div>
        <div className="heading-container">
            <h1 className="heading-title">Sinan Haque</h1>
            <div className="heading-list">
                <a className="icon" href="https://github.com/SinanMH-101" target="_blank" ><FaGithub /></a>
                <a  className="icon" href="https://www.linkedin.com/in/sinanhaque/" target="_blank"><FaLinkedin /></a>

            </div>

        </div>
        <Navbar></Navbar>
    </div>
);

export default Heading;
