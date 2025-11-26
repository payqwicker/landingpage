"use client"
import React from 'react'

const ButtonOutlined = ({title, handler}) => {
  return (
    <button
      className="w-[175px] h-[58px] bg-complimentary border-[1px] border-primary px-[20px] py-[10px] rounded-full  font-semibold text-primary"
      onClick={handler}
    >
      {title}
    </button>
  );
}

export default ButtonOutlined