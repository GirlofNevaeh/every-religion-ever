type IconProps = { className?: string };

export function CrossIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M28 8h8v16h16v8H36v24h-8V32H12v-8h16V8z" fill="currentColor" />
    </svg>
  );
}

export function DomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M30 14h4v4a16 16 0 0 1 14 14H16A16 16 0 0 1 30 18v-4zM12 36h40v6H12zM18 46h6v8h-6zM40 46h6v8h-6zM28 46h8v8h-8z"
        fill="currentColor"
      />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 6l8 16h16l-13 10 5 16-16-10-16 10 5-16L8 22h16z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path d="M32 14l6.2 12.2h12.8L41.2 34.4 46 47 32 40.2 18 47l4.8-12.6L13 26.2h12.8z" fill="currentColor" />
    </svg>
  );
}

export function DavidStar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M32 8 54 46H10zM32 56 10 18h44z" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function ShikharaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M32 4 46 28H18zM20 30h24l6 10H14zM12 42h40v6H12zM18 50h28v8H18z" fill="currentColor" />
    </svg>
  );
}

export function StupaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M30 6h4v6h6v4H24v-4h6V6zM16 28a16 12 0 1 1 32 0v4H16zM12 36h40v6H12zM20 46h24v6H20z" fill="currentColor" />
    </svg>
  );
}

export function GurdwaraIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M22 30a10 10 0 0 1 20 0v4H22zM16 36h32v6H16zM20 44h24v8H20zM44 8h3v28h-3zM47 10l10 6-10 4z" fill="currentColor" />
    </svg>
  );
}

export function KhandaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path
        d="M18 64c0-20 8-34 22-40M62 64c0-20-8-34-22-40"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M14 62h10M56 62h10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="40" cy="46" r="13" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <path d="M40 8l3.2 8v34L40 70l-3.2-20V16z" fill="currentColor" />
    </svg>
  );
}

export function WheelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <path
        d="M32 12v8M32 44v8M12 32h8M44 32h8M18 18l6 6M40 40l6 6M46 18l-6 6M24 40l-6 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DiyaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M10 40c6 10 38 10 44 0-8 6-36 6-44 0z" fill="currentColor" />
      <path d="M32 36c0-10 4-16 4-22 6 8 6 14 4 22" fill="currentColor" />
    </svg>
  );
}

export function BookStandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M16 46h32l4 8H12z" fill="currentColor" />
      <path d="M22 14h20v32H22z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M32 14v32" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function CandleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M30 28h4v20h-4z" fill="currentColor" />
      <path d="M32 10c4 6 4 10 0 14-4-4-4-8 0-14z" fill="currentColor" />
      <path d="M22 48h20v6H22z" fill="currentColor" />
    </svg>
  );
}
