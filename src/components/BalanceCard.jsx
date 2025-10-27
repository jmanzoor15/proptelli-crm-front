import React from 'react';
import ViewCard from './ViewCard';

const BalanceCard = ({ 
  totalBalance = "1,00,000", 
  creditedAmount = "1,20,000", 
  pendingAmount = "20,000" 
}) => {
 

  return (
    <div className="w-full max-w-md min-h-[288px] px-[19px] py-[21px] bg-goldgreen rounded-30 border border-[9px] border-greywhite relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-30 transform translate-x-8 -translate-y-8"></div>
      
      {/* Arrow button */}
      <button className="absolute top-6 right-6 w-12 h-12 bg-yellow-800 bg-white rounded-full flex items-center justify-center hover:bg-yellow-900 transition-colors z-10">
        <img src='/icons/arrowupright-icon.svg' alt=''/>
      </button>

      {/* Total Balance */}
      <div className=" relative z-10">
        <p className="text-white text-base font-semibold mb-2">Total Balance</p>
        <h1 className="text-white text-45 font-semibold">₹ {totalBalance}</h1>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-2 gap-4 pt-[37px] relative z-10">
        {/* Credited Amount */}
        <div className="bg-white rounded-2xl h-[107px] py-[22px] pl-[18px]">
          <p className="text-black text-xss font-medium mb-2">Credited Amount</p>
          <p className="text-goldgreen text-25 font-semibold"><span className='text-black'>₹ </span>{creditedAmount}</p>
        </div>

        {/* Pending Amount */}
        <div className="bg-white rounded-2xl h-[107px] py-[22px] pl-[18px]">
          <p className="text-black text-xss font-medium mb-2">Pending Amount</p>
          <p className="text-goldgreen text-25 font-semibold"><span className='text-black'>₹ </span>{pendingAmount}</p>
        </div>
      </div>

      
    </div>
  );
};

export default BalanceCard;