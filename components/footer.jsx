import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black h-80">
        <div className="flex justify-between">
          <div className=" flex flex-col w-80 h-80 mx-32 ">
            <Image className="my-6" src="" height={25} width={25} alt="Nfc" />
            <h1 className="mx-6 -my-12  font-black text-white">CARE</h1>

            <div className="text-white text-xs w-48">
              <h1 className="my-16">
                Blandit deugia wi werra est Suspendisse porta{" "}
              </h1>
            </div>
            <div className=" w-52 -my-11 ">
              <h1 className="flex ">
                <img
                  className="border w-5 h-5 mb-1"
                  src=""
                  height={6}
                  width={50}
                  alt="Nfc"
                />
                <div className="text-xs text-white font-bold my-0.5">
                  +33 012924 1804 487
                </div>
              </h1>
              <h1 className="flex ">
                <Image
                  className="border w-5 h-5 mb-1"
                  src=""
                  height={6}
                  width={50}
                  alt="Nfc"
                />
                <div className="text-xs text-white font-bold my-0.5">
                  blanditdeugia@gmail.com
                </div>
              </h1>
            </div>
            <div className="flex -mx-0 space-x-3">
              <div className="">
                <Image
                  className=" mx-0 h-8 w-8 my-14"
                  src=""
                  height={50}
                  width={55}
                  alt="Nfc"
                />
              </div>
              <div className="">
                <img
                  className=" mx-0 h-8 w-8 my-14"
                  src=""
                  height={50}
                  width={55}
                  alt="Nfc"
                />
              </div>
              <div className="">
                <Image
                  className=" mx-0 h-8 w-8 my-14"
                  src=""
                  height={50}
                  width={55}
                  alt="Nfc"
                />
              </div>
              <div className="">
                <Image
                  className=" mx-0 h-8 w-8 my-14"
                  src=""
                  height={50}
                  width={55}
                  alt="Nfc"
                />
              </div>
            </div>
            <div className="flex flex-col  w-20 h-60 mx-80 -my-72 ">
              <div className=" flex flex-col w-20 h-12 my-0 mx-0 ">
                <h1 className="mx-0 my-7  font-black text-white">Menu</h1>
              </div>
              <div className="flex flex-col text-white text-xs space-y-2  my-3">
                <h1>Home</h1>
                <h1>Work</h1>
                <h1>About</h1>
                <h1>Schedule</h1>
              </div>
            </div>
          </div>
          <div className="-mx-14 ">
            <div className="flex flex-col w-36 h-60 mx-36  ">
              <div className=" flex flex-col w-84 h-12 my-0 mx-0 ">
                <h1 className="mx-0 my-7  font-black text-white">
                  Usefulllink
                </h1>
              </div>
              <div className="flex flex-col text-white text-xs space-y-2  my-4">
                <h1>Privacy Policy</h1>
                <h1>Controle starding</h1>
                <h1>Purching Pollicy</h1>
                <h1>Terms & Condition</h1>
                <h1>Contact</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white text-xs space-y-4">
            <h1 className="mx-0 my-2 font-black text-white">Contact</h1>
            <h1 className="text-xs">Lorem ipsum dolor sit amet,consectetur </h1>
            <h1 className="text-xs">
              Lorem ipsum dolor sit amet,consectetur ellit,blandit 
            </h1>
            <div className="flex flex-col text-white text-xs  mx-0.5 my-1 w-40">
              <div className="flex rounded-l-2xl w-56 h-7 text-white text-center ">
                <input
                  type="mail"
                  className="w-44 rounded-l-3xl text-center "
                  placeholder="Enter your E-mail"
                />
                <button className="rounded-r-3xl w-16 h-7 mx-0 bg-blue-500 ">
                  <Image
                    className="-my-2 mx-4 w-5 "
                    src=""
                    height={25}
                    width={25}
                    alt="Nfc"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-white font-bold ">
          @ Copyright 2001 ITari LOGO dll Mongol Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
