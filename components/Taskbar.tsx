import React, { useState, useEffect } from 'react';
import { AppId, WindowState } from '../types';
import { Volume2, ChevronUp } from 'lucide-react';

interface TaskbarProps {
  windows: WindowState[];
  activeWindowId: AppId | null;
  onWindowClick: (id: AppId) => void;
  onStartClick: () => void;
  isStartOpen: boolean;
}

const Taskbar: React.FC<TaskbarProps> = ({ windows, activeWindowId, onWindowClick, onStartClick, isStartOpen }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[30px] bg-gradient-to-b from-[#245DDA] via-[#3F8CF3] to-[#245DDA] flex items-center z-50 border-t border-[#3F8CF3] select-none">
      {/* Start Button */}
      <button
        onClick={onStartClick}
        className={`
          h-full px-2 sm:px-4 flex items-center gap-1 sm:gap-2 rounded-r-[10px] 
          bg-gradient-to-b from-[#388924] via-[#5CB83B] to-[#388924]
          shadow-[inset_1px_1px_0px_rgba(255,255,255,0.4),2px_0px_5px_rgba(0,0,0,0.5)]
          hover:brightness-110 active:brightness-95 active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5)]
          transition-all
          ${isStartOpen ? 'brightness-90 shadow-inner' : ''}
        `}
      >
        <div className="relative w-4 h-4 sm:w-5 sm:h-5 italic font-bold text-white flex items-center justify-center bg-white rounded-full p-[2px]">
           <svg viewBox="0 0 88 88" className="w-full h-full">
             <path fill="#f35325" d="M0 0h42v42H0z"/>
             <path fill="#81bc06" d="M46 0h42v42H46z"/>
             <path fill="#05a6f0" d="M0 46h42v42H0z"/>
             <path fill="#ffba08" d="M46 46h42v42H46z"/>
           </svg>
        </div>
        <span className="text-white font-bold italic text-sm sm:text-base drop-shadow-md pr-1 sm:pr-2">
          start
        </span>
      </button>

      {/* Divider */}
      <div className="w-[2px] h-full bg-blue-800/50 mx-1 sm:mx-2 hidden sm:block"></div>

      {/* Open Windows Area */}
      <div className="flex-1 flex gap-1 px-1 overflow-x-auto h-full items-center">
        {windows.filter(w => w.isOpen).map((win) => (
          <button
            key={win.id}
            onClick={() => onWindowClick(win.id)}
            className={`
              h-[24px] px-2 min-w-[100px] max-w-[160px] flex items-center gap-2 rounded-[3px]
              text-xs text-white truncate transition-all
              ${activeWindowId === win.id && !win.isMinimized
                ? 'bg-[#1e52b7] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)] font-bold' 
                : 'bg-[#3C81F3] hover:bg-[#5398FE] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.3)]'
              }
            `}
          >
            {/* Generic Icon */}
            <div className="w-3 h-3 bg-white/20 rounded-sm flex-shrink-0" />
            <span className="truncate">{win.title}</span>
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className="h-full bg-[#0B9CEE] border-l border-[#13499F] px-3 flex items-center gap-2 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)] min-w-fit">
        <ChevronUp className="w-3 h-3 text-white hidden sm:block" />
        <div className="w-4 h-4 bg-white/20 rounded-full border border-white/40 hidden sm:block"></div>
        <Volume2 className="w-3 h-3 text-white hidden sm:block" />
        <span className="text-white text-xs font-thin ml-1">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default Taskbar;
