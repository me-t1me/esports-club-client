import "./HeaderStyles.css";
import logo from "../../../assets/esports_colour.png";

const Header = () => {
  return (
    <div className="container-header-div">
      <div className="container-header">
        <div className="clubname">
          <h2 className="club-title">
            <span className="es">Esports &nbsp;</span>
            <span className="club">Club &nbsp;</span>
            <span className="b">BPHC</span>
          </h2>
        </div>
      </div>
      <div className="logo">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
