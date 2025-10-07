import Header from "../componenets/Heading";
import Navbar from "../componenets/Navbar";
import Project from "../componenets/HighlightedProjects";
import WorkExp from "../componenets/WorkExp";

const Main = () => {
  return (
    <div>
      <Header />
      <Project showAll={false} />
      <WorkExp />
    </div>
  );
};

export default Main;
