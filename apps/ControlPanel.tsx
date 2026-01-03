import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const ControlPanel: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white">
        {/* Sidebar */}
        <div className="flex h-full">
            <div className="w-56 bg-gradient-to-b from-[#7CA0DA] to-[#6375D6] p-4 text-white hidden md:block">
                <h2 className="font-bold mb-4 text-lg">Control Panel</h2>
                <div className="text-xs space-y-2 text-[#002D96]">
                    <p className="hover:underline cursor-pointer">Switch to Classic View</p>
                    <div className="border-t border-blue-400/50 my-2"></div>
                    <p className="hover:underline cursor-pointer">See Also</p>
                    <p className="pl-2 hover:underline cursor-pointer">Windows Update</p>
                    <p className="pl-2 hover:underline cursor-pointer">Help and Support</p>
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                <h2 className="text-lg font-bold text-gray-800 mb-6 border-b border-gray-300 pb-2">
                    Pick a category
                </h2>

                <div className="grid grid-cols-1 gap-8">
                    {/* Education Section */}
                    <div className="flex gap-4">
                        <div className="w-12 h-12 flex-shrink-0">
                            <GraduationCap className="w-full h-full text-gray-600" />
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-[#003399] mb-1 cursor-pointer hover:underline">Education</h3>
                            <div className="text-sm text-gray-600">
                                {EDUCATION.map((edu, idx) => (
                                    <div key={idx} className="mb-2">
                                        <p className="font-semibold text-gray-800">{edu.institution}</p>
                                        <p>{edu.degree}</p>
                                        <p className="text-xs text-gray-400">{edu.period}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="flex gap-4">
                         <div className="w-12 h-12 flex-shrink-0">
                            <Award className="w-full h-full text-[#E57E31]" />
                        </div>
                         <div>
                            <h3 className="text-base font-bold text-[#003399] mb-1 cursor-pointer hover:underline">Certifications</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                                {CERTIFICATIONS.map((cert, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                        {cert}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Fake System Specs */}
                    <div className="flex gap-4 opacity-70">
                        <div className="w-12 h-12 flex-shrink-0">
                             <BookOpen className="w-full h-full text-green-600" />
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-[#003399] mb-1">System Specs</h3>
                            <p className="text-sm text-gray-600">Language: English (Full Professional), Hindi</p>
                            <p className="text-sm text-gray-600">Experience: 18+ Years</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
};

export default ControlPanel;
