import { BarChart3, TrendingUp, Target, Clock } from "lucide-react";
import { useApp } from "../context/AppContext";
import ProgressBar from "../components/ProgressBar";

export default function Analytics() {
  const { progress } = useApp();
  const bars = [42, 58, 51, 68, 62, 76, 84];
  return (
    <>
      <div className="page-header"><div><p className="eyebrow">ANALYTICS</p><h1>Your Progress</h1><p className="muted">Understand your strengths and focus areas.</p></div></div>
      <div className="stats-grid">
        <Metric icon={TrendingUp} title="Readiness" value={`${progress.readiness}%`} change="+8%"/>
        <Metric icon={Target} title="Questions" value={progress.completedQuestions} change="+12 this week"/>
        <Metric icon={Clock} title="Practice Time" value="6h 20m" change="+1h 15m"/>
        <Metric icon={BarChart3} title="Avg. Score" value="81%" change="+6%"/>
      </div>
      <div className="dashboard-grid">
        <section className="card chart-card"><div className="card-heading"><div><h2>Weekly Practice</h2><p className="muted">Questions practiced each day</p></div></div><div className="bar-chart">{bars.map((v,i)=><div className="bar-column" key={i}><div className="bar" style={{height:`${v}%`}}></div><span>{["M","T","W","T","F","S","S"][i]}</span></div>)}</div></section>
        <section className="card"><div className="card-heading"><div><h2>Skill Breakdown</h2><p className="muted">Current scores</p></div></div><Skill label="Technical" value={progress.technical}/><Skill label="Communication" value={progress.communication}/><Skill label="Problem Solving" value={progress.problemSolving}/><Skill label="HR" value={progress.hr}/></section>
      </div>
    </>
  );
}
function Metric({icon:Icon,title,value,change}){return <div className="stat-card"><div className="stat-icon"><Icon size={21}/></div><div><span className="muted">{title}</span><h3>{value}</h3><small className="positive">{change}</small></div></div>}
function Skill({label,value}){return <div className="skill-row"><div><span>{label}</span><strong>{value}%</strong></div><ProgressBar value={value}/></div>}
