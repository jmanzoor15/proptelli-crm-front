import React from 'react';

const StatusChip = ({bgcolor,label,src,textcolor}) => {
  return (
    <div style={{backgroundColor:`${bgcolor}`}} className={`flex items-center gap-2 text-white font-medium rounded-full px-4 py-2  min-w-[111px] h-[36px]`}>
     <img src={src} alt='img'/>
      <span className={`text-sm text-${textcolor}`}>{label}</span>
    </div>
  );
};

export default StatusChip;