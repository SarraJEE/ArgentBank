
import { NavLink } from "react-router-dom";
import argentBankLogo from "../../assets/images/argentBankLogo.png";

function Header() {

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            <div>
                <NavLink to="/profile" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    <span id="nav-user-firstname"> Tony</span>
                </NavLink>
                <NavLink className="main-nav-item">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </NavLink>
            </div>
            <div>
                <NavLink to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>

        </nav>
    )
}

export default Header;
