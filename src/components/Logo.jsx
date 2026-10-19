import { useState } from 'react';

// Uses /public/logo.png when present; falls back to the text wordmark.
export default function Logo({ className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className={`wordmark ${className}`}><span className="wordmark-no">No.3</span> Hangout</span>;
  return <img className={`logo-img ${className}`} src="/logo.png" alt="No.3 Hangout" width="256" height="256" onError={() => setFailed(true)} />;
}
