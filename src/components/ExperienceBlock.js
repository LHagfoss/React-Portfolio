import GameDetails from "./GameDetails";
import PropTypes from "prop-types";
import "./ExperienceBlock.css";

const ExperienceBlock = ({ className = "" }) => {
  return (
    <section className={`experience-block ${className}`}>
      <div className="experience-container">
        <div className="experience-details">
          <h1 className="experience1">Experience</h1>
          <p className="as-a-freelancer1">
            As a freelancer I worked on the UX / UI of websites from the
            cryptocurrency, e-commerce, CSR, RCP industries. I am also
            constantly expanding my knowledge in the front-end area and coding
            simple websites.
          </p>
        </div>
        <div className="gaming-experience">
          <GameDetails
            image7="/image-71@2x.png"
            vALORANT="VALORANT"
            tacticalShooter="Tactical shooter"
            june22020="June 2 - 2020"
          />
          <GameDetails
            image7="/image-81@2x.png"
            vALORANT="Fortnite"
            tacticalShooter="Battle Royale"
            june22020="July 21 - 2017"
            propMinWidth="58px"
            propMinWidth1="81px"
            propDisplay="inline-block"
            propMinWidth2="88px"
          />
          <GameDetails
            image7="/image-91@2x.png"
            vALORANT="Counter-Strike 2"
            tacticalShooter="FPS"
            june22020="Sep 27 - 2023"
            propMinWidth="119px"
            propMinWidth1="24px"
            propDisplay="inline-block"
            propMinWidth2="96px"
          />
          <GameDetails
            image7="/image-101@2x.png"
            vALORANT="Minecraft"
            tacticalShooter="Sandbox multi/singleplayer"
            june22020="Nov 18 - 2011"
            propMinWidth="71px"
            propMinWidth1="unset"
            propDisplay="unset"
            propMinWidth2="88px"
          />
        </div>
      </div>
    </section>
  );
};

ExperienceBlock.propTypes = {
  className: PropTypes.string,
};

export default ExperienceBlock;
