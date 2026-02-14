type AgentType = 'nexus' | 'atlas' | 'vector' | 'herald' | 'sentinel' | 'oracle' | 'phantom' | 'forge'

function NexusAvatar() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Network/connection graph */}
      <circle cx="20" cy="10" r="3" fill="#D16847" />
      <circle cx="10" cy="28" r="3" fill="#D16847" />
      <circle cx="30" cy="28" r="3" fill="#D16847" />
      <circle cx="20" cy="22" r="2" fill="#0A0A0A" />
      <line x1="20" y1="13" x2="20" y2="20" stroke="#D16847" strokeWidth="1.5" />
      <line x1="12" y1="26" x2="18" y2="23" stroke="#D16847" strokeWidth="1.5" />
      <line x1="28" y1="26" x2="22" y2="23" stroke="#D16847" strokeWidth="1.5" />
      <circle cx="6" cy="16" r="1.5" fill="#D16847" opacity="0.4" />
      <circle cx="34" cy="16" r="1.5" fill="#D16847" opacity="0.4" />
      <line x1="8" y1="16" x2="17" y2="11" stroke="#D16847" strokeWidth="1" opacity="0.4" />
      <line x1="32" y1="16" x2="23" y2="11" stroke="#D16847" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

function AtlasAvatar() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Map/grid structure with brackets */}
      <rect x="8" y="8" width="24" height="24" rx="1" stroke="#D16847" strokeWidth="1.5" />
      <line x1="8" y1="16" x2="32" y2="16" stroke="#D16847" strokeWidth="1" opacity="0.5" />
      <line x1="8" y1="24" x2="32" y2="24" stroke="#D16847" strokeWidth="1" opacity="0.5" />
      <line x1="16" y1="8" x2="16" y2="32" stroke="#D16847" strokeWidth="1" opacity="0.5" />
      <line x1="24" y1="8" x2="24" y2="32" stroke="#D16847" strokeWidth="1" opacity="0.5" />
      <rect x="17" y="17" width="6" height="6" fill="#D16847" />
      <rect x="9" y="9" width="6" height="6" fill="#0A0A0A" opacity="0.15" />
      <rect x="25" y="25" width="6" height="6" fill="#0A0A0A" opacity="0.15" />
    </svg>
  )
}

function VectorAvatar() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Arrow/direction with coordinate feel */}
      <line x1="8" y1="32" x2="34" y2="6" stroke="#D16847" strokeWidth="2" />
      <polygon points="34,6 28,8 32,12" fill="#D16847" />
      <circle cx="14" cy="26" r="2" fill="#0A0A0A" />
      <circle cx="20" cy="20" r="1.5" fill="#D16847" opacity="0.5" />
      <line x1="6" y1="34" x2="6" y2="6" stroke="#0A0A0A" strokeWidth="1" opacity="0.2" />
      <line x1="6" y1="34" x2="36" y2="34" stroke="#0A0A0A" strokeWidth="1" opacity="0.2" />
      <circle cx="8" cy="32" r="2.5" stroke="#D16847" strokeWidth="1" fill="none" />
    </svg>
  )
}

function HeraldAvatar() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Megaphone/broadcast */}
      <path d="M10 16 L10 24 L16 24 L26 30 L26 10 L16 16 Z" fill="#D16847" />
      <rect x="6" y="17" width="4" height="6" rx="1" fill="#0A0A0A" />
      <line x1="30" y1="14" x2="35" y2="11" stroke="#D16847" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="20" x2="36" y2="20" stroke="#D16847" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="26" x2="35" y2="29" stroke="#D16847" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SentinelAvatar() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield with radar sweep */}
      <path d="M20 4 L32 12 L32 24 C32 30 26 36 20 38 C14 36 8 30 8 24 L8 12 Z" stroke="#D16847" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="20" r="6" stroke="#0A0A0A" strokeWidth="1" opacity="0.3" />
      <circle cx="20" cy="20" r="2" fill="#D16847" />
      <line x1="20" y1="20" x2="26" y2="14" stroke="#D16847" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 14 A6 6 0 0 1 26 20" stroke="#D16847" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  )
}

function OracleAvatar() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Eye/crystal */}
      <ellipse cx="20" cy="20" rx="14" ry="9" stroke="#D16847" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="20" r="5" fill="#D16847" />
      <circle cx="20" cy="20" r="2" fill="#0A0A0A" />
      <circle cx="18" cy="18" r="1" fill="white" opacity="0.6" />
      <line x1="4" y1="20" x2="6" y2="20" stroke="#D16847" strokeWidth="1" opacity="0.4" />
      <line x1="34" y1="20" x2="36" y2="20" stroke="#D16847" strokeWidth="1" opacity="0.4" />
      <line x1="8" y1="12" x2="10" y2="14" stroke="#D16847" strokeWidth="1" opacity="0.3" />
      <line x1="30" y1="26" x2="32" y2="28" stroke="#D16847" strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

function PhantomAvatar() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ghost/stealth silhouette */}
      <path d="M12 34 L12 18 C12 12 15.6 6 20 6 C24.4 6 28 12 28 18 L28 34 L25 30 L22 34 L20 30 L18 34 L15 30 Z" fill="#D16847" opacity="0.85" />
      <circle cx="16" cy="18" r="2" fill="#0A0A0A" />
      <circle cx="24" cy="18" r="2" fill="#0A0A0A" />
      <circle cx="16.5" cy="17.5" r="0.8" fill="white" opacity="0.5" />
      <circle cx="24.5" cy="17.5" r="0.8" fill="white" opacity="0.5" />
    </svg>
  )
}

function ForgeAvatar() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Anvil/hammer */}
      <rect x="10" y="24" width="20" height="4" rx="1" fill="#D16847" />
      <rect x="8" y="28" width="24" height="3" rx="1" fill="#0A0A0A" opacity="0.3" />
      <path d="M14 24 L14 20 C14 18 16 16 20 16 C24 16 26 18 26 20 L26 24" fill="#D16847" opacity="0.5" />
      <rect x="18" y="6" width="4" height="12" rx="1" fill="#0A0A0A" />
      <rect x="14" y="6" width="12" height="4" rx="1" fill="#D16847" />
      {/* Sparks */}
      <circle cx="10" cy="14" r="1" fill="#D16847" opacity="0.4" />
      <circle cx="30" cy="12" r="1" fill="#D16847" opacity="0.4" />
      <circle cx="8" cy="10" r="0.7" fill="#D16847" opacity="0.3" />
    </svg>
  )
}

const avatarMap: Record<AgentType, () => React.JSX.Element> = {
  nexus: NexusAvatar,
  atlas: AtlasAvatar,
  vector: VectorAvatar,
  herald: HeraldAvatar,
  sentinel: SentinelAvatar,
  oracle: OracleAvatar,
  phantom: PhantomAvatar,
  forge: ForgeAvatar,
}

export function AgentAvatar({ type }: { type: AgentType }) {
  const Avatar = avatarMap[type]
  return <Avatar />
}
