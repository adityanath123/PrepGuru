export default function StatCard({ icon: Icon, title, value, subtitle }) {
  return (
    <div className="stat-card">
      <div className="stat-icon"><Icon size={21} /></div>
      <div>
        <span className="muted">{title}</span>
        <h3>{value}</h3>
        <small>{subtitle}</small>
      </div>
    </div>
  );
}
