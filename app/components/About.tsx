import React from 'react'
import Image from 'next/image'

export const About = () => {
  return (
    <div className='h-[80vh] grid grid-cols-2 m-16 grid-rows-2'>

        <div className='col-span-1 row-span-1'>
        <Image src="/Code_typing.png" alt="Code Typing" width={500} height={500} />    
            </div> 
        <div className='col-span-1 px-3 py-16 row-span-1'>
            <h4 className='h-[30px] text-sky-800 w-[78px] top-[129px] left-[732px] font-sora font-[500] text-[24px]'>
                About
            </h4>
            <br/>
            <h1 className='h-[60px] w-[269px] text-black top-[174px] left-[732px] font-sora font-[700] text-[48px]'>
            About Me?
            </h1>
            <br/>
            <p className="top-[249px] left-[732px] w-[564px] h-[238px] font-sora text-[20px] font-normal">
            Lorem ipsum dolor sit amet consectetur. Iaculis diam augue a adipiscing non aliquet. Leo semper lacus fringilla consectetur cras ac ullamcorper ut. Risus nunc diam accumsan feugiat. Tristique diam consectetur aliquam vitae suspendisse vel leo. Nec quisque senectus laoreet id pulvinar id vulputate. Montes consectetur diam non aliquam nunc maecenas non. Molestie pretium amet id dictum vitae nam vel sit. Rhoncus massa velit ut amet massa morbi eget. 

        </p>
    </div>
    </div>
  )
}
