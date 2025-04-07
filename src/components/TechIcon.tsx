export default function TechIcon({ component }: { component: React.ElementType }) {
  const Component = component;
  return (
    <div className="relative inline-block">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="rgb(110 231 183)" />
            <stop offset="100%" stopColor="rgb(56 189 248)" />
          </linearGradient>
        </defs>
      </svg>
      <Component className="size-10" style={{ fill: "url(#icon-gradient)" }} />
    </div>
  );
}
