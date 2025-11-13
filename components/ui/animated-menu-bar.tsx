import React from 'react';

interface MenuBarProps {
  active?: 'home' | 'services' | 'csuite';
  onSelect?: (key: 'home' | 'services' | 'csuite') => void;
}

const icons = {
  home: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 9.5L12 4l9 5.5v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z"/>
      <path d="M9 22V12h6v10"/>
    </svg>
  ),
  services: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  csuite: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
};

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, active, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const tooltipTimeout = React.useRef<NodeJS.Timeout | null>(null);

  // Calculate width based on label length (min 44px for icon, plus label)
  const expandedWidth = Math.max(44 + label.length * 9 + 32, 120); // 9px per char + 32px padding

  // Responsive: hide text and keep button compact on small screens
  const isExpanded = (hovered || active);

  // Show tooltip on mobile tap
  const handleMobileTooltip = (e: React.MouseEvent): void => {
    if (window.innerWidth < 640) {
      e.preventDefault();
      setShowTooltip(true);
      if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
      tooltipTimeout.current = setTimeout(() => { setShowTooltip(false); }, 1200);
    }
    if (onClick) onClick();
  };

  React.useEffect(() => () => {
    if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
  }, []);

  return (
<button
      type="button"
      aria-label={label}
      className={`flex items-center rounded-xl border transition-colors focus:outline-none relative overflow-visible
        ${active ? 'border-zinc-400 dark:border-zinc-400 bg-zinc-900 dark:bg-zinc-900 text-white dark:text-white font-semibold' : 'border-zinc-300 dark:border-transparent text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/60'}
        duration-300
        w-11 sm:w-auto
        px-0 sm:px-4
        justify-center sm:justify-start
        bg-white dark:bg-zinc-950
      `}
      style={{
        minWidth: 44,
        minHeight: 44,
        width: undefined, // let Tailwind handle width
        transition: 'background 0.2s, border 0.2s',
        paddingLeft: undefined,
        paddingRight: undefined,
        paddingTop: 8,
        paddingBottom: 8,
      }}
      onMouseEnter={() => { setHovered(true); }}
      onMouseLeave={() => { setHovered(false); }}
      onClick={handleMobileTooltip}
    >
      {/* Tooltip for mobile view */}
      <span
        className={`sm:hidden absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded px-2 py-1 shadow transition-opacity duration-200 pointer-events-none z-20
          ${showTooltip ? 'opacity-100' : 'opacity-0'}`}
      >
        {label}
      </span>
      <span className="flex items-center justify-center w-11 h-11">
        {icon}
      </span>
      <span
        className={`text-sm transition-all duration-300 whitespace-nowrap pointer-events-none ml-2
          hidden sm:inline
          ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}
        style={{
          transition: 'opacity 0.3s, width 0.35s cubic-bezier(0.4,0,0.2,1), margin 0.3s',
          width: isExpanded ? expandedWidth - 44 - 32 : 0, // icon + padding
        }}
      >
        {label}
      </span>
    </button>
  );
};

export const MenuBar = ({ active = 'home', onSelect }: MenuBarProps): React.JSX.Element => {
  return (
  <nav className="flex items-center gap-2 bg-white dark:bg-zinc-950 p-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 w-fit mx-auto transition-all duration-300">
      <IconButton icon={icons.home} label="Home" active={active === 'home'} onClick={() => onSelect?.('home')} />
      <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-2" />
      <IconButton icon={icons.services} label="Services" active={active === 'services'} onClick={() => onSelect?.('services')} />
      <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-2" />
      <IconButton icon={icons.csuite} label="C-Suite" active={active === 'csuite'} onClick={() => onSelect?.('csuite')} />
    </nav>
  );
};

