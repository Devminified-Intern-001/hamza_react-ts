import Navbar from "./Components/Navbar";
import SliderTab from "./Components/SliderTab";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Logout from "./Pages/Signup";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SliderTab />
      <Login />
      <Logout />
    </>
  );
}

export default App;
