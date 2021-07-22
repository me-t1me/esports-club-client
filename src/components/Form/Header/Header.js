import "./HeaderStyles.css";
import logo from "../../../assets/esports_colour.png";

const Header = () => {
  return (
    <div className="container-header-div">
      <div className="container-header"></div>
      <div className="logo">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
