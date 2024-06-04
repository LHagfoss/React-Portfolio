import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent6 from "../components/FrameComponent6";
import Exterior from "../components/Exterior";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./AbousUs.css";

const AbousUs = () => {
  return (
    <div className="abous-us">
      <div className="backroundcolor" />
      <img className="abous-us-child" alt="" src="/rectangle-2@2x.png" />
      <FrameComponent10 />
      <FrameComponent9 />
      <FrameComponent8 />
      <FrameComponent6 />
      <section className="exterior-parent">
        <Exterior />
        <FrameComponent4 />
      </section>
      <FrameComponent2 />
      <section className="abous-us-inner">
        <div className="frame-parent">
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default AbousUs;
