import React from 'react'

const EditMobileButton = ({src ,onClick}) => {
  return (
    <button onClick={onClick} className='bg-black w-40 h-40 flex items-center p-2 rounded-full'>
      <img src={src} alt='edit'/>
    </button>
  )
}

export default EditMobileButton
