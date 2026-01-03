import React from 'react';

interface DesktopIconProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ label, icon, onClick }) => {
  return (
    <div 
      className="group flex flex-col items-center justify-center w-24 gap-1 p-2 cursor-pointer hover:bg-blue-500/30 rounded border border-transparent hover:border-blue-300/50"
      onDoubleClick={onClick}
    >
      <div className="w-12 h-12 drop-shadow-md">
        {icon}
      </div>
      <span className="text-white text-shadow-sm text-xs font-bold text-center drop-shadow-md leading-tight group-hover:bg-[#0054E3] group-hover:px-1 group-hover:rounded-sm">
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;
