import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Insights.css";

const Insights = ({ className = "" }) => {
  return (
    <div className={`insights1 ${className}`}>
      <section className="project-list">
        <div className="worked">
          <div className="latest-projects-group">
            <div className="latest-projects2">
              <h1 className="latest-projects3">
                <span>Latest</span>
                <span className="projects2"> Projects</span>
              </h1>
            </div>
            <Button
              className="project-list1"
              endIcon={
                <img width="20px" height="20px" src="/eparrowupbold.png" />
              }
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "23",
                borderColor: "#fff",
                borderRadius: "88px",
                "&:hover": { borderColor: "#fff" },
                width: 248,
                height: 64,
              }}
            >
              Check out all
            </Button>
          </div>
        </div>
        <div className="project-images">
          <div className="rectangle-group">
            <img
              className="frame-child2"
              loading="lazy"
              alt=""
              src="/rectangle-51@2x.png"
            />
            <img className="frame-child3" alt="" src="/rectangle-5-11@2x.png" />
          </div>
          <div className="image-row">
            <div className="image-column">
              <img
                className="client-logo-list"
                loading="lazy"
                alt=""
                src="/rectangle-31@2x.png"
              />
              <div className="another-image-pair">
                <img
                  className="more-image-names"
                  alt=""
                  src="/more-image-names@2x.png"
                />
                <img
                  className="client-logo-list1"
                  loading="lazy"
                  alt=""
                  src="/rectangle-61@2x.png"
                />
              </div>
            </div>
            <img
              className="additional-logo-icon"
              alt=""
              src="/rectangle-6-11@2x.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

Insights.propTypes = {
  className: PropTypes.string,
};

export default Insights;
