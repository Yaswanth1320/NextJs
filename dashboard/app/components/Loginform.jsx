'use client'
import '../Styles/Login.css';
import { useFormState } from "react-dom";
import { authenticate } from '../api/actions';

export default function LoginForm() {
    const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <form action={formAction} className="login-form">
      <h1>Login</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button className="login-btn">LogIn</button>
      <p className="register-link">{state && state}</p>
    </form>
  );
}
