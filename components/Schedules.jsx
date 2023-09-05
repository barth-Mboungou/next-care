import Image from "next/image";
import React from "react";

const Schedules = () => {
  return (
    <>
      <div className=" h-full  my-6  flex flex-row mt">
        <div className="max-w-xl mx-16 ">
          <h1 className="text-sm  font-semibold my-1 py-2 leading-loose">
            SCHEDULE
          </h1>
          <div className="w-96 pt-1 leading-4">
            <h1 className="text-2xl  w-1/127 ">
              let's See <span className="font-black">my schedule</span>{" "}
            </h1>
            <h1 className="text-2xl font-black w-1/127">
              time!When i{" "}
              <span className="text-blue-600 underline underline-offset-4 shadow-blue-300 font-black">
                Free
              </span>
              .{" "}
            </h1>
          </div>
          <div className="max-w-lg py-6 ">
            <div className="text-xs flex ">
              {" "}
              <Image
                className="border w-4 h-4 mb-1 border-blue-600"
                src=""
                height={6}
                width={40}
                alt="Nfc"
              />
              Lorem ipsum dolor sit amet,consectetur adpiscing ellit.
            </div>
            <div className="text-sm py-2">
              Blandit deugia wi werra est Suspendisse porta tortor commodo.id
              aliquest lacinia wulputate non.{" "}
            </div>
            <div className="text-lg font-bold py-2 ">
              {" "}
              Medical check-up reviews:{" "}
            </div>
          </div>
          <div className="space-y-4 -my-6">
            <div className="grid grid-cols-2 ">
              <div className="bg-blue-500 flex w-auto">
                <Image
                  className="border w-5 h-5 py-1 border-blue-600 mx-3 "
                  src=""
                  height={20}
                  width={55}
                  alt="Nfc"
                />
                <h1 className="flex text-sm mx-0 "> Blandit deugia </h1>
              </div>
              <div className="bg-sky-50 flex w-auto">
                <Image
                  className="border w-5 h-5 py-1 border-blue-600 mx-3 "
                  src=""
                  height={20}
                  width={55}
                  alt="Nfc"
                />
                <h1 className="flex text-sm mx-0 "> consectetur adpiscing </h1>
              </div>
            </div>
            <div className=" grid grid-cols-2 ">
              <div className="bg-blue-500 flex w-auto">
                <Image
                  className="border w-5 h-5 py-1 border-blue-600 mx-3 "
                  src=""
                  height={20}
                  width={55}
                  alt="Nfc"
                />
                <h1 className="flex text-sm mx-0 "> Lorem ipsum dolor </h1>
              </div>
              <div className="bg-sky-50 flex w-auto">
                <Image
                  className="border w-5 h-5 py-1 border-blue-600 mx-3 "
                  src=""
                  height={20}
                  width={55}
                  alt="Nfc"
                />
                <h1 className="flex text-sm mx-0 "> Suspendisse porta </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col -space-y-16  h-full  ">
          <Image
            className=" my-1 mx-7 z-10 border h-72 w-xl "
            src="/Image/2.jpg"
            height={650}
            width={670}
            alt="Nfc"
          />
          <div className="bg-white z-40 border  mx-36 max-w-lg h-44    rounded-lg ">
            <div className="bg-white z-40 mx-28 w-80 h-36  rounded-xl ">
              <div className=" my-5 text-xs font-bold ">
                <h1 className="text-orange-500 mx-8 text-center">
                  Get a rencontre
                </h1>
              </div>
              <div className="flex grid-cols-3">
                <div className=" h-12 w-22 mx-5  -my-3 ">
                  <div className="flex text-xs  ">
                    <Image
                      className="  h-5 max-w-xs rounded-lg"
                      src=""
                      height={20}
                      width={20}
                      alt="Nfc"
                    />
                    <h1 className="my-0">Date</h1>
                  </div>
                  <div className="text-xs font-black -py-4">3-06-23:</div>
                </div>
                <div className=" h-12 w-22 mx-5  -my-3 ">
                  <div className="flex text-xs  ">
                    <Image
                      className="  h-4 max-w-xs rounded-lg"
                      src=""
                      height={4}
                      width={14}
                      alt="Nfc"
                    />
                    <h1 className="my-0">Time</h1>
                  </div>
                  <div className="text-xs font-black">11H00 PM</div>
                </div>
                <div className="   h-10 w-20 mx-3  -my-3 ">
                  <div className="flex text-xs  ">
                    <Image
                      className="  h-4 max-w-xs rounded-lg"
                      src=""
                      height={4}
                      width={14}
                      alt="Nfc"
                    />
                    <h1 className="-my-0">Lorem</h1>
                  </div>
                  <div className="text-xs font-black">Com Bresil:</div>
                </div>
              </div>
              <div className="py-4 flex justify-center ">
                <button className=" bg-blue-500 h-8 px-6 w-52  rounded-3xl text-white">
                  GoNow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedules;
