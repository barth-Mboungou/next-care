import Image from "next/image";
import React from "react";

const Works = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h={75vh}">
        <h3 className="text-3xl font-semibold">
          My skill <span className="text-blue-500 underline">depends</span> on
          work.
        </h3>
        <p className="mt-4 text-gray-700">
          Lorem ipsum  dolor sit amet consectetur adipisicing <br/> elit. Tempore
          incidunt voluptatum quam deserunt
        </p>
        <div className="flex space-x-2 mt-8 px-[7rem]">
          <div className="flex flex-col items-center text-center bg-pink-300 rounded-xl">
            <Image
              src="/Image/4.png"
              alt="Image 1"
              width={150}
              height={100}
              className="mb-2 "
            />
            <h1 className="text-xl font-semibold">Patient safety</h1>
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-pink-200 rounded-xl">
            <Image
              src="/Image/5.png"
              alt="Image 2"
              width={150}
              height={100}
              className="mb-2"
            />
            <h1 className="text-xl font-semibold">Well Cared</h1>
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-blue-200 rounded-xl">
            <Image
              src="/Image/12.png"
              alt="Image 3"
              width={80}
              height={40}
              className="mb-2"
            />
            <h1 className="text-xl font-semibold">24/7 service</h1>
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-blue-200 rounded-xl">
            <Image
              src="/Image/6.png"
              alt="Image 4"
              width={100}
              height={50}
              className="mb-2"
            />
            <h1 className="text-xl font-semibold">online support</h1>
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
