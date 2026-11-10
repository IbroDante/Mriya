import { useEffect } from "react";
import { ArrowUpRight, CheckCircle2, X } from "./Icons.jsx";

export function ServiceModal({ service, onClose, onInquire }) {
  useEffect(() => {
    if (!service) return;
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={onClose}
    >
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-meta">
            <span className="modal-index">{service.number} / 09</span>
            <span className="modal-label">{service.label}</span>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close service specifications"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-hero-img">
          <img
            src={service.image}
            alt={service.title}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="modal-body">
          <h3 id="service-modal-title">{service.title}</h3>
          <p className="modal-desc">{service.description}</p>

          <div className="modal-list-heading">Core Capabilities &amp; Deliverables</div>
          <ul className="modal-list">
            {service.capabilities.map((cap) => (
              <li key={cap}>
                <CheckCircle2 size={17} className="modal-check" aria-hidden="true" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>

          {service.note && <p className="modal-note">{service.note}</p>}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Back to overview
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onInquire(service.title)}
          >
            Request quote for {service.title.split(" ")[0]}
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
