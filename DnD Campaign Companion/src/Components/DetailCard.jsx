export default function DetailCard({ title, subtitle, children, onClose }) {
  if (!title) return null;
  return (
    <div className="detail-card">
      <div className="detail-head">
        <div>
          <h2>{title}</h2>
          {subtitle ? <p className="muted">{subtitle}</p> : null}
        </div>
        <button className="btn-ghost" onClick={onClose}>Close</button>
      </div>
      <div className="detail-body">{children}</div>
    </div>
  );
}
