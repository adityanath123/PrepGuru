import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, UserRound, BrainCircuit, CircleHelp,
  Mic2, BarChart3, Settings, LogOut
} from "lucide-react";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/profile", label: "My Profile", icon: UserRound },
  { to: "/preparation", label: "AI Preparation", icon: BrainCircuit },
  { to: "/questions", label: "Question Practice", icon: CircleHelp },
  { to: "/mock-interview", label: "Mock Interview", icon: Mic2 },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings }
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">P</div>
        <div><strong>PrepGen</strong><span>AI</span></div>
      </div>

      <div className="sidebar-label">MENU</div>

      <nav>
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <Icon size={19} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <BrainCircuit size={20} />
          <strong>AI Coach</strong>
          <p>Your personalized preparation is ready.</p>
        </div>
        <NavLink to="/" className="nav-link logout">
          <LogOut size={19} /> Exit Demo
        </NavLink>
      </div>
    </aside>
  );
}
