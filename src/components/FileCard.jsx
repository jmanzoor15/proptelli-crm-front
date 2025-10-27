import React from 'react';
import { FileText, Copy, Download } from 'lucide-react';
import RoundedButton from './buttons/RoundedButton';

export const FileCard = ({ 
  fileName = "Document", 
  fileSize = "0 MB",
  icon: Icon = FileText,
  onCopy,
  onDownload,
  className = ""
}) => {
  return (
    <div className={`flex items-center h-[74px] justify-between bg-white border border-gray-200 rounded-25 px-[12px] py-4 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {/* Left Section - Icon and File Info */}
      <div className="flex items-center gap-4">
        {/* File Icon */}
        <div className="w-[62px] h-[53px] bg-greywhite rounded-15 flex items-center justify-center flex-shrink-0">
        <img className='w-[26px] h-[29px]' src='/icons/document-icon.svg' alt='document'/>
      </div>
        
        {/* File Details */}
        <div className="flex flex-col">
          <h3 className="text-md font-semibold text-black">{fileName}</h3>
          <p className="text-md font-normal text-gray-500">{fileSize}</p>
        </div>
      </div>

      {/* Right Section - Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Copy Button */}
        {onCopy && (
          <RoundedButton onClick={onCopy} src={"/icons/replace-icon.svg"}/>
        )}
        
        {/* Download Button */}
        {onDownload && (
            <RoundedButton onClick={onDownload} src={"/icons/download-icon.svg"}/>
        )}
      </div>
    </div>
  );
};