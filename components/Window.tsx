import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { X, Minus, Square } from 'lucide-react';

interface WindowProps {
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isActive: boolean;
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void; // Placeholder for now
  onFocus: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  initialPosition?: { x: number; y: number };
}

const Window: React.FC<WindowProps> = ({
  title,
  isOpen,
  isMinimized,
  isActive,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
  children,
  icon,
  className = "",
  initialPosition = { x: 50, y: 50 }
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <Draggable
      handle=".window-title-bar"
      defaultPosition={initialPosition}
      nodeRef={nodeRef}
      onMouseDown={onFocus}
      bounds="parent"
    >
      <div
        ref={nodeRef}
        className={`absolute flex flex-col ${isMinimized ? 'pointer-events-none' : 'pointer-events-auto'}`}
        style={{ 
          zIndex,
          // Note: We do not set display: none here so that the animation has time to play visually.
          // pointer-events-none ensures clicking through when minimized.
        }}
      >
        {/* Animation Wrapper: Separates dragging transforms from scale/opacity animations */}
        <div className={`
            flex flex-col w-full h-full
            rounded-t-lg shadow-2xl overflow-hidden
            ${className}
            xp-transition ${isMinimized ? 'xp-minimized' : 'xp-open'}
          `}
          style={{
            border: '3px solid #0054E3',
            borderBottom: '3px solid #0054E3',
            backgroundColor: '#ECE9D8',
            minWidth: '320px',
          }}
        >
          {/* Title Bar */}
          <div 
            className={`window-title-bar h-8 flex items-center justify-between px-2 cursor-default select-none
              ${isActive 
                ? 'bg-gradient-to-r from-[#0054E3] via-[#2C89A0] to-[#0054E3]' 
                : 'bg-gradient-to-r from-[#7697CE] via-[#7B9DCE] to-[#7697CE]'
              }
            `}
          >
            <div className="flex items-center gap-2 text-white font-bold text-sm drop-shadow-md truncate">
              {icon && <div className="w-4 h-4">{icon}</div>}
              <span>{title}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <button 
                onClick={(e) => { e.stopPropagation(); onMinimize(); }}
                className="w-5 h-5 bg-[#2C89A0] border border-white/50 rounded flex items-center justify-center hover:brightness-110 active:brightness-90 shadow-sm"
              >
                <Minus className="w-3 h-3 text-white" strokeWidth={4} />
              </button>
              <button 
                className="w-5 h-5 bg-[#2C89A0] border border-white/50 rounded flex items-center justify-center hover:brightness-110 active:brightness-90 shadow-sm opacity-50 cursor-not-allowed"
              >
                <Square className="w-3 h-3 text-white" strokeWidth={3} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="w-5 h-5 bg-[#E0422E] border border-white/50 rounded flex items-center justify-center hover:brightness-110 active:brightness-90 shadow-sm"
              >
                <X className="w-3 h-3 text-white" strokeWidth={4} />
              </button>
            </div>
          </div>

          {/* Content Area (Menubar + Body) */}
          <div className="flex-1 flex flex-col bg-[#ECE9D8] relative">
            {children}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Window;