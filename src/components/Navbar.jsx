import { Link, useNavigate } from "react-router";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem("userAuthStatus", JSON.stringify(false));
        navigate("/login");
    };

    return (
        <div className="navbar">

            <h2 className="logo">My Website</h2>

            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                <li>
                    <Link to="/users">Users</Link>
                </li>

                <li>
                    <button type="button" className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;