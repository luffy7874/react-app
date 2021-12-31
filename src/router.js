import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/register";

const routes = [
    {
        name : "Login",
        key : "login",
        route : "/dashboard",
        component : <Dashboard />,
    },
    {
        name : "Register",
        key : "register",
        route : "/register",
        component : <Register />,
    }
]

export default routes;