import React from 'react'

const SendMessageDropdown = () => {
  return (
    <button className="flex items-center justify-center gap-2 bg-goldgreen text-white rounded-full font-medium hover:bg-yellow-800 transition-colors" style={{ width: '178px', height: '50px' }}>
      <span>Send Message</span>
      <svg 
        className="w-4 h-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 9l-7 7-7-7" 
        />
      </svg>
    </button>
  );
}

export default SendMessageDropdown
