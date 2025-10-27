import React from 'react';
import { Eye } from 'lucide-react';

const ViewCard = ({ 
  title = "PAN Card", 
  buttonText = "View",
  onView = () => {}
}) => {
  return (
    <div className="inline-flex items-center min-w-[262px] min-h-[89px] gap-4 p-[14px] bg-white rounded-2xl  border border-darkgreywhite">
      {/* Left side - Icon */}
      <div className="w-[66px] h-[61px] bg-greywhite rounded-15 flex items-center justify-center flex-shrink-0">
        <img className='w-[26px] h-[29px]' src='/icons/document-icon.svg' alt='document'/>
      </div>
      
      {/* Right side - Title and View Button stacked */}
      <div className="flex flex-col gap-2">
        <span className="text-black font-medium text-md">{title}</span>
        <button 
          onClick={onView}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-goldgreen hover:bg-yellow-800  rounded-full transition-colors w-[73px] h-[22px]"
        >
          <img className='w-[15px] h-[15px] pt-0.5' src='/icons/white-eye-icon.svg' alt='eye'/>
          <span className='text-white text-xs font-medium'>{buttonText}</span>
        </button>
      </div>
    </div>
  );
};
export default ViewCard
