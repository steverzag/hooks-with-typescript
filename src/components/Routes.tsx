import { Route } from "react-router-dom";
import Bookables from "../pages/Bookables";
import Bookings from "../pages/Bookings";
import Users from "../pages/Users";

export default () => (
    <div>
        <Route path="/bookables" component={Bookables}/>
        <Route path="/bookings" component={Bookings}/>
        <Route path="/Users" component={Users}/>
    </div>
)