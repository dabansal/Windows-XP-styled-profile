import React, { useState } from 'react';
import { PROFILE } from '../constants';
import { User } from 'lucide-react';

const FadeInText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 30 }) => {
  return (
    <span aria-label={text}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            opacity: 0,
            animation: 'fadeInCharacter 0.1s forwards',
            animationDelay: `${index * delay}ms`,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

const MyComputer: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col h-full text-gray-800">
      {/* Top Menu Bar */}
      <div className="bg-[#ECE9D8] border-b border-gray-400 p-1 text-xs flex gap-2">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Favorites</span>
        <span>Tools</span>
        <span>Help</span>
      </div>

      {/* Address Bar */}
      <div className="bg-[#ECE9D8] p-1 flex items-center gap-2 border-b border-gray-400">
         <span className="text-xs text-gray-500">Address</span>
         <div className="bg-white border border-[#7F9DB9] flex-1 px-1 text-sm flex items-center gap-1">
             <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
             My Computer\Dheeraj Bansal\Profile
         </div>
         <button className="px-2 bg-[#F1F1F1] border border-gray-400 text-xs rounded">Go</button>
      </div>

      <div className="flex flex-1 overflow-hidden bg-white">
        {/* Content - Removed Sidebar for cleaner look */}
        <div className="flex-1 p-6 overflow-y-auto">
           <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Pic */}
              <div className="w-40 h-40 md:w-56 md:h-56 bg-gray-200 border-4 border-white shadow-[0_0_10px_rgba(0,0,0,0.2)] rotate-[-2deg] flex-shrink-0 flex items-center justify-center overflow-hidden">
                 {!imgError ? (
                   <img 
                      src={PROFILE.image}
                      alt={PROFILE.name}
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                   />
                 ) : (
                   <User className="w-20 h-20 text-gray-400" />
                 )}
              </div>
              
              <div className="flex-1 min-w-0">
                 <h1 className="text-3xl font-bold text-[#003399] mb-1 tracking-tight">{PROFILE.name}</h1>
                 <h2 className="text-xl text-gray-600 mb-6 font-semibold">{PROFILE.headline}</h2>
                 
                 <div className="bg-[#FFFFE1] border border-[#D0D0BF] p-4 text-sm mb-6 shadow-sm rounded-sm">
                    <p className="font-bold text-gray-700 mb-2 border-b border-[#D0D0BF] pb-1">
                      <FadeInText text="System Summary:" delay={50} />
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-800 mt-2">
                       {PROFILE.summary.map((line, idx) => (
                         <li key={idx} className="leading-relaxed animate-[fadeInCharacter_0.5s_forwards]" style={{ animationDelay: `${500 + (idx * 100)}ms`, opacity: 0 }}>
                            {line}
                         </li>
                       ))}
                    </ul>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 border border-gray-200 rounded">
                    <div>
                        <span className="font-bold block text-gray-600 mb-1">Location</span>
                        <span className="text-gray-800">{PROFILE.location}</span>
                    </div>
                     <div>
                        <span className="font-bold block text-gray-600 mb-1">Website</span>
                        <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="text-blue-600 underline truncate block hover:text-blue-800">{PROFILE.linkedin}</a>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MyComputer;