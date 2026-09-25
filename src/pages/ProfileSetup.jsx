import { useState } from "react";
import { Save, Plus, X } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function ProfileSetup() {
  const { user, updateUser } = useApp();
  const [form, setForm] = useState(user);
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    const skill = skillInput.trim();
    if (skill && !form.skills.includes(skill)) setForm({ ...form, skills: [...form.skills, skill] });
    setSkillInput("");
  };
  const removeSkill = (skill) => setForm({ ...form, skills: form.skills.filter((s) => s !== skill) });

  const save = (e) => { e.preventDefault(); updateUser(form); alert("Profile saved for demo."); };

  return (
    <>
      <div className="page-header"><div><p className="eyebrow">PERSONALIZATION</p><h1>My Profile</h1><p className="muted">Tell PrepGen AI about your career goals.</p></div></div>
      <form onSubmit={save} className="card form profile-form">
        <div className="section-title"><h2>Career Profile</h2><p>We use this information to personalize your preparation.</p></div>
        <div className="form-grid">
          <label>Full name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label>
          <label>Target role<select value={form.role} onChange={e=>setForm({...form,role:e.target.value})}><option>Frontend Developer</option><option>Backend Developer</option><option>Full Stack Developer</option><option>Data Analyst</option><option>Data Scientist</option></select></label>
          <label>Experience<select value={form.experience} onChange={e=>setForm({...form,experience:e.target.value})}><option>Fresher</option><option>1-2 Years</option><option>3+ Years</option></select></label>
          <label>Target company<input value={form.targetCompany} onChange={e=>setForm({...form,targetCompany:e.target.value})}/></label>
        </div>
        <div className="field-block">
          <label>Skills</label>
          <div className="skill-tags">{form.skills.map(s=><span key={s}>{s}<button type="button" onClick={()=>removeSkill(s)}><X size={13}/></button></span>)}</div>
          <div className="add-skill"><input value={skillInput} onChange={e=>setSkillInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&(e.preventDefault(),addSkill())} placeholder="Add a skill"/><button type="button" className="btn btn-secondary" onClick={addSkill}><Plus size={16}/> Add</button></div>
        </div>
        <div className="form-actions"><button className="btn btn-primary"><Save size={17}/> Save Profile</button></div>
      </form>
    </>
  );
}
