import '../Assets/css/style.css';
import { useLocation, Link } from "react-router-dom";
// const renderValue =  routes.m/xap();

function Navbar() {
  return (
    <div className="App">
        <Link to="/">
            <li>
                login
            </li>
        </Link>
        <Link to="/register">
            <li>
                register
            </li>
        </Link>
    </div>
  );
}

export default Navbar;
