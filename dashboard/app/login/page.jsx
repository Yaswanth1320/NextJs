import "../Styles/Login.css";
import Link from 'next/link'

function Login() {
  return (
    <div className="login-container">
      <form action="" className="login-form">
        <h1>Login</h1>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button className="login-btn" type="submit">
          LogIn
        </button>
      </form>
      <p className="register-link">
        Don't have an account? <Link href="/">Register</Link>
      </p>
    </div>
  );
}

export default Login;
