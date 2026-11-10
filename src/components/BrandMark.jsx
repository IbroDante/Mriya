export function MriyaLogo({ compact = false, light = false }) {
  const size = compact ? 38 : 44;
  return (
    <span className={`mriya-brand ${light ? "mriya-brand--light" : ""}`}>
      <img
        className="mriya-brand__mark"
        src="/logo-mark.png"
        alt=""
        width={size}
        height={size}
      />
      <span className="mriya-brand__text">
        <strong>Mriya</strong>
        <small>CO LIMITED</small>
      </span>
    </span>
  );
}

export function PlatformEmblem({ id }) {
  if (id === "teams") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect width="36" height="36" rx="10" fill="#EEF2FF" />
        <rect x="8" y="12" width="14" height="14" rx="3" fill="#4F46E5" />
        <path
          d="M12.5 16.5H17.5M15 16.5V22"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24.5" cy="12.5" r="3" fill="#6366F1" />
        <path
          d="M22 17.5H27C28.1 17.5 29 18.4 29 19.5V22.5C29 24.16 27.66 25.5 26 25.5H23"
          fill="#818CF8"
        />
      </svg>
    );
  }
  if (id === "meet") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect width="36" height="36" rx="10" fill="#ECFDF5" />
        <rect x="7.5" y="11" width="14" height="14" rx="3" fill="#059669" />
        <path d="M21.5 15.2L28.5 11.2V24.8L21.5 20.8V15.2Z" fill="#10B981" />
        <path d="M11 11H15.5V15.5H11V11Z" fill="#34D399" />
        <path d="M11 20.5H15.5V25H11V20.5Z" fill="#0284C7" />
      </svg>
    );
  }
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#EFF6FF" />
      <rect x="7" y="11.5" width="15" height="13" rx="3.2" fill="#0284C7" />
      <path d="M23 15L29 11.8V24.2L23 21V15Z" fill="#38BDF8" />
    </svg>
  );
}

export function PartnerWordmark({ id, name }) {
  const styles = {
    poly: { color: "#0F172A", accent: "#0284C7" },
    logitech: { color: "#0F172A", accent: "#0EA5E9" },
    barco: { color: "#0F172A", accent: "#DC2626" },
    yealink: { color: "#0F172A", accent: "#0284C7" },
  };
  const palette = styles[id] || { color: "#0F172A", accent: "#0284C7" };

  return (
    <span className="partner-wordmark" style={{ color: palette.color }}>
      <span className="partner-wordmark__dot" style={{ background: palette.accent }} />
      {name}
    </span>
  );
}
