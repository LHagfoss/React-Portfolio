import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.shishaParent}>
        <div className={styles.shisha}>
          <img className={styles.shishaChild} alt="" src="/rectangle-2.svg" />
          <div className={styles.viWrapper}>
            <img className={styles.viIcon} alt="" src="/vector-1.svg" />
          </div>
          <div className={styles.availableForWork}>Available for work</div>
        </div>
        <p className={styles.imLucasHagfossContainer}>
          <span>{`I'm Lucas `}</span>
          <span className={styles.hagfoss}>Hagfoss</span>
          <span> a</span>
          <span
            className={styles.userExperience}
          >{` user experience & interface designer `}</span>
          <span>
            from Norway, focusing on building functional websites that will
          </span>
          <span
            className={styles.increaseConversation}
          >{` increase conversation `}</span>
          <span>and help</span>
          <span className={styles.reachCustomers}> reach customers.</span>
        </p>
      </div>
      <h1 className={styles.workedWith}>
        <span>{`Worked `}</span>
        <span className={styles.with}>with:</span>
      </h1>
      <div className={styles.latestProjectsParent}>
        <div className={styles.latestProjects}>
          <h1 className={styles.latestProjects1}>
            <span>Latest</span>
            <span className={styles.projects}> Projects</span>
          </h1>
        </div>
        <Button
          className={styles.frameChild}
          endIcon={<img width="20px" height="20px" src="/eparrowupbold.png" />}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "25",
            borderColor: "#fff",
            borderRadius: "88px",
            "&:hover": { borderColor: "#fff" },
            width: 248,
            height: 86,
          }}
        >
          Check out all
        </Button>
      </div>
    </section>
  );
};

export default FrameComponent9;
