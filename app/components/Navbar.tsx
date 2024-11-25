import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between bg-teal-50 items-center h-[100px] w-full border border-spacing-2 shadow-custom border-sky-950">
    <Link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap" rel="stylesheet" />
    <h1 className="flex items-center absolute left-12 top-5 font-sora text-[30px] font-bold ">
        Rizfan
    </h1>
    <div className ="h-[35px] flex items-center gap-4  p-3 font-sora text-[28px] font-normal ">
    <Link href="/">Home</Link>
    <Link href="/about" className='text-opacity-70'>About</Link>
    <Link href="/skill"className='text-opacity-70'>Skill</Link>
    <Link href="/project"className='text-opacity-70'>Project</Link>
    <Link href="/contact" className='text-opacity-70'>Contact</Link>
    
</div>
</div>
)
}

export default Navbar