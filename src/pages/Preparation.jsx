import { CheckCircle2, Circle, BrainCircuit, Clock, ArrowRight } from "lucide-react";
import { useApp } from "../context/AppContext";
import ProgressBar from "../components/ProgressBar";

const plan = [
  { day: "Day 1", title: "JavaScript Fundamentals", meta: "Variables, functions, closures", time: "25 min", done: true },
  { day: "Day 2", title: "React Fundamentals", meta: "Components, props, state", time: "30 min", done: true },
  { day: "Day 3", title: "React Hooks", meta: "useState, useEffect, useContext", time: "35 min", done: false },
  { day: "Day 4", title: "API Integration", meta: "Fetch, Axios, loading states", time: "30 min", done: false },
  { day: "Day 5", title: "Mock Interview", meta: "Mixed technical interview", time: "20 min", done: false }
];

export default function Preparation() {
  const { user, progress } = useApp();
  return (
    <>
      <div className="page-header"><div><p className="eyebrow">AI PREPARATION</p><h1>Your Personalized Roadmap</h1><p className="muted">A preparation journey designed for a {user.role} role.</p></div><button className="btn btn-primary"><BrainCircuit size={17}/> Regenerate Plan</button></div>

      <section className="card ai-banner">
        <div className="ai-banner-icon"><BrainCircuit size={25}/></div>
        <div><strong>PrepGen AI Recommendation</strong><p>Focus on React Hooks and JavaScript fundamentals today. Your technical score has room for improvement.</p></div>
        <div className="banner-score"><strong>{progress.technical}%</strong><span>Technical</span></div>
      </section>

      <div className="two-column">
        <section className="card">
          <div className="card-heading"><div><h2>5-Day Preparation Plan</h2><p className="muted">Your current roadmap</p></div></div>
          <div className="timeline">
            {plan.map((item) => (
              <div className={`timeline-item ${item.done ? "completed" : ""}`} key={item.day}>
                <div className="timeline-icon">{item.done ? <CheckCircle2 size={20}/> : <Circle size={20}/>}</div>
                <div className="timeline-content"><span className="day-label">{item.day}</span><h3>{item.title}</h3><p>{item.meta}</p><span className="time"><Clock size={14}/> {item.time}</span></div>
                {!item.done && <button className="small-arrow"><ArrowRight size={16}/></button>}
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="card-heading"><div><h2>Roadmap Progress</h2><p className="muted">Keep going!</p></div></div>
          <div className="circle-progress"><div><strong>40%</strong><span>Complete</span></div></div>
          <ProgressBar value={40}/>
          <div className="roadmap-stats"><span>2 completed</span><span>3 remaining</span></div>
          <div className="focus-box"><strong>Today's focus</strong><p>React Hooks</p><span>35 minutes recommended</span></div>
        </section>
      </div>
    </>
  );
}
