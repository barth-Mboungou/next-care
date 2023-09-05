import Image from 'next/image'
import React from 'react'

const Review = () => {
  return (
    <>
    <div>
    <div className="flex flex-col items-center justify-center h={75vh}">
      <h3 className="text-3xl font-semibold">
          let's see what <span className="text-blue-500 underline">patient</span>  says!
        </h3>
    </div>
    <div className="bg-red-100 h-[25rem] my-10 px-[7rem] pt-9">
        <Image src="/Image/4.png" width={300} height={200} className="flex justify-center items-center"/>
    </div>
    
    </div>
    </>
  )
}

export default Review
