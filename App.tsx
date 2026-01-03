import React, { useState } from 'react';
import { AppId, WindowState } from './types';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import { User, Briefcase, Globe, Mail, Play, Settings } from 'lucide-react';
import { PROFILE } from './constants';

// App Components
import MyComputer from './apps/MyComputer';
import MyDocuments from './apps/MyDocuments';
import InternetExplorer from './apps/InternetExplorer';
import OutlookExpress from './apps/OutlookExpress';
import MediaPlayer from './apps/MediaPlayer';
import ControlPanel from './apps/ControlPanel';

const App: React.FC = () => {
  // State
  const [windows, setWindows] = useState<WindowState[]>([
     { id: AppId.MY_COMPUTER, title: "My Computer", isOpen: true, isMinimized: false, isMaximized: false, zIndex: 10 }
  ]);
  const [activeWindowId, setActiveWindowId] = useState<AppId | null>(AppId.MY_COMPUTER);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [nextZIndex, setNextZIndex] = useState(11);

  // Window Management Logic
  const openWindow = (id: AppId, title: string) => {
    setWindows(prev => {
      const exists = prev.find(w => w.id === id);
      if (exists) {
        // Restore if minimized and bring to front
        return prev.map(w => w.id === id ? { ...w, isMinimized: false, zIndex: nextZIndex } : w);
      }
      return [...prev, { id, title, isOpen: true, isMinimized: false, isMaximized: false, zIndex: nextZIndex }];
    });
    setNextZIndex(n => n + 1);
    setActiveWindowId(id);
    setIsStartOpen(false);
  };

  const closeWindow = (id: AppId) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const minimizeWindow = (id: AppId) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const focusWindow = (id: AppId) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: nextZIndex } : w));
    setNextZIndex(n => n + 1);
    setActiveWindowId(id);
    setIsStartOpen(false);
  };

  const toggleStart = () => setIsStartOpen(!isStartOpen);

  const getWindowContent = (id: AppId) => {
    switch (id) {
      case AppId.MY_COMPUTER: return <MyComputer />;
      case AppId.MY_DOCUMENTS: return <MyDocuments />;
      case AppId.INTERNET_EXPLORER: return <InternetExplorer />;
      case AppId.OUTLOOK_EXPRESS: return <OutlookExpress />;
      case AppId.MEDIA_PLAYER: return <MediaPlayer />;
      case AppId.CONTROL_PANEL: return <ControlPanel />;
      default: return null;
    }
  };

  const getWindowIcon = (id: AppId) => {
      switch(id) {
          case AppId.MY_COMPUTER: return <User className="w-full h-full text-blue-800" />;
          case AppId.MY_DOCUMENTS: return <Briefcase className="w-full h-full text-yellow-600" />;
          case AppId.INTERNET_EXPLORER: return <Globe className="w-full h-full text-blue-500" />;
          case AppId.OUTLOOK_EXPRESS: return <Mail className="w-full h-full text-blue-400" />;
          case AppId.MEDIA_PLAYER: return <Play className="w-full h-full text-orange-500" />;
          case AppId.CONTROL_PANEL: return <Settings className="w-full h-full text-gray-500" />;
          default: return null;
      }
  }

  // Handle clicking on desktop to close start menu
  const handleDesktopClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "desktop-area") {
        setIsStartOpen(false);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col relative font-sans text-sm selection:bg-[#0054E3] selection:text-white">
      {/* Background Wallpaper */}
      <div 
         id="desktop-area"
         className="absolute inset-0 bg-cover bg-center z-0"
         style={{ 
             backgroundImage: `url('https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?auto=format&fit=crop&q=80&w=2070')`
         }}
         onClick={handleDesktopClick}
      />
      {/* Removed CRT overlay for cleaner look */}

      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 z-0 flex flex-col gap-4">
        <DesktopIcon 
            label="My Computer" 
            icon={<User className="w-full h-full text-white fill-blue-600 drop-shadow-lg" />} 
            onClick={() => openWindow(AppId.MY_COMPUTER, "My Computer")} 
        />
        <DesktopIcon 
            label="My Documents" 
            icon={<Briefcase className="w-full h-full text-yellow-400 fill-yellow-600 drop-shadow-lg" />} 
            onClick={() => openWindow(AppId.MY_DOCUMENTS, "My Documents")} 
        />
        <DesktopIcon 
            label="Internet Explorer" 
            icon={<div className="bg-white rounded-full p-1"><Globe className="w-full h-full text-blue-500 drop-shadow-lg" /></div>} 
            onClick={() => openWindow(AppId.INTERNET_EXPLORER, "Internet Explorer")} 
        />
        <DesktopIcon 
            label="Outlook Express" 
            icon={<Mail className="w-full h-full text-gray-200 fill-blue-500 drop-shadow-lg" />} 
            onClick={() => openWindow(AppId.OUTLOOK_EXPRESS, "Outlook Express")} 
        />
        <DesktopIcon 
            label="Media Player" 
            icon={<div className="bg-black/80 rounded-full p-1 border border-orange-500"><Play className="w-full h-full text-orange-500 fill-orange-500 drop-shadow-lg" /></div>} 
            onClick={() => openWindow(AppId.MEDIA_PLAYER, "Windows Media Player")} 
        />
        {/* Recycle Bin Removed */}
      </div>

      {/* Windows Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {windows.map(win => (
            <div key={win.id} className="pointer-events-auto">
                <Window
                    title={win.title}
                    isOpen={win.isOpen}
                    isMinimized={win.isMinimized}
                    isActive={activeWindowId === win.id}
                    zIndex={win.zIndex}
                    onClose={() => closeWindow(win.id)}
                    onMinimize={() => minimizeWindow(win.id)}
                    onMaximize={() => {}} // Not implemented
                    onFocus={() => focusWindow(win.id)}
                    icon={getWindowIcon(win.id)}
                    className={win.id === AppId.MEDIA_PLAYER ? "w-[360px] h-[450px]" : "w-[90%] md:w-[800px] h-[500px]"}
                >
                    {getWindowContent(win.id)}
                </Window>
            </div>
        ))}
      </div>

      {/* Start Menu */}
      <StartMenu 
        isOpen={isStartOpen} 
        onClose={() => setIsStartOpen(false)} 
        onAppClick={(id) => openWindow(id, id.replace("_", " ").toUpperCase())}
        userName={PROFILE.name.split(' ')[0]}
        userImage={PROFILE.image}
      />

      {/* Taskbar */}
      <Taskbar 
        windows={windows}
        activeWindowId={activeWindowId}
        onWindowClick={(id) => {
             const win = windows.find(w => w.id === id);
             if (win?.isMinimized || activeWindowId !== id) {
                 focusWindow(id);
             } else {
                 minimizeWindow(id);
             }
        }}
        onStartClick={toggleStart}
        isStartOpen={isStartOpen}
      />
    </div>
  );
};

export default App;