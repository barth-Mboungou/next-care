import React from "react";
import Image from "next/image";

const HOME = () => {
  return (
    <>
      <div className="flex flex-row-reverse space-x-4 mx-12 p-14 mt-8">
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/Image/1.jpg"
            alt="1"
            width={400}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="">
          <h1 className="text-xl font-bold mb-2">Stay strong, live long</h1>
          <h2 className="text-6xl mt-2">
            <span className="text-blue-500 underline">
              Take care
            </span>{" "}
            of your body, <br /> it will take care of{" "}
            <span className="text-blue-500 underline">You</span>.
          </h2>
          <p className="mt-4 text-gray-700 text-1xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Sit
            aut accusamus labore enim quisquam voluptatem, <br /> iusto possimus
            vel. Suscipit sequi debitis nisi unde <br /> ipsa accusamus enim
            maxime ullam amet cupiditate!
          </p>
          <div className="mt-4 flex space-x-4">
            <button className="flex rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 ">
              Get Appointment
            </button>
            <button className="flex rounded-full border border-blue-500 hover:bg-blue-600 text-blue-500 font-semibold py-2 px-4">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOME;
