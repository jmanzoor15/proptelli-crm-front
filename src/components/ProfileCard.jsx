import React from 'react';
import { Mail, Phone, MapPin, CreditCard } from 'lucide-react';
import StatusChip from './StatusChip';

export default function ProfileCard({ 
  name = "Javed Leon",
  cpid = "88754",
  email = "javedleon@gmail.com",
  phone = "+971 765 432 6543",
  location = "Business Bay, Dubai - United Arab Emirates",
  imageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
//   isVerified = true,
//   accountType = "Individual"
}) {
  return (
    <div className="flex items-center gap-6 p-6 bg-white rounded-lg max-w-4xl">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-[130px] h-[130px] rounded-full object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="flex-grow pl-8">
        <div className=' flex justify-between'>
        <h2 className="text-3xl font-semibold text-black mb-3">{name}</h2>
        <div className=' flex gap-3'>
            <StatusChip label={"Verified"} bgcolor={"#8A38F5"} src={"/icons/symbols_verified.svg"}/>
            <StatusChip textcolor={"goldgreen"} label={"Individual"} bgcolor={"#F5F5F5"} src={"/icons/user-3.svg"}/>
        </div>
        </div>
        <div className="space-y-2 pt-1">
          <div className="flex items-center gap-2 text-gray-700">
            <img src='/icons/cp-icon.svg' alt='img' className="w-[15px] h-[15px]" />
            <span className="text-xss text-black"><span className='text-black font-semibold text-xss'>CPID:</span> {cpid}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-700">
            <img src='/icons/mail-icon.svg' alt='img' className="w-[15px] h-[15px]" />
            <span className="text-xss font-normal text-black">{email}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-700">
            <img src='/icons/phone-icon.svg' alt='img' className="w-[15px] h-[15px]" />
            <span className="text-xss font-normal text-black">{phone}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-700">
            <img src='/icons/location-icon.svg' alt='img' className="w-[15px] h-[15px]" />
            <span className="text-xss font-normal text-black">{location}</span>
          </div>
        </div>
      </div>

      {/* Status Badges */}
      <div className="flex flex-col gap-2">
        {/* {isVerified && (
          <div className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified
          </div>
        )} */}
        
        {/* <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
          </svg>
          {accountType}
        </div> */}
      </div>
    </div>
  );
}