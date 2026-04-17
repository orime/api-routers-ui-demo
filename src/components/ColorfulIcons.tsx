import React from 'react';

// === Stat Card Icons ===

export const ShieldCheck = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{filter: 'drop-shadow(0 4px 6px rgba(52, 211, 153, 0.4))'}}>
    <defs>
      <linearGradient id="shieldbg" x1="0" y1="0" x2="32" y2="32">
        <stop stopColor="#10b981" />
        <stop offset="1" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="shieldtrim" x1="0" y1="0" x2="32" y2="32">
        <stop stopColor="#a7f3d0" />
        <stop offset="1" stopColor="#34d399" />
      </linearGradient>
    </defs>
    <path d="M16 2 L28 8 V16 C28 24 22 28 16 30 C10 28 4 24 4 16 V8 L16 2 Z" fill="url(#shieldbg)" stroke="url(#shieldtrim)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10 16 L14 20 L22 12" stroke="#ecfdf5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ThunderboltTimer = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{filter: 'drop-shadow(0 4px 6px rgba(59, 130, 246, 0.4))'}}>
    <defs>
      <linearGradient id="timerbody" x1="0" y1="0" x2="32" y2="32">
        <stop stopColor="#3b82f6" />
        <stop offset="1" stopColor="#1e3a8a" />
      </linearGradient>
      <linearGradient id="timerbolt" x1="10" y1="8" x2="22" y2="24">
        <stop stopColor="#fde047" />
        <stop offset="1" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="18" r="12" fill="url(#timerbody)" />
    <path d="M11 4 L21 4" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 2 L16 6" stroke="#bfdbfe" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M17 10 L11 18 H17 L15 26 L23 15 H17 L17 10 Z" fill="url(#timerbolt)" />
    <circle cx="25" cy="10" r="2" fill="#60a5fa" />
  </svg>
);

export const CosmicClock = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{filter: 'drop-shadow(0 4px 6px rgba(168, 85, 247, 0.4))'}}>
    <defs>
      <linearGradient id="clockbody" x1="0" y1="0" x2="32" y2="32">
        <stop stopColor="#a855f7" />
        <stop offset="1" stopColor="#4c1d95" />
      </linearGradient>
      <linearGradient id="clockring" x1="0" y1="32" x2="32" y2="0">
        <stop stopColor="#f3e8ff" />
        <stop offset="1" stopColor="#c084fc" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="14" fill="url(#clockbody)" />
    <circle cx="16" cy="16" r="10" stroke="url(#clockring)" strokeWidth="2.5" strokeDasharray="5 3" />
    <circle cx="16" cy="16" r="3" fill="#f3e8ff" />
    <path d="M16 16 L16 9 M16 16 L21 19" stroke="#f3e8ff" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const NeuralFlask = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{filter: 'drop-shadow(0 4px 6px rgba(6, 182, 212, 0.4))'}}>
    <defs>
      <linearGradient id="flaskliquid" x1="0" y1="12" x2="32" y2="32">
        <stop stopColor="#22d3ee" />
        <stop offset="1" stopColor="#0369a1" />
      </linearGradient>
    </defs>
    <path d="M13 4 H19 V10 L26 24 C27 26 25 28 23 28 H9 C7 28 5 26 6 24 L13 10 V4 Z" fill="rgba(8,145,178,0.3)" stroke="#7dd3fc" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9 20 L23 20 C24 22 23.5 26 23 26 H9 C8.5 26 8 22 9 20 Z" fill="url(#flaskliquid)"/>
    <circle cx="12" cy="16" r="1.5" fill="#bae6fd" />
    <circle cx="18" cy="14" r="2" fill="#bae6fd" />
    <circle cx="15" cy="18" r="1.5" fill="#bae6fd" />
    <circle cx="16" cy="23" r="2" fill="#fff" fillOpacity="0.8" />
  </svg>
);

// === Platform Logos ===

export const T8Logo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="12" cy="12" r="8" fill="#fda4af" mixBlendMode="lighten" />
    <circle cx="20" cy="12" r="8" fill="#fde047" mixBlendMode="lighten" />
    <circle cx="12" cy="20" r="8" fill="#c084fc" mixBlendMode="lighten" />
    <circle cx="20" cy="20" r="8" fill="#93c5fd" mixBlendMode="lighten" />
    <circle cx="16" cy="16" r="3" fill="#ffffff" />
  </svg>
);

export const ApiMartLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="apim1" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#38bdf8"/><stop offset="1" stopColor="#1e3a8a"/></linearGradient>
      <linearGradient id="apim2" x1="32" y1="0" x2="0" y2="32"><stop stopColor="#7dd3fc"/><stop offset="1" stopColor="#2563eb"/></linearGradient>
    </defs>
    <circle cx="16" cy="16" r="14" fill="url(#apim1)" />
    <circle cx="16" cy="16" r="8" fill="url(#apim2)" />
    <circle cx="16" cy="16" r="3" fill="#ffffff" />
  </svg>
);

export const ModelScopeLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="msg1" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#818cf8"/><stop offset="1" stopColor="#312e81"/></linearGradient>
    </defs>
    <path d="M16 2 L28 9 L28 23 L16 30 L4 23 L4 9 Z" fill="url(#msg1)"/>
    <path d="M16 7 L23 11 L23 21 L16 25 L9 21 L9 11 Z" fill="#4f46e5" fillOpacity="0.8"/>
    <path d="M16 12 L19 14 L19 18 L16 20 L13 18 L13 14 Z" fill="#c7d2fe"/>
  </svg>
);

export const GRSAILogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="grs1" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#34d399"/><stop offset="1" stopColor="#064e3b"/></linearGradient>
    </defs>
    <path d="M16 4 A12 12 0 1 0 28 16 H22 A6 6 0 1 1 16 10 V4 Z" fill="url(#grs1)"/>
    <circle cx="16" cy="16" r="4" fill="#6ee7b7" />
  </svg>
);

export const SiliconLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="sil1" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#d8b4fe"/><stop offset="1" stopColor="#581c87"/></linearGradient>
    </defs>
    <rect x="4" y="4" width="24" height="24" rx="6" fill="url(#sil1)"/>
    <path d="M10 10 H16 V14 H12 V22 H16 M22 10 H20 V22 H22" stroke="#f3e8ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const VolcanoLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="vol1" x1="0" y1="32" x2="16" y2="0"><stop stopColor="#0284c7"/><stop offset="1" stopColor="#7dd3fc"/></linearGradient>
      <linearGradient id="vol2" x1="16" y1="32" x2="32" y2="8"><stop stopColor="#1e3a8a"/><stop offset="1" stopColor="#3b82f6"/></linearGradient>
    </defs>
    <path d="M4 26 L14 10 L22 26 Z" fill="url(#vol1)"/>
    <path d="M12 26 L22 6 L30 26 Z" fill="url(#vol2)" fillOpacity="0.9"/>
  </svg>
);

export const PlatformIcon = ({ name, size = 24 }: { name: string, size?: number }) => {
  switch(name) {
    case 'T8 Star': return <T8Logo size={size}/>;
    case 'ApiMart': return <ApiMartLogo size={size}/>;
    case 'ModelScope': return <ModelScopeLogo size={size}/>;
    case 'GRSAI': return <GRSAILogo size={size}/>;
    case '硅基流动': return <SiliconLogo size={size}/>;
    case '火山引擎': return <VolcanoLogo size={size}/>;
    default: return <T8Logo size={size}/>;
  }
}
