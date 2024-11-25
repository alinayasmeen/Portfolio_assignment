import React from 'react'
import Image from 'next/image'
const Projects = () => {
  return (
    <div className='h-[150vh] w-full p-10'>
         <div className='flex flex-col justify-center items-center'>
  <div className='w-[89px] font-sora font-medium text-[32px] text-center text-sky-800'>
    <h2>Projects</h2>
  </div>
  <h1 className="mt-4 w-[542px] font-sora text-[48px] text-black font-bold text-center">
  What I have made?
  </h1>
</div>
<br />
<br />
<div className="grid grid-cols-3 grid-rows-2 gap-[30px] ">
  <div className="col-span-1 row-span-1 bg-white w-[363px] h-[310px] gap-0 rounded-[10px] shadow-lg border-t border-r border-l border-b border-b-black">
   <Image src="/image1.png" alt="alt" width={363} height={198} />
    <h3 className="m-2 text-black font-semibold font-sora text-[20px]">
    Portfolio Website Design</h3>
    <p className="m-2 text-sm text-black font-[400]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="w-[44px] m-2 h-[18px] font-sora text-[14px] font-normal text-[#457B9D]">
  Figma
</div>

      </div>
    <div className="col-span-1 row-span-1 bg-white w-[363px] h-[310px] gap-0 rounded-[10px] border-t border-r border-l border-b border-b-black">
    <Image src="/image2.png" alt="alt" width={363} height={198} />
    <h3 className="m-2 text-black font-semibold font-sora text-[20px]">
    LitterCycle Exchange</h3>
  <p className="m-2 text-sm text-black font-[400]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="flex flex-row gap-4 m-2 font-sora text-[14px] font-normal text-[#457B9D]">
    <div>Live View </div>
<div>GitHub</div>
  <div> Figma</div>
</div>
   </div>
  <div className="col-span-1 row-span-1 bg-white w-[363px] h-[310px] gap-0 rounded-[10px] border-t border-r border-l border-b border-b-black">
  <Image src="/image3.png" alt="alt" width={363} height={198} />
    <h3 className="m-2 text-black font-semibold font-sora text-[20px]">
    Edubix</h3>
    <p className="m-2 text-sm text-black font-[400]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex flex-row gap-4 m-2 font-sora text-[14px] font-normal text-[#457B9D]">
  <div>
  Live View 
  </div>
<div>
GitHub
</div>
   </div>
   </div>
  <div className="col-span-1 row-span-1 bg-white w-[363px] h-[310px] gap-0 rounded-[10px] border-t border-r border-l border-b border-b-black">
  <Image src="/image4.png" alt="alt" width={363} height={198} />
    <h3 className="m-2 text-black font-semibold font-sora text-[20px]">
    PPDB SMK Telesandi Bekasi</h3>
    <p className="m-2 text-sm text-black font-[400]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex flex-row m-2 font-sora text-[14px] font-normal text-[#457B9D]">
 Live Veiw 
</div>
   </div>
    <div className="col-span-1 row-span-1 bg-white w-[363px] h-[310px] gap-0 rounded-[10px] border-t border-r border-l border-b border-b-black">
    <Image src="/image4.png" alt="alt" width={363} height={198} />
      <h3 className="m-2 text-black font-semibold font-sora text-[20px]">
      PPDB SMK Telesandi Bekasi</h3>
      <p className="m-2 text-sm text-black font-[400]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex flex-row m-2 font-sora text-[14px] font-normal text-[#457B9D]">
 Live Veiw 
</div>
    </div>
    <div className="col-span-1 row-span-1 bg-white w-[363px] h-[310px] gap-0 rounded-[10px] border-t border-r border-l border-b border-b-black">
    <Image src="/image4.png" alt="alt" width={363} height={198} />
      <h3 className="m-2 text-black font-semibold font-sora text-[20px]">
      PPDB SMK Telesandi Bekasi</h3>
      <p className="m-2 text-sm text-black font-[400]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex flex-row m-2 font-sora text-[14px] font-normal text-[#457B9D]">
 Live Veiw 
</div>
    </div>
</div>
</div>
 
  )
}

export default Projects