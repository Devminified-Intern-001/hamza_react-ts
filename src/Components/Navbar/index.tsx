import ProfileIcon from "../../assets/Icons/profileIcon";
import CartIcon from "../../assets/Icons/cartIcon";

const Navbar = () => {
  return (
    <div>
      <nav>
        <strong>
          <a href="#">Logo</a>
        </strong>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <strong>
          <ProfileIcon />
        </strong>
        <strong>
          <CartIcon />
        </strong>
      </nav>
    </div>
  );
};

export default Navbar;
