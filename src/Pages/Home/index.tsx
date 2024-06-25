// import { ReactNode } from "react";
import Rectangle69 from "../../assets/Rectangle 69.png";
import "./style.css";
import InputField from "../../Components/InputField";
import SearchIcon from "../../assets/Icons/searchIcon";
// import Button from "../../Components/Button";

// interface IHome extends HTMLElement {
//   backgroundImage: ReactNode;
// }
const Home = () => {
  //   const { backgroundImage, ...rest } = props;
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${Rectangle69})` }}
    >
      <h1>
        We Always Provide <br /> Healthy Products
      </h1>
      <InputField
        label=""
        type="text"
        placeholder="What are you looking for?"
        righticon={<SearchIcon />}
      />
    </section>
  );
};

export default Home;
