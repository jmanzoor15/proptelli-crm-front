import React from 'react'

const RoundedButton = ({onClick,src}) => {
  return (
    <button
      onClick={onClick}
      className=" hover:bg-goldgreen hover:border-goldgreen border-2 flex justify-center text-gray-800 font-bold w-40 h-40 md:w-[50px] md:h-[50px] rounded-full  inline-flex items-center"
    >
      <img src={src} alt="Button" className="md:w-[20px] md:h-[20px] w-14 h-14" />
    </button>
  )
}

export default RoundedButton
