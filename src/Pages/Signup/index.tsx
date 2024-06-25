import Group189 from "../../assets/Group 189.png";
import GoogleIcon from "../../assets/Icons/googleIcon";
import Button from "../../Components/Button";
import InputField from "../../Components/InputField";
import "./style.css";

const Signup = () => {
  return (
    <div className="sign-up-parent">
      <div className="leftPanel">
        <img src={Group189} alt="Logout" />
      </div>
      <div className="rightPanel">
        <h1>Sign Up to get started.</h1>
        <p>
          Already a user? <span>Let's sign-in</span>
        </p>
        <InputField label="User Name" type="text" />
        <br />
        <InputField label="Email" type="email" />
        <br />
        <InputField label="Password" type="password" />
        <br />
        <input type="checkbox" />{" "}
        <p>
          I agree to the terms and conditions, and our default notfication
          setting.
        </p>
        <Button children={"Sign Up"}></Button>
        <Button
          lefticon={<GoogleIcon />}
          children={"Sign Up with Google"}
        ></Button>
        <footer>
          <a href="#">Terms and conditions</a>
          <a href="#">Contact Us</a>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
