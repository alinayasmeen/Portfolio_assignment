import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <div><div className="grid grid-cols-5 grid-rows-5 h-[150vh] bg-teal-50 p-20 px-25">
    <div className="col-span-3 row-span-2 ">
      <p className="top-[109px] left-2 h-[30px] font-sora font-normal text-[24px] text-sky-800">Hi Everyone, I am </p>
      <br />
      <h1 className="h-[60px] top-[151px] left-2 font-sora font-bold text-[48px] text-black">
      Rizfan Herlaya
      </h1>
      <br/>
      <h2 className="h-[50px] top-[225px] left-2 font-sora font-normal text-[20px] text-[rgba(0,0,0,0.8)]">
      Lorem ipsum dolor sit amet consectetur. Vitae maecenas pellentesque tellus tempus purus integer nisi cras fermentum.
      </h2>
      <br/>
      <br/>
      <div className="flex gap-4 flex-row">
        <div>
      <Button className="defaultVariant flex justify-center items-center top-[342px] left-[45px] font-sora font-normal text-[20px] text-white">
        Download CV
       <Image src="/cloud.png"
       alt="cloud" 
       width={30} 
       height={30} />
      </Button>
      </div>
      <div>
      <Button variant={"secondary"} size={"secondary"} className="bg-transparent text-sky-800 ">
      Explore More</Button></div>
      </div>
    </div>
  <div className="col-span-2 row-span-3 -top-50 inset-0 flex items-start">
<div className="left-[708px] gap-0 ">
<Image 
src="/profile.png" 
alt="Profile" 
width={405}
height={524.76}
className="top-0 container "  />
</div>
<div className=" "/> 
 </div></div></div>
  )
}

export default Home