import { useState } from "react";
import { Mic2, Timer, ChevronRight, CheckCircle2, Bot, Sparkles } from "lucide-react";

const mockQuestions = [
  "Tell me about yourself and your recent projects.",
  "Why do you want to work as a Frontend Developer?",
  "Explain the difference between state and props in React.",
  "How do you handle a difficult bug in a production application?",
  "Where do you see yourself growing in the next three years?"
];

export default function MockInterview() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [finished, setFinished] = useState(false);

  const next = () => {
    if (index === mockQuestions.length - 1) setFinished(true);
    else { setIndex(index + 1); setAnswer(""); }
  };

  if (finished) return (
    <div className="card completion-card">
      <div className="success-icon"><CheckCircle2 size={38}/></div>
      <p className="eyebrow">INTERVIEW COMPLETE</p>
      <h1>Great job, Adi!</h1>
      <p className="muted">Your mock interview has been completed. Here is your demo AI feedback.</p>
      <div className="feedback-grid"><div><strong>84%</strong><span>Overall Score</span></div><div><strong>8.5/10</strong><span>Communication</span></div><div><strong>8/10</strong><span>Technical</span></div></div>
      <div className="ai-feedback"><Sparkles/><div><strong>AI Feedback</strong><p>Your answers were structured and relevant. Try giving more concrete examples when discussing projects.</p></div></div>
      <button className="btn btn-primary" onClick={()=>{setFinished(false);setStarted(false);setIndex(0)}}>Start Again</button>
    </div>
  );

  if (!started) return (
    <>
      <div className="page-header"><div><p className="eyebrow">MOCK INTERVIEW</p><h1>Practice Like It's Real</h1><p className="muted">Simulate a real interview with PrepGen AI.</p></div></div>
      <div className="mock-start card">
        <div className="mock-hero-icon"><Bot size={42}/></div>
        <h2>AI Mock Interview</h2>
        <p>You'll answer 5 questions covering introduction, behavioral, and technical topics.</p>
        <div className="mock-info"><span><Timer/> ~15 minutes</span><span><Mic2/> 5 questions</span><span><Sparkles/> AI feedback</span></div>
        <button className="btn btn-primary btn-large" onClick={()=>setStarted(true)}>Start Interview <ChevronRight/></button>
      </div>
    </>
  );

  return (
    <>
      <div className="interview-top"><div><p className="eyebrow">LIVE MOCK INTERVIEW</p><h1>Question {index+1} of {mockQuestions.length}</h1></div><span className="timer"><Timer size={17}/> 02:34</span></div>
      <div className="interview-layout">
        <section className="card interview-main">
          <div className="bot-bubble"><Bot size={20}/><span>PrepGen AI Interviewer</span></div>
          <h2>{mockQuestions[index]}</h2>
          <textarea value={answer} onChange={e=>setAnswer(e.target.value)} placeholder="Type your answer here..."></textarea>
          <div className="interview-actions"><span className="muted">{answer.length} characters</span><button onClick={next} disabled={!answer.trim()} className="btn btn-primary">{index === mockQuestions.length-1 ? "Finish Interview" : "Next Question"} <ChevronRight size={17}/></button></div>
        </section>
        <aside className="card"><h3>Interview Progress</h3>{mockQuestions.map((_,i)=><div className={`q-step ${i===index?"current":i<index?"done":""}`} key={i}><span>{i<index?"✓":i+1}</span>Question {i+1}</div>)}</aside>
      </div>
    </>
  );
}
