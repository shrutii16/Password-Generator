import login from "../assets/home.gif";
import "./style.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/password");
  };
  return (
    <div className="App">
      <div className="heading">Password Generator Tool</div>
      <div className="banner">
        <div className="txt">
          Need Secure and
          <br /> Strong Passwords
          <br /> to keep your data safe?
          <br />
          <Button variant="contained" onClick={routeChange}>
            Generate Passwords
          </Button>
        </div>
        <div className="gif">
          <img src={login} width={500} height={500} alt="gif"></img>
        </div>
      </div>
    </div>
  );
}
