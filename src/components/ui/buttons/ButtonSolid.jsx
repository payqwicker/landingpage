"use client"
import React from 'react'

const ButtonSolid = ({title, handler}) => {
  return (
      <button className='bg-complimentary h-[45px] px-[16px] py-[8px] rounded-full border-0 font-semibold text-primary'
      onClick={handler}
      >{title}</button>
  )
}

export default ButtonSolid