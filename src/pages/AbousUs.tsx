import { FunctionComponent } from "react";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent6 from "../components/FrameComponent6";
import Exterior from "../components/Exterior";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./AbousUs.module.css";

const AbousUs: FunctionComponent = () => {
  return (
    <div className={styles.abousUs}>
      <div className={styles.backroundcolor} />
      <img className={styles.abousUsChild} alt="" src="/rectangle-2@2x.png" />
      <FrameComponent10 />
      <FrameComponent9 />
      <FrameComponent8 />
      <FrameComponent6 />
      <section className={styles.exteriorParent}>
        <Exterior />
        <FrameComponent4 />
      </section>
      <FrameComponent2 />
      <section className={styles.abousUsInner}>
        <div className={styles.frameParent}>
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default AbousUs;
