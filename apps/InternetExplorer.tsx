import React from 'react';
import { HONORS } from '../constants';
import { RefreshCw, X, Home, Search, ArrowLeft, ArrowRight } from 'lucide-react';

const InternetExplorer: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#ECE9D8]">
      {/* Title Bar handled by Window component, this is the chrome */}
      
      {/* Menu Bar */}
      <div className="flex items-center px-1 text-xs border-b border-[#ACA899] bg-[#ECE9D8] py-0.5">
          <span className="px-2 hover:bg-[#316AC5] hover:text-white cursor-pointer">File</span>
          <span className="px-2 hover:bg-[#316AC5] hover:text-white cursor-pointer">Edit</span>
          <span className="px-2 hover:bg-[#316AC5] hover:text-white cursor-pointer">View</span>
          <span className="px-2 hover:bg-[#316AC5] hover:text-white cursor-pointer">Favorites</span>
          <span className="px-2 hover:bg-[#316AC5] hover:text-white cursor-pointer">Tools</span>
          <span className="px-2 hover:bg-[#316AC5] hover:text-white cursor-pointer">Help</span>
          <div className="ml-auto w-4 h-4 bg-gray-300 rounded-sm overflow-hidden flex items-center justify-center">
             <div className="w-2 h-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
          </div>
      </div>

      {/* Navigation Toolbar */}
      <div className="bg-[#ECE9D8] p-1 flex items-center gap-1 border-b border-[#ACA899]">
         <div className="flex gap-0">
             <button className="p-1 rounded-full hover:bg-white/50 disabled:opacity-30"><ArrowLeft className="w-5 h-5 text-gray-600"/></button>
             <button className="p-1 rounded-full hover:bg-white/50 disabled:opacity-30"><ArrowRight className="w-5 h-5 text-gray-600"/></button>
         </div>
         <div className="w-[1px] h-6 bg-gray-400 mx-1"></div>
         <button className="p-1 hover:bg-white/50 border border-transparent hover:border-gray-400 rounded"><RefreshCw className="w-4 h-4"/></button>
         <button className="p-1 hover:bg-white/50 border border-transparent hover:border-gray-400 rounded"><X className="w-4 h-4"/></button>
         <div className="w-[1px] h-6 bg-gray-400 mx-1"></div>
         <button className="p-1 hover:bg-white/50 border border-transparent hover:border-gray-400 rounded flex gap-1 items-center px-2">
            <Home className="w-4 h-4"/>
            <span className="text-xs hidden md:inline">Home</span>
         </button>
      </div>

      {/* Address Bar */}
      <div className="bg-[#ECE9D8] px-2 py-1 flex items-center gap-2 border-b border-[#ACA899] shadow-sm">
         <span className="text-xs text-gray-500">Address</span>
         <div className="flex-1 bg-white border border-[#7F9DB9] px-2 py-0.5 text-sm flex items-center shadow-inner">
             <span className="text-gray-500 mr-1">http://</span>
             portfolio.local/honors-awards.html
         </div>
         <button className="flex items-center gap-1 px-3 bg-[#F1F1F1] border border-gray-400 rounded hover:bg-[#E1E1E1] text-xs">
            Go <ArrowRight className="w-3 h-3"/>
         </button>
      </div>

      {/* Web Page Content Area */}
      <div className="flex-1 bg-white overflow-y-auto font-serif">
         <div className="max-w-4xl mx-auto p-8">
            <div className="border-b-4 border-blue-600 mb-6 pb-2">
               <h1 className="text-3xl font-bold text-blue-800">Honors & Achievements</h1>
               <p className="text-gray-500 text-sm italic">Recognized for excellence in engineering and leadership.</p>
            </div>
            
            <div className="space-y-8">
                {HONORS.map((award, idx) => (
                    <div key={idx} className="flex gap-4 p-4 border border-[#E0E0E0] hover:border-blue-300 hover:bg-blue-50 transition-colors">
                        <div className="mt-1">
                             {/* IE Default Image Placeholder style */}
                             <div className="w-16 h-16 border border-gray-300 bg-gray-100 flex items-center justify-center p-1">
                                 <div className="w-full h-full bg-white flex items-center justify-center">
                                    <div className="text-[#FF0000] text-xs font-bold">JPG</div>
                                 </div>
                             </div>
                        </div>
                        <div>
                             <h2 className="text-lg font-bold text-[#0000CC] underline hover:text-[#FF0000] cursor-pointer mb-2">
                                 {award}
                             </h2>
                             <p className="text-sm text-gray-800 leading-relaxed">
                                 This achievement highlights dedication to quality, successful delivery of critical projects like SFP 1.0, and effective leadership in cross-functional environments. It reflects a consistent track record of innovation and strategic execution.
                             </p>
                             <div className="mt-2 text-xs text-green-700">
                                 www.athenahealth.com/careers/awards
                             </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-4 bg-[#FFFFCC] border border-[#FFCC00] text-sm text-center">
                <p>Done. <span className="underline text-blue-600 cursor-pointer">Privacy Policy</span></p>
            </div>
         </div>
      </div>
      
      {/* Status Bar */}
      <div className="h-6 bg-[#ECE9D8] border-t border-[#ACA899] flex items-center px-2 text-xs text-gray-600 gap-4 shadow-inner">
          <div className="flex items-center gap-1">
             <div className="w-3 h-3 bg-white border border-gray-400 rounded-full"></div>
             Done
          </div>
          <div className="w-[1px] h-4 bg-gray-400"></div>
          <div>Internet</div>
      </div>
    </div>
  );
};

export default InternetExplorer;
