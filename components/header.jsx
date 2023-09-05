import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <>
      <header className="bg-white  px-[7rem] pt-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 p-">
              <Image src="/Image/medical-check.png" alt="Logo" width={300} height={200} className="h-8 w-8" />
              <span className="text-blue-500 font-semibold">Care</span>
           
          </Link>
        </div>
        <ul className="flex space-x-6 justify-center ">
          <li>
            <Link href="/home" className="text-gray-700 hover:text-blue-500  ">
              Home
            </Link>
          </li>
          <li>
            <Link href="/work" className="text-gray-700 hover:text-blue-500">
              Work
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/schedules" className="text-gray-700 hover:text-blue-500">
              Schedules
            </Link>
          </li>
          <li>
            <Link href="/reviews" className="text-gray-700 hover:text-blue-500">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-blue-500">
              Blog
            </Link>
          </li>
        </ul>
        <button className="rounded-full  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 ">
          Let's Talk
        </button>
      </div>
    </header>
    </>
  )
}

export default Header
