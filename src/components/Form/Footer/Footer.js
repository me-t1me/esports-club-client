import "./FooterStyles.css";
import facebook from "../../../assets/icons8-facebook-48.png";
import instagram from "../../../assets/icons8-instagram-48.png";
import github from "../../../assets/icons8-github-48.png";

const Footer = () => {
  return (
    <div className="container-footer-div">
      <div className="container-footer">
        <h2 className="developer">Developer:</h2>
        <h3 className="developer-name">
          <img
            src={facebook}
            alt=""
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100004682174893",
                "_blank"
              )
            }
          />
          <img
            src={instagram}
            alt=""
            onClick={() =>
              window.open("https://www.instagram.com/sidjainmetime/", "_blank")
            }
          />
          <img
            src={github}
            alt=""
            onClick={() => window.open("https://github.com/me-t1me", "_blank")}
            className="github"
          />
        </h3>
      </div>
    </div>
  );
};

export default Footer;
