import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Folder, FileText, ArrowLeft, ChevronRight } from 'lucide-react';
import { Experience } from '../types';

const MyDocuments: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Standard Toolbar */}
      <div className="bg-[#ECE9D8] border-b border-[#D0D0BF] p-1 flex gap-2 items-center text-sm shadow-sm">
        <button 
            onClick={() => setSelectedExp(null)}
            disabled={!selectedExp}
            className={`flex items-center gap-1 px-2 py-1 rounded ${!selectedExp ? 'opacity-50 grayscale' : 'hover:bg-white border border-transparent hover:border-gray-400'}`}
        >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
        </button>
        <div className="h-4 w-[1px] bg-gray-400 mx-1" />
        <button className="p-1 hover:bg-white border border-transparent hover:border-gray-400 rounded">
            <Folder className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane (Details) */}
        <div className="w-48 bg-gradient-to-b from-[#7CA0DA] to-[#6375D6] p-3 text-white hidden md:block overflow-y-auto">
            <h3 className="font-bold text-sm mb-2">File and Folder Tasks</h3>
            <ul className="text-xs pl-2 space-y-2 mb-4 text-[#002D96]">
                <li className="flex gap-1 items-center"><div className="w-1 h-1 bg-[#002D96] rounded-full"/>Make a new folder</li>
                <li className="flex gap-1 items-center"><div className="w-1 h-1 bg-[#002D96] rounded-full"/>Share this folder</li>
            </ul>

            <h3 className="font-bold text-sm mb-2">Details</h3>
            {selectedExp ? (
                <div className="text-xs bg-white/10 p-2 rounded">
                    <p className="font-bold">{selectedExp.company}</p>
                    <p>{selectedExp.duration}</p>
                    <p>{selectedExp.location}</p>
                </div>
            ) : (
                <div className="text-xs">
                    <p>My Documents</p>
                    <p>System Folder</p>
                </div>
            )}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 overflow-y-auto bg-white">
            {!selectedExp ? (
                // Folder View
                <div>
                     <h2 className="text-lg font-bold text-gray-700 border-b border-gray-300 mb-4 pb-1">Professional Experience</h2>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {EXPERIENCE.map((exp, idx) => (
                            <div 
                                key={idx} 
                                onClick={() => setSelectedExp(exp)}
                                className="group flex flex-col items-center gap-1 cursor-pointer p-2 hover:bg-[#E8F4FF] border border-transparent hover:border-[#C4E2FF] rounded"
                            >
                                <div className="relative">
                                     <Folder className="w-12 h-12 text-[#FFD84B] fill-[#FFD84B] drop-shadow-sm" />
                                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 ml-1 opacity-50">
                                         <div className="w-6 h-4 bg-white/60" />
                                     </div>
                                </div>
                                <span className="text-xs text-center font-medium group-hover:text-blue-700">{exp.company}</span>
                                <span className="text-[10px] text-gray-400">{exp.duration}</span>
                            </div>
                        ))}
                     </div>
                </div>
            ) : (
                // File View (Details)
                <div>
                     <h2 className="text-xl font-bold text-[#003399] flex items-center gap-2 mb-4">
                         <Folder className="text-[#FFD84B] fill-[#FFD84B]" />
                         {selectedExp.company}
                         <span className="text-sm text-gray-500 font-normal ml-auto">{selectedExp.location}</span>
                     </h2>
                     
                     <div className="space-y-6">
                        {selectedExp.roles.map((role, idx) => (
                            <div key={idx} className="bg-gray-50 p-4 border border-gray-200 rounded shadow-sm">
                                <div className="flex items-start gap-3">
                                    <FileText className="w-6 h-6 text-blue-500 mt-1" />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-800 text-base">{role.title}</h3>
                                        <p className="text-xs text-gray-500 font-mono mb-2 bg-[#FFFFE1] inline-block px-1 border border-gray-300">{role.period}</p>
                                        <ul className="space-y-1 mt-2">
                                            {role.details.map((detail, dIdx) => (
                                                <li key={dIdx} className="text-sm text-gray-700 flex gap-2">
                                                    <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default MyDocuments;
