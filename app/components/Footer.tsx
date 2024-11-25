import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-teal-50 p-6 px-14 h-[60vh]'>
      <div className="font-sora text-[24px] font-semibold text-[#457B9D]">
  Contacts
</div>
<div className="font-sora text-[48px] font-bold leading-[60.48px] text-black">
  Get in touch
</div>
<div className="font-sora text-[20px] font-normal leading-[25.2px]">
  rizfanher@gmail.com
</div>
<br />
<div className='flex flex-row gap-4'>
  <Image src="/LinkedIn.png" alt="LinkedIn" width={40} height={39.5} />
  <Image src="/GitHub.png" alt="GitHub" width={40} height={39.5} />
  <Image src="/Instagram.png" alt="Instagram" width={40} height={39.5} />
</div>
<footer className="absolute w-[579px] h-[25px] top-[3194px] font-sora text-[20px] font-normal leading-[25.2px]">
  Copyright © 2023. Develop & Designed by Rizfan Herlaya
</footer>

</div>
  )
}

export default Footer