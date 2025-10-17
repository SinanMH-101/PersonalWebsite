import Footer from "../componenets/Footer";
import Header from "../componenets/Heading";
import Project from "../componenets/HighlightedProjects";
import Navbar from "../componenets/Navbar";
import WorkExp from "../componenets/WorkExp";

const Main = () => {
  return (
    <div>
      <Header />

      <Project showAll={false} />
      <WorkExp />
      <Footer></Footer>
    </div>
  );
};

export default Main;
