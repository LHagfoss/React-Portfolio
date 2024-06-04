import MainContent from "../components/MainContent";
import FrameComponent2 from "../components/FrameComponent2";
import Insights from "../components/Insights";
import FrameComponent1 from "../components/FrameComponent1";
import ExperienceBlock from "../components/ExperienceBlock";
import FrameComponent from "../components/FrameComponent";
import "./Width.css";

const Width = () => {
  return (
    <div className="width">
      <div className="backroundcolor1" />
      <img className="width-child" alt="" src="/rectangle-2@2x.png" />
      <MainContent />
      <FrameComponent2 />
      <section className="projects">
        <h1 className="worked-with">
          <span className="worked-with-txt-container">
            <span>{`Worked `}</span>
            <span className="with">with:</span>
          </span>
        </h1>
        <Insights />
        <FrameComponent1 />
      </section>
      <ExperienceBlock />
      <FrameComponent />
    </div>
  );
};

export default Width;
