import image from "../../assets/Group 188.png";
import Button from "../../Components/Button";
import GoogleIcon from "../../assets/Icons/googleIcon";
import InputField from "../../Components/InputField";
import "./style.css";

const Login = () => {
  return (
    <div className="sign-in-parent">
      <div className="leftPanel">
        <img src={image} alt="Picture" />
      </div>
      <div className="rightPanel">
        <h1>Welcome to Start.</h1>
        <p>
          New Here? <span>Create an Account</span>
        </p>
        <InputField label="User Name" type="text" />
        <br />
        <InputField label="Password" type="text" />
        <br />
        <Button children={"Sign In"}></Button>
        <Button
          lefticon={<GoogleIcon />}
          children={"Sign In With Google"}
        ></Button>
        <br />
        <footer>
          <a href="#">Terms and Conditions.</a>
          <a href="#">Contact Us</a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
