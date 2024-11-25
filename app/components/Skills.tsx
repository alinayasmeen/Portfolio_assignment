import React from 'react'
import Image from 'next/image'
const Skills = () => {
  return (
    <div className='h-[60vh] w-full p-10 bg-teal-50'>
        <div className='flex flex-col justify-center items-center'>
  <div className='w-[89px] font-sora font-semibold text-[30px] text-center text-[#457B9D]'>
    <h2>Skills</h2>
  </div>
  <h1 className="mt-4 w-[542px] font-sora text-[48px] text-black font-bold text-center">
    What I am capable of?
  </h1>
</div>
<div className="flex justify-center items-center">
<div className="left-[10.5px] max-w-[852px] max-h-[129px] flex flex-row gap-[30px]">
    
    <Image src="/html.png" alt="HTML" width={108} height={129} />
    <Image src="/CSS.png" alt="CSS" width={108} height={129} />
    <Image src="/php.png" alt="PHP" width={108} height={129} />
    <Image src="/tailwind.png" alt="Tailwind" width={108} height={129} />
    <Image src="/bootstrap.png" alt="bootstrap" width={108} height={129} />
    <Image src="/laravel.png" alt="laravel" width={108} height={129} />
    </div>
</div>

</div>
                
  )
}

export default Skills