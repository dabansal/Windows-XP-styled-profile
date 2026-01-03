import React, { useState } from 'react';
import { AppId } from '../types';
import { User, Briefcase, Globe, Mail, Play, Settings, LogOut, Terminal } from 'lucide-react';

interface StartMenuProps {
  isOpen: boolean;
  onAppClick: (id: AppId) => void;
  onClose: () => void;
  userName: string;
  userImage?: string;
}

const StartMenu: React.FC<StartMenuProps> = ({ isOpen, onAppClick, onClose, userName, userImage }) => {
  const [imgError, setImgError] = useState(false);

  if (!isOpen) return null;

  const handleClick = (id: AppId) => {
    onAppClick(id);
    onClose();
  };

  return (
    <div className="fixed bottom-[30px] left-0 w-[300px] sm:w-[380px] bg-white rounded-t-lg shadow-2xl z-[60] flex flex-col overflow-hidden border-2 border-[#0054E3]">
      {/* Header */}
      <div className="h-14 bg-gradient-to-b from-[#1571E3] to-[#2E87E8] flex items-center px-4 gap-3 shadow-md border-b-2 border-[#E57E31]">
        <div className="w-10 h-10 rounded border-2 border-white bg-[#D7E4F2] overflow-hidden flex items-center justify-center relative shadow-sm">
             {userImage && !imgError ? (
               <img 
                  src={userImage} 
                  alt={userName} 
                  className="w-full h-full object-cover" 
                  onError={() => setImgError(true)}
               />
             ) : (
               <User className="text-gray-400 w-8 h-8" />
             )}
        </div>
        <span className="text-white font-bold text-lg drop-shadow-md">{userName}</span>
      </div>

      {/* Body */}
      <div className="flex h-[380px]">
        {/* Left Column (White) */}
        <div className="flex-1 bg-white py-2 px-1 flex flex-col gap-1">
          <MenuLeftItem 
            icon={<Briefcase className="w-5 h-5 text-gray-600" />} 
            title="My Documents" 
            subtitle="Experience"
            onClick={() => handleClick(AppId.MY_DOCUMENTS)}
            highlight
          />
           <MenuLeftItem 
            icon={<Globe className="w-5 h-5 text-blue-500" />} 
            title="Internet Explorer" 
            subtitle="Projects"
            onClick={() => handleClick(AppId.INTERNET_EXPLORER)}
            highlight
          />
          <MenuLeftItem 
            icon={<Mail className="w-5 h-5 text-blue-400" />} 
            title="Outlook Express" 
            subtitle="E-mail"
            onClick={() => handleClick(AppId.OUTLOOK_EXPRESS)}
            highlight
          />
           <MenuLeftItem 
            icon={<Play className="w-5 h-5 text-orange-500" />} 
            title="Media Player" 
            subtitle="Skills"
            onClick={() => handleClick(AppId.MEDIA_PLAYER)}
          />
          
          <div className="border-t border-gray-200 my-1 mx-2" />

          <MenuLeftItem 
            icon={<Terminal className="w-5 h-5 text-gray-700" />} 
            title="All Programs" 
            subtitle=""
            onClick={() => {}}
            arrow
          />
        </div>

        {/* Right Column (Blue) */}
        <div className="w-[140px] bg-[#D3E5FA] border-l border-[#95BDEE] py-2 px-2 flex flex-col gap-1 text-[#00136B]">
          <MenuRightItem 
            icon={<User className="w-4 h-4" />} 
            title="My Computer" 
            bold
            onClick={() => handleClick(AppId.MY_COMPUTER)}
          />
          <MenuRightItem 
            icon={<Settings className="w-4 h-4" />} 
            title="Control Panel" 
            onClick={() => handleClick(AppId.CONTROL_PANEL)}
          />
          <div className="flex-1" />
        </div>
      </div>

      {/* Footer */}
      <div className="h-10 bg-gradient-to-b from-[#3E80ED] to-[#205BAF] flex items-center justify-end px-4 gap-3 border-t border-[#0054E3]">
         <button className="flex items-center gap-1 text-white hover:bg-[#1C50B3] px-2 py-1 rounded">
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Log Off</span>
         </button>
         <button className="flex items-center gap-1 text-white hover:bg-[#1C50B3] px-2 py-1 rounded">
            <div className="w-4 h-4 rounded-full bg-[#E0422E] border border-white flex items-center justify-center">
                <div className="w-1 h-2 border-r border-white transform rotate-45"></div>
            </div>
            <span className="text-sm">Turn Off Computer</span>
         </button>
      </div>
    </div>
  );
};

const MenuLeftItem = ({ icon, title, subtitle, highlight, arrow, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`
    flex items-center gap-2 p-2 rounded hover:bg-[#316AC5] hover:text-white group w-full text-left
  `}>
    <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
    <div className="flex flex-col">
      <span className={`text-sm ${highlight ? 'font-bold text-gray-800 group-hover:text-white' : 'text-gray-700 group-hover:text-white'}`}>{title}</span>
      {subtitle && <span className="text-xs text-gray-500 group-hover:text-blue-100">{subtitle}</span>}
    </div>
    {arrow && <div className="ml-auto w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-black group-hover:border-l-white" />}
  </button>
);

const MenuRightItem = ({ icon, title, bold, onClick }: any) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-2 p-1 rounded hover:bg-[#316AC5] hover:text-white text-left w-full">
    <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
    <span className={`text-sm ${bold ? 'font-bold' : ''}`}>{title}</span>
  </button>
);

export default StartMenu;