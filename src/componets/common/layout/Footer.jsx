import React from 'react'

const Footer = () => {
  return (
   <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-[#9de40f]/20">
  {/* Logo / Name */}
  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#9de40f] to-[#8bc34a] bg-clip-text text-transparent">
    YogeshWebDev
  </div>

  {/* Underline / Accent */}
  <div className="w-16 h-0.5 bg-[#9de40f] mx-auto my-2 rounded-full"></div>

  {/* Subtitle */}
  <div className="text-gray-300 text-sm lg:text-base tracking-wide">
    MERN Stack Developer
  </div>
</div>
  )
}

export default Footer