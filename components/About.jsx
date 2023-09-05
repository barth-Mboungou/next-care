import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      {/* <div className="flex flex-row-reverse space-x-4 mx-12 p-14">
        <div className="m-9">
          <h1>About ME</h1>
          <p>
            I'm Dr. Kierrra calzoni <strong>Actually , i love to care</strong>
            <span className="text-blue-500 font-semibold underline">
              Patient.
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            dignissimos hic blanditiis enim unde!
          </p>
          <p>
            Lorem ipsum dolor sit,{" "}
            <span className="underline font-bold">amet consectetur</span>{" "}
            adipisicing elit.
          </p>
          <p>
            {" "}
            <span className="underline font-bold">Lorem ipsum dolor</span> sit
            amet consectetur adipisicing elit. Doloribus eos corrupti odio ad
            similique reiciendis nisi dicta!
          </p>

          <button className="rounded-full  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 ">
            Let's Talk
          </button>
        </div>
        <div className="p-12 ">
          <div className="bg-blue-500 z-10">
            <Image src="/Image/2.jpg" alt="2" width={400} height={500} />
          </div>
          <div className="bg-white z-40">
            <h4>
              <span className="text-blue-500 font-semibold">
                {" "}
                Dr. Kierrra calzoni
              </span>
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur
              <br /> adipisicing elit. Minima iure eligendi
            </p>
          </div>
        </div>
      </div> */}
      <div className=" h-full   flex flex-row px-10 mt-10">
        <div className="flex flex-col -space-y-16  h-full  ">
          <Image
            className=" my-1 mx-7 z-10 border h-72 w-xl "
            src="/Image/2.jpg"
            height={650}
            width={670}
            alt="Nfc"
          />
          <div className="bg-white z-40 border  mx-36 max-w-lg h-44    rounded-lg ">
            <div className=" my-9 text-xs font-bold ">
              <h1 className="text-sky-500 mx-8">Dr. Klara Callconi</h1>
              <div className=" mx-80 -my-4 h-full max-w-3xl ">
                <h1 className="">
                  Ratting:{" "}
                  <Image
                    className="border w-24 h-4 mb-1 -my-4 max-w-xl  mx-12"
                    src=""
                    height={10}
                    width={73}
                    alt="Nfc"
                  />
                </h1>
              </div>
              <div className="font-normal mx-8 my-11 w-64 text-xs ">
                <h1>
                  Lorem ipsum dolor sit amet,consectetur adpiscing ellit,blandit
                  feuglat viverra est suspendisse porta tortor commodo.
                </h1>
              </div>
              <h1 className="flex  mx-8 -my-8 ">
                <Image
                  className="border w-5 h-5 mb-1"
                  src=""
                  height={6}
                  width={50}
                  alt="Nfc"
                />
                <div className="my-1">+33 012924 1804 487</div>
              </h1>
              <div className="mx-80 -my-24 -space-y-16">
                <Image
                  className="border z-0 w-24 h-24 mb-9 -my-1 max-w-xl  mx-9"
                  src=""
                  height={180}
                  width={713}
                  alt="Nfc"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl -mx-24 ">
          <h1 className="text-sm  font-semibold my-1 py-2 leading-loose">
            ABOUT ME.
          </h1>
          <div className="w-96 pt-1 leading-4">
            <h1 className="text-4xl  w-1/127 "> I'm Dr. Kierra Calzoni </h1>
            <h1 className="text-4xl font-bold w-1/127">
              Actually,I love ta care{" "}
              <span className="text-blue-600 underline underline-offset-4 shadow-blue-300 font-bold">
                Patient
              </span>
              .{" "}
            </h1>
          </div>
          <div className="max-w-lg py-6 leading-4">
            <div className="text-sm ">
              Lorem ipsum dolor sit amet,consectetur adpiscing ellit.Tempor
              proin id aliquet lacinia vulpatate mon,Rhoncus.
            </div>
            <div className="text-sm py-2">
              Blandit deugia wi werra est{" "}
              <span className="underline">Suspendisse porta </span> tortor
              commodo.{" "}
            </div>
            Barth Mboungou, [04/09/2023 12:20]
            <div className="text-sm ">
              {" "}
              <span className="underline">Tempor proin </span> id aliquest
              lacinia wulputate non.Rhoncus,blandit teuglat wiverraest
              suspendisse porta tortor commodo,tetus Negue.{" "}
            </div>
          </div>
          <div className="py-1">
            <button className="bg-blue-500 text-white text-xs my-1 px-3 mx-1 rounded-3xl h-10 w-24 ">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
