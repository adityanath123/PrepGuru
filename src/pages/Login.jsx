import { Link, useNavigate } from "react-router-dom";
import { BrainCircuit, ArrowLeft } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const submit = (e) => { e.preventDefault(); navigate("/dashboard"); };

  return (
    <div className="auth-page">
      <Link to="/" className="back-link"><ArrowLeft size={17}/> Back to home</Link>
      <div className="auth-card">
        <div className="auth-logo"><div className="brand-mark">P</div><strong>PrepGen<span>AI</span></strong></div>
        <div className="auth-heading"><h1>Welcome back</h1><p>Continue your interview preparation.</p></div>
        <form onSubmit={submit} className="form">
          <label>Email<input type="email" placeholder="you@example.com" required /></label>
          <label>Password<input type="password" placeholder="••••••••" required /></label>
          <div className="form-row"><label className="checkbox"><input type="checkbox"/> Remember me</label><a href="#forgot">Forgot password?</a></div>
          <button className="btn btn-primary full">Login to PrepGen</button>
        </form>
        <p className="auth-switch">Don't have an account? <Link to="/signup">Create one</Link></p>
      </div>
    </div>
  );
}
