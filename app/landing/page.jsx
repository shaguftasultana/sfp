import Image from "next/image";
import Navbar from "@/components/Navbar";
const landing = () => {
  return (
    <>
      <Navbar />
      <section className="flex mt-40 justify-center items-center">
        <div className="flex flex-col items-center justify-center  ">
          <h1 className="text-1xl md:text-2xl lg:text-5xl text-center lg:leading-loose">
            Maintain, Map, and Master
            <span className="flex">
              Your comprehensive Tool for
              <span className="bg-LightOrange ml-2">School Facility</span>
            </span>
            <span className="flex items center justify-center">Career.</span>
          </h1>
          <p className=" lg:py-8 text-gray-500 text-sm md:text-sm lg:text-xl text-center">
            Built your own workspace to replace isolated tools
            <span className="flex items-center justify-center">
              and bring everyone together.
            </span>
          </p>
          <button className="lg:px-14 lg:py-3 px-3 py-1 mt-4 lg:text-base text-sm bg-Orange text-white rounded-lg border border-gray-400">
            Contact us
          </button>
        </div>
      </section>
      <section className="flex lg:mt-20 mt-8 justify-center items-center">
        <Image
          src="/Images/Landing/1.png"
          alt="Landing1"
          width="1210"
          height="565"
        />
      </section>
    </>
  );
};
export default landing;
