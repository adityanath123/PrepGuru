import { useApp } from "../context/AppContext";
import { Save, Moon, Bell, Shield } from "lucide-react";

export default function Settings() {
  const { darkMode, setDarkMode } = useApp();
  return (
    <>
      <div className="page-header"><div><p className="eyebrow">SETTINGS</p><h1>Preferences</h1><p className="muted">Manage your PrepGen AI experience.</p></div></div>
      <div className="card settings-card">
        <Setting icon={Moon} title="Dark mode" description="Use a darker interface for your preparation sessions." action={<button className={`toggle ${darkMode?"on":""}`} onClick={()=>setDarkMode(!darkMode)}><span/></button>}/>
        <Setting icon={Bell} title="Practice reminders" description="Receive reminders to continue your daily preparation." action={<button className="toggle on"><span/></button>}/>
        <Setting icon={Shield} title="Demo mode" description="Presentation-1 uses local mock data instead of a backend." action={<span className="pill">Enabled</span>}/>
      </div>
      <div className="card"><div className="section-title"><h2>About PrepGen AI</h2><p>Frontend prototype for semester Project Presentation-1.</p></div><button className="btn btn-primary"><Save size={17}/> Save Preferences</button></div>
    </>
  );
}
function Setting({icon:Icon,title,description,action}){return <div className="setting-row"><div className="setting-icon"><Icon size={20}/></div><div className="setting-copy"><strong>{title}</strong><p>{description}</p></div>{action}</div>}
