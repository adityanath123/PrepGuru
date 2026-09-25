import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Signup() {
  const navigate = useNavigate();
  const { updateUser } = useApp();

  const submit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    updateUser({ name: form.get("name"), role: form.get("role") });
    navigate("/profile");
  };

  return (
    <div className="auth-page">
      <Link to="/" className="back-link"><ArrowLeft size={17}/> Back to home</Link>
      <div className="auth-card wide">
        <div className="auth-logo"><div className="brand-mark">P</div><strong>PrepGen<span>AI</span></strong></div>
        <div className="auth-heading"><h1>Create your account</h1><p>Start building your personalized interview plan.</p></div>
        <form onSubmit={submit} className="form">
          <label>Full name<input name="name" placeholder="Enter your name" required /></label>
          <label>Email<input type="email" placeholder="you@example.com" required /></label>
          <label>Password<input type="password" placeholder="Create a password" required /></label>
          <label>Target role
            <select name="role" defaultValue="Frontend Developer">
              <option>Frontend Developer</option><option>Backend Developer</option><option>Full Stack Developer</option>
              <option>Data Analyst</option><option>Data Scientist</option><option>Cyber Security Analyst</option>
            </select>
          </label>
          <button className="btn btn-primary full">Create Account</button>
        </form>
        <p className="auth-switch">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}
