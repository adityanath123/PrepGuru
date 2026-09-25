import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BrainCircuit, CheckCircle2, Mic2, BarChart3, Sparkles } from "lucide-react";

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing-nav">
        <Link to="/" className="brand landing-brand">
          <div className="brand-mark">P</div>
          <div><strong>PrepGen</strong><span>AI</span></div>
        </Link>
        <div className="landing-links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <Link to="/login" className="btn btn-ghost">Login</Link>
          <Link to="/signup" className="btn btn-primary">Get Started</Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow"><Sparkles size={15} /> AI-powered interview preparation</div>
          <h1>Prepare smarter.<br /><span>Interview better.</span></h1>
          <p>
            PrepGen AI creates a personalized preparation journey for technical,
            HR, and behavioral interviews based on your skills and career goals.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary btn-large">
              Start Preparing <ArrowRight size={18} />
            </Link>
            <Link to="/dashboard" className="btn btn-secondary btn-large">
              View Demo
            </Link>
          </div>
          <div className="trust-row">
            <span><CheckCircle2 size={16} /> Personalized roadmap</span>
            <span><CheckCircle2 size={16} /> Mock interviews</span>
            <span><CheckCircle2 size={16} /> Progress insights</span>
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-window">
            <div className="preview-top"><span></span><span></span><span></span></div>
            <div className="preview-body">
              <div className="preview-greeting">Good morning, Adi 👋</div>
              <p className="muted">Your interview readiness</p>
              <div className="readiness">
                <div className="readiness-ring">78%</div>
                <div><strong>You're making great progress!</strong><p>Keep practicing to reach your target.</p></div>
              </div>
              <div className="preview-cards">
                <div><BrainCircuit size={20}/><strong>AI Preparation</strong><small>3 tasks today</small></div>
                <div><Mic2 size={20}/><strong>Mock Interview</strong><small>15 min session</small></div>
                <div><BarChart3 size={20}/><strong>Analytics</strong><small>+12% this week</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-heading">
          <div className="eyebrow">FEATURES</div>
          <h2>Everything you need to prepare with confidence.</h2>
        </div>
        <div className="feature-grid">
          <Feature icon={BrainCircuit} title="Personalized AI Roadmap" text="A preparation plan aligned with your target role, skills, and goals." />
          <Feature icon={Mic2} title="Mock Interviews" text="Practice realistic interview conversations and improve your responses." />
          <Feature icon={BarChart3} title="Progress Analytics" text="Track readiness, strengths, weak areas, and practice consistency." />
        </div>
      </section>

      <section id="how" className="section how-section">
        <div className="section-heading"><div className="eyebrow">HOW IT WORKS</div><h2>Three simple steps.</h2></div>
        <div className="steps">
          <Step n="01" title="Set your goal" text="Choose your role, experience, skills, and target interview type." />
          <Step n="02" title="Get your plan" text="PrepGen generates a personalized preparation journey." />
          <Step n="03" title="Practice & improve" text="Solve questions, take mock interviews, and track progress." />
        </div>
      </section>

      <footer className="landing-footer bg-amber-100">PrepGen AI.</footer>
    </div>
  );
}

function Feature({ icon: Icon, title, text }) {
  return <div className="feature-card"><div className="feature-icon"><Icon size={22}/></div><h3>{title}</h3><p>{text}</p></div>;
}
function Step({ n, title, text }) {
  return <div className="step"><span>{n}</span><h3>{title}</h3><p>{text}</p></div>;
}
