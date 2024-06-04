import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.abousUsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.experienceParent}>
            <h1 className={styles.experience}>Experience</h1>
            <p className={styles.asAFreelancer}>
              As a freelancer I worked on the UX / UI of websites from the
              cryptocurrency, e-commerce, CSR, RCP industries. I am also
              constantly expanding my knowledge in the front-end area and coding
              simple websites.
            </p>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <FrameComponent3
            image7="/image-7@2x.png"
            vALORANT="VALORANT"
            tacticalShooter="Tactical shooter"
            june22020="June 2 - 2020"
          />
          <FrameComponent3
            image7="/image-8@2x.png"
            vALORANT="Fortnite"
            tacticalShooter="Battle Royale"
            june22020="July 21 - 2017"
            propMinWidth="58px"
            propDisplay="inline-block"
            propMinWidth1="81px"
            propMinWidth2="88px"
          />
          <FrameComponent3
            image7="/image-9@2x.png"
            vALORANT="Counter-Strike 2"
            tacticalShooter="FPS"
            june22020="Sep 27 - 2023"
            propMinWidth="119px"
            propDisplay="inline-block"
            propMinWidth1="24px"
            propMinWidth2="96px"
          />
          <FrameComponent3
            image7="/image-10@2x.png"
            vALORANT="Minecraft"
            tacticalShooter="Sandbox multi/singleplayer"
            june22020="Nov 18 - 2011"
            propMinWidth="71px"
            propDisplay="unset"
            propMinWidth1="unset"
            propMinWidth2="88px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
