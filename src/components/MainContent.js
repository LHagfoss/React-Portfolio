import PropTypes from "prop-types";
import "./MainContent.css";

const MainContent = ({ className = "" }) => {
  return (
    <section className={`main-content ${className}`}>
      <header className="navbar1">
        <a className="lhagfoss2">LHagfoss</a>
        <div className="nav-links">
          <nav className="link-container">
            <a className="about1">About</a>
            <div className="site-links">
              <a className="work1">Work</a>
              <div className="link-separator">(6)</div>
            </div>
            <div className="site-links1">
              <a className="insight1">Insight</a>
              <div className="div2">(3)</div>
            </div>
            <a className="contact1">Contact</a>
          </nav>
          <div className="vector-parent4">
            <img className="frame-child1" alt="" src="/rectangle-21.svg" />
            <div className="welcome-message">
              <img
                className="greeting-icon"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <a className="hellolhagfoss1">Hello@LHagfoss</a>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
