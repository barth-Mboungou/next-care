import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h={}">
        <h3 className="text-3xl font-semibold">
          let's see Our <span className="text-blue-500 underline">latest</span>{" "}
          News!
        </h3>
      </div>
      <div className=" h-full   flex flex-row">
        <div className="flex flex-col -space-y-16  h-full  ">
          <Image
            className=" my-1 mx-20 h-72 max-w-lg rounded-lg"
            src="/Image/2.jpg"
            height={650}
            width={670}
            alt="Nfc"
          />
          <div className=" flex my-16">
            <h1 className="flex  mx-6 my-16  ">
              <div className="rounded-full mx-14 my-1 items-center bg-black h-3 w-3"></div>
              <div className="-mx-12 my-1 text-xs ">By Martin Cury</div>
            </h1>
            <h1 className="flex  mx-36 my-16  ">
              <Image
                className=" my-1 mx-14 z-10 h-400 max-w-lg rounded-lg"
                src="/Image/13.jpg"
                height={23}
                width={23}
                alt="Nfc"
              />
              <div className="-mx-12 my-1 py-1 text-xs ">21-12-2005</div>
            </h1>
          </div>
          <div className="text-xl font-bold w-1 -py-11 px-96 -ml-6">
            <h1 className="-ml-72 ">
              Join me and respectfully fight COVID missinformation
            </h1>
          </div>
          <div className=" py-20 leading-4 mx-20">
            <div className="text-xs -ml-2 w-96 ">
              Lorem ipsum dolor sit amet,consectetur adpiscing ellit.Tempor
              proin id aliquet lacinia vulpatate mon,Rhoncus.Blandit deugia wi
              werra est Suspendisse{" "}
            </div>
            {/*<div className="text-sm py-2 -ml-2"> <span className="underline" ></span> .  </div>*/}
            <div className="text-xs -ml-2 w-96 py-3 ">
              Tempor proin id aliquest lacinia wulputate non.Rhoncus,blandit
              teuglat wiverraest suspendisse porta tortor commodo,tetus
              Negue.Blandit deugia wi werra est Suspendisse{" "}
            </div>
          </div>
        </div>
        <div className=" max-w-7xl -mx-2  ">
          <div className="flex justify-between">
            <h1 className="text-sm underline  font-semibold my-1 py-2 leading-loose">
              Latest News :
            </h1>
            <h1 className="text-sm mx-12 font-semibold my-1 py-2 leading-loose">
              View all{" "}
            </h1>
          </div>
          <div className="w-96 pt-1 leading-4 flex">
            <div className="flex flex-col -space-y-16  h-full w-32 border border-white ">
              <Image
                className=" my-1 mx-1 h-20 w-28 rounded"
                src="/Image/14.jpg"
                height={650}
                width={670}
                alt="Nfc"
              />
            </div>
            <div className="-mx-0 w-56 ">
              <div className=" -space-y-16  mx-6 h-auto w-56 border border-white ">
                <h1 className="text-xl font-bold">
                  I'm cated anti-science I'm just an early
                </h1>
              </div>
              <div className="mx-6 my-3">
                <div className="text-xs text-red-700 font-bold">Read More.</div>
              </div>
            </div>
          </div>
          <div className="w-96 pt-1 leading-4 flex">
            <div className="flex flex-col -space-y-16  h-full w-32 border border-white ">
              <Image
                className=" my-1 mx-1  border border-amber-950 h-20 w-28 rounded"
                src="/Image/13.jpg"
                height={650}
                width={670}
                alt="Nfc"
              />
            </div>
            <div className="-mx-0 w-56 ">
              <div className=" -space-y-16  mx-6 h-auto w-56 border border-white ">
                <h1 className="text-xl font-bold">
                  Burnout and bias?Or medical...
                </h1>
              </div>
              <div className="mx-6 my-3">
                <div className="text-xs text-red-700 font-bold">Read More.</div>
              </div>
            </div>
          </div>
          <div className="w-96 pt-1 leading-4 flex">
            <div className="flex flex-col -space-y-16  h-full w-32 border border-white ">
              <Image
                className=" my-1 mx-1  border border-amber-950 h-20 w-28 rounded"
                src="/Image/13.jpg"
                height={650}
                width={670}
                alt="Nfc"
              />
            </div>
            <div className="border -mx-0 w-56 ">
              <div className=" -space-y-16  mx-6 h-auto w-56 border border-white ">
                <h1 className="text-xl font-bold">
                  Heatly Living with Graves Disases
                </h1>
              </div>
              <div className="border mx-6 my-3"></div>
              <div className="text-xs text-red-700 font-bold">Read More.</div>
            </div>
          </div>
          <div className="">
            <div className="text-xs underline font-bold">Section dawn.</div>
            <div className="flex flex-row space-x-5  h-full border border-white my-5 ">
              <Image
                className=" my-1 mx-1   h-20 w-28 rounded"
                src="/Image/1.jpg"
                height={650}
                width={670}
                alt="Nfc"
              />
              <Image
                className=" my-1 mx-1 h-20 w-28 rounded"
                src="/Image/10.jpg"
                height={650}
                width={670}
                alt="Nfc"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
