import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="container landing_container">
      <div className="landing_text">
        <h3>Welcome to</h3>
        <h1>Country-App</h1>
        <div className="containerBtn button-container">
          <Link to="/home" className="btn pri">
            Vamos!!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
