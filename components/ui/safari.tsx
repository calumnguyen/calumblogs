import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface SafariProps extends HTMLAttributes<HTMLDivElement> {
  url?: string
  src?: string
}

export function Safari({
  src = "https://worldmaxxing.com",
  url = "worldmaxxing.com",
  className,
  ...props
}: SafariProps) {

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-white dark:bg-neutral-900 shadow-2xl",
        className
      )}
      {...props}
    >
      {/* Safari Browser Chrome */}
      <div className="relative w-full bg-[#E5E5E5] dark:bg-[#404040]">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-3 py-2.5 bg-[#E5E5E5] dark:bg-[#404040] border-b border-[#D4D4D4] dark:border-[#525252]">
          {/* Traffic Lights */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>

          {/* URL Bar */}
          <div className="flex-1 mx-4 flex items-center gap-2">
            {/* Back/Forward Buttons */}
            <div className="flex items-center gap-1">
              <button className="p-1.5 hover:bg-white/50 dark:hover:bg-black/20 rounded transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#A3A3A3]">
                  <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="p-1.5 hover:bg-white/50 dark:hover:bg-black/20 rounded transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#A3A3A3]">
                  <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Address Bar */}
            <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#262626] rounded-md shadow-sm">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#A3A3A3] flex-shrink-0">
                <path d="M6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1Z" stroke="currentColor" strokeWidth="1"/>
                <path d="M6 3V6L8 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              <span className="text-xs text-[#A3A3A3] truncate font-medium">{url}</span>
            </div>

            {/* Toolbar Icons */}
            <div className="flex items-center gap-1">
              <button className="p-1.5 hover:bg-white/50 dark:hover:bg-black/20 rounded transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#A3A3A3]">
                  <rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M3 6H13" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </button>
              <button className="p-1.5 hover:bg-white/50 dark:hover:bg-black/20 rounded transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#A3A3A3]">
                  <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="p-1.5 hover:bg-white/50 dark:hover:bg-black/20 rounded transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#A3A3A3]">
                  <rect x="4" y="5" width="4" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
                  <rect x="9" y="4" width="3" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Website Content - Live iframe with scrollable container */}
      <div className="relative w-full h-[500px] bg-white dark:bg-neutral-950">
        {/* Scrollable container */}
        <div className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-thin">
          {/* Iframe is taller than container so you can scroll to see more content */}
          <iframe
            src={src}
            className="w-full border-0 pointer-events-none"
            style={{ height: '2000px' }}
            title={`Preview of ${url}`}
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

