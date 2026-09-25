import { useState } from "react";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from "lucide-react";
import { questions } from "../data/questions";
import { useApp } from "../context/AppContext";

export default function Questions() {
  const { completeQuestion } = useApp();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const q = questions[index];

  const submit = () => {
    if (selected === null) return;
    setSubmitted(true);
    completeQuestion(selected === q.answer);
  };
  const next = () => {
    setIndex((index + 1) % questions.length);
    setSelected(null);
    setSubmitted(false);
  };
  const reset = () => { setSelected(null); setSubmitted(false); };

  return (
    <>
      <div className="page-header"><div><p className="eyebrow">QUESTION PRACTICE</p><h1>Test Your Knowledge</h1><p className="muted">Practice interview questions and learn from every answer.</p></div><span className="pill">{index + 1} / {questions.length}</span></div>

      <div className="question-layout">
        <section className="card question-card">
          <div className="question-meta"><span className="tag">{q.category}</span><span className="difficulty">{q.difficulty}</span></div>
          <h2>{q.question}</h2>
          <div className="options">
            {q.options.map((option, i) => {
              let cls = "option";
              if (selected === i) cls += " selected";
              if (submitted && i === q.answer) cls += " correct";
              if (submitted && selected === i && i !== q.answer) cls += " wrong";
              return <button key={option} className={cls} onClick={() => !submitted && setSelected(i)}>
                <span className="option-letter">{String.fromCharCode(65+i)}</span><span>{option}</span>
                {submitted && i === q.answer && <CheckCircle2/>}
                {submitted && selected === i && i !== q.answer && <XCircle/>}
              </button>;
            })}
          </div>
          {!submitted ? <button onClick={submit} disabled={selected===null} className="btn btn-primary full">Submit Answer <ChevronRight size={17}/></button> :
            <div className="answer-box"><div className={selected===q.answer ? "answer-good" : "answer-bad"}>{selected===q.answer ? <CheckCircle2/> : <XCircle/>}<strong>{selected===q.answer ? "Correct answer!" : "Not quite."}</strong></div><p>{q.explanation}</p><button onClick={next} className="btn btn-primary">Next Question <ChevronRight size={17}/></button></div>}
        </section>

        <aside className="card question-side">
          <h3>Session Progress</h3>
          <div className="session-ring"><strong>{Math.round(((index+1)/questions.length)*100)}%</strong><span>completed</span></div>
          <p className="muted">Keep practicing to improve your technical readiness score.</p>
          <button onClick={reset} className="btn btn-secondary full"><RotateCcw size={16}/> Reset Answer</button>
        </aside>
      </div>
    </>
  );
}
