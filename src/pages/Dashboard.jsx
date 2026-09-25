import { Link } from "react-router-dom";
import { BrainCircuit, CheckCircle2, Flame, Target, ArrowRight, Mic2, BookOpen } from "lucide-react";
import { useApp } from "../context/AppContext";
import ProgressBar from "../components/ProgressBar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const { user, progress } = useApp();
  return (
    <>
      <div className="page-header">
        <div><p className="eyebrow">DASHBOARD</p><h1>Welcome back, {user.name} 👋</h1><p className="muted">Let's make today count toward your interview goal.</p></div>
        <Link to="/mock-interview" className="btn btn-primary"><Mic2 size={17}/> Start Mock Interview</Link>
      </div>

      <div className="stats-grid">
        <StatCard icon={Target} title="Interview Readiness" value={`${progress.readiness}%`} subtitle="+8% this month" />
        <StatCard icon={CheckCircle2} title="Questions Solved" value={`${progress.completedQuestions}/${progress.totalQuestions}`} subtitle="Keep practicing" />
        <StatCard icon={Flame} title="Practice Streak" value="7 days" subtitle="Personal best" />
        <StatCard icon={BrainCircuit} title="AI Sessions" value="12" subtitle="This month" />
      </div>

      <div className="dashboard-grid">
        <section className="card readiness-card">
          <div className="card-heading"><div><h2>Interview Readiness</h2><p className="muted">Your current preparation level</p></div><strong className="big-number">{progress.readiness}%</strong></div>
          <ProgressBar value={progress.readiness}/>
          <div className="skill-list">
            <Skill label="Technical Skills" value={progress.technical}/>
            <Skill label="Communication" value={progress.communication}/>
            <Skill label="Problem Solving" value={progress.problemSolving}/>
            <Skill label="HR Preparation" value={progress.hr}/>
          </div>
        </section>

        <section className="card">
          <div className="card-heading"><div><h2>Today's Plan</h2><p className="muted">3 tasks recommended by PrepGen AI</p></div></div>
          <Task icon={BookOpen} title="React Hooks" meta="10 questions · 15 min" done />
          <Task icon={BrainCircuit} title="JavaScript Concepts" meta="8 questions · 12 min" />
          <Task icon={Mic2} title="Mini Mock Interview" meta="5 questions · 10 min" />
          <Link to="/preparation" className="text-link">View full plan <ArrowRight size={15}/></Link>
        </section>
      </div>

      <section className="card">
        <div className="card-heading"><div><h2>Quick Actions</h2><p className="muted">Jump back into your preparation</p></div></div>
        <div className="quick-grid">
          <Link to="/questions" className="quick-action"><BookOpen/><strong>Practice Questions</strong><span>Technical + HR</span></Link>
          <Link to="/mock-interview" className="quick-action"><Mic2/><strong>Mock Interview</strong><span>Practice under pressure</span></Link>
          <Link to="/analytics" className="quick-action"><Target/><strong>View Analytics</strong><span>Understand your progress</span></Link>
        </div>
      </section>
    </>
  );
}

function Skill({ label, value }) {
  return <div className="skill-row"><div><span>{label}</span><strong>{value}%</strong></div><ProgressBar value={value}/></div>;
}
function Task({ icon: Icon, title, meta, done }) {
  return <div className={`task ${done ? "done" : ""}`}><div className="task-icon"><Icon size={18}/></div><div><strong>{title}</strong><span>{meta}</span></div>{done ? <CheckCircle2 className="task-check"/> : <span className="task-dot"/>}</div>;
}
