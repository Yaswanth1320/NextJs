import "../Styles/Login.css";
import LoginForm from "../components/Loginform";

function Login() {
  return (
    <div className="login-container">
      <LoginForm />
      {/* <p className="register-link">
        Don't have an account? <Link href="/">Register</Link>
      </p> */}
    </div>
  );
}

export default Login;
