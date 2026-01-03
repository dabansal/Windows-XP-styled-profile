import React, { useState, useEffect } from 'react';
import { SKILLS } from '../constants';
import { Play, Pause, SkipBack, SkipForward, Volume2, Disc } from 'lucide-react';

const MediaPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [bars, setBars] = useState<number[]>(Array(20).fill(10));

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
        setProgress(p => (p + 1) % 100);
        setBars(bars.map(() => Math.random() * 100));
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying, bars]);

  return (
    <div className="flex flex-col h-full bg-black text-white font-sans overflow-hidden border-2 border-[#828790] rounded-sm">
       {/* Header / Title */}
       <div className="bg-[#293448] p-1 flex justify-between items-center border-b border-[#5C6475]">
           <div className="flex items-center gap-1">
               <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-[10px] font-bold italic border border-white/50">W</div>
               <span className="text-xs font-bold text-gray-300">Windows Media Player</span>
           </div>
       </div>

       {/* Visualizer Area */}
       <div className="h-32 bg-black relative flex items-end justify-center gap-[2px] px-8 py-2 border-b border-[#5C6475]">
           {isPlaying ? (
               bars.map((h, i) => (
                   <div 
                    key={i} 
                    className="w-3 bg-gradient-to-t from-green-600 via-yellow-500 to-red-500 opacity-80" 
                    style={{ height: `${h}%`, transition: 'height 0.1s ease' }}
                   />
               ))
           ) : (
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full border-4 border-gray-600 flex items-center justify-center animate-spin-slow">
                     <Disc className="w-10 h-10 text-gray-600" />
                 </div>
             </div>
           )}
           <div className="absolute top-2 right-2 text-[#00FF00] text-xs font-mono">
               {isPlaying ? "Playing: Skills.mp3" : "Paused"}
           </div>
       </div>

       {/* Controls */}
       <div className="bg-[#293448] p-2 flex items-center gap-4 justify-center border-b border-[#5C6475] shadow-inner">
           <button className="text-gray-400 hover:text-white"><SkipBack className="w-5 h-5 fill-current" /></button>
           <button 
             onClick={() => setIsPlaying(!isPlaying)}
             className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4C5B75] to-[#1E2635] border-2 border-[#6B7994] flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
               {isPlaying ? <Pause className="w-6 h-6 fill-white text-white" /> : <Play className="w-6 h-6 fill-white text-white ml-1" />}
           </button>
           <button className="text-gray-400 hover:text-white"><SkipForward className="w-5 h-5 fill-current" /></button>
           <div className="w-24 h-1 bg-gray-600 rounded-full overflow-hidden ml-4">
               <div className="h-full bg-[#00FF00]" style={{ width: '70%' }}></div>
           </div>
           <Volume2 className="w-4 h-4 text-gray-400" />
       </div>

       {/* Playlist (Skills List) */}
       <div className="flex-1 bg-white text-black overflow-y-auto">
          <table className="w-full text-xs">
              <thead className="bg-[#ECE9D8] border-b border-gray-400 sticky top-0">
                  <tr>
                      <th className="text-left p-1 w-8">#</th>
                      <th className="text-left p-1">Skill Category</th>
                      <th className="text-left p-1">Technologies</th>
                  </tr>
              </thead>
              <tbody>
                  {SKILLS.map((skill, idx) => (
                      <tr key={idx} className="hover:bg-[#E8F4FF] cursor-default border-b border-gray-100">
                          <td className="p-2 text-gray-500">{idx + 1}</td>
                          <td className="p-2 font-bold text-[#003399]">{skill.category}</td>
                          <td className="p-2 text-gray-700">{skill.items.join(', ')}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
       </div>

       <div className="bg-[#293448] p-1 text-[10px] text-gray-400 text-center">
           Dheeraj Bansal's Skillset Library
       </div>
    </div>
  );
};

export default MediaPlayer;
