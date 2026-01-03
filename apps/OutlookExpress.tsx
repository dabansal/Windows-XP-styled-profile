import React, { useState } from 'react';
import { PROFILE } from '../constants';
import { Mail, Send, Paperclip } from 'lucide-react';

const OutlookExpress: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className="flex flex-col h-full bg-[#ECE9D8]">
       {/* Menu */}
       <div className="bg-[#ECE9D8] px-2 py-1 text-xs flex gap-3 border-b border-gray-400 text-gray-800">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Insert</span>
          <span>Format</span>
          <span>Tools</span>
          <span>Message</span>
          <span>Help</span>
       </div>

       {/* Toolbar */}
       <div className="flex items-center gap-1 p-1 border-b border-gray-400 bg-gradient-to-b from-[#F7F7F7] to-[#E3E3E3]">
          <button className="flex flex-col items-center p-1 hover:bg-gray-200 border border-transparent hover:border-gray-400 rounded min-w-[50px]">
             <Send className="w-6 h-6 text-gray-600" />
             <span className="text-[10px]">Send</span>
          </button>
          <div className="w-[1px] h-8 bg-gray-400 mx-1"></div>
           <button className="flex flex-col items-center p-1 hover:bg-gray-200 border border-transparent hover:border-gray-400 rounded min-w-[50px]">
             <Paperclip className="w-6 h-6 text-gray-600" />
             <span className="text-[10px]">Attach</span>
          </button>
       </div>

       {/* Headers */}
       <div className="bg-white p-2 text-sm space-y-2 border-b border-gray-400">
          <div className="flex items-center gap-2">
             <span className="w-16 text-gray-500 text-right">To:</span>
             <div className="flex-1 border-b border-gray-300 pb-1 flex items-center gap-2">
                 <Mail className="w-4 h-4 text-gray-400" />
                 <span className="font-semibold select-all">{PROFILE.email}</span>
             </div>
          </div>
           <div className="flex items-center gap-2">
             <span className="w-16 text-gray-500 text-right">Subject:</span>
             <input 
                type="text" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="flex-1 border-b border-gray-300 pb-1 outline-none focus:border-blue-500"
                placeholder="Job Opportunity..."
             />
          </div>
       </div>

       {/* Body */}
       <textarea 
          className="flex-1 p-4 outline-none resize-none font-sans text-sm"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Type your message here..."
       />

        <div className="bg-[#ECE9D8] px-2 py-1 text-xs border-t border-gray-400 text-gray-600 flex justify-between">
           <span>Connected to bansalcooldheeraj@gmail.com</span>
           <span>Working Online</span>
        </div>
    </div>
  );
};

export default OutlookExpress;
