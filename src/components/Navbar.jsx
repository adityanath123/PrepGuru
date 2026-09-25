import { Bell, Search, UserCircle } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const { user } = useApp();

  return (
    <header className="topbar">
      <div className="mobile-brand">PrepGen <span>AI</span></div>
      <div className="search-box">
        <Search size={18} />
        <input placeholder="Search preparation topics..." />
      </div>
      <div className="topbar-actions">
        <button className="icon-button"><Bell size={19} /></button>
        <div className="mini-user">
          <div className="avatar">{user.name.charAt(0)}</div>
          <div className="mini-user-text">
            <strong>{user.name}</strong>
            <span>{user.role}</span>
          </div>
          <UserCircle size={18} />
        </div>
      </div>
    </header>
  );
}
