import { NavLink } from 'react-router-dom';
import '../Assets/css/style.css';

function Login() {
  return (
    <div className="App">
      <h2>Login Page</h2>
      <NavLink to="/register">
        <button>Register</button>
      </NavLink>
    </div>
  );
}

export default Login;
