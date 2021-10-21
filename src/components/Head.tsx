//Components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa"
import UserPicker from "./UserPicker"
import Routes from "./Routes";
//styles
import 'bootstrap/dist/css/bootstrap.min.css';


const Head = () => (

    <Router>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSuportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/bookings" className="nav-link">
                                <FaCalendarAlt />
                                <span>Bookings</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bookables" className="nav-link">
                                <FaDoorOpen />
                                <span>Bookables</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link">
                                <FaUsers />
                                <span>Users</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <UserPicker />
            </nav>
        </header>
        <Routes />
    </Router>
)

export default Head