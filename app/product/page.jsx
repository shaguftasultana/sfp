import Footer from "@/components/Common/Footer";
import Oval from "@/components/Common/Oval";
import ProductPage from "@/components/Common/ProductPage";
import Reviews from "@/components/Common/Reviews";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Product = () => {
  return (
    <>
      <Navbar />
      <section className="flex mt-40 justify-center items-center">
        <div className="flex flex-col items-center justify-center  ">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-center lg:leading-loose ">
            Make your project & tasks
            <span className="flex items-center justify-center">
              well planned
            </span>
          </h1>
          <p className=" lg:py-4 text-gray-500 text-sm md:text-md lg:text-xl text-center">
            Plan, track, and do all your work in one place.
            <span className="flex items-center justify-center">
              Steer the ship together with your team.
            </span>
          </p>
          <button className="lg:px-14 lg:py-3 px-3 py-1 mt-4 text-sm lg:text-base bg-Orange text-white rounded-lg border border-gray-400">
            Contact us
          </button>
        </div>
      </section>
      <section className="flex lg:mt-20 mt-8 justify-center items-center lg:ml-60 md:ml-40 ml-20">
        <Image
          src="/Images/Product/1.png"
          alt="Product1"
          width="1423"
          height="671"
        />
      </section>
      <section className="mt-20">
        <Reviews />
      </section>
      <section className="flex mt-40 justify-center items-center">
        <div className="flex flex-col items-center justify-center  ">
          <h1 className="text-2xl md:text-5xl lg:text-7xl text-center lg:leading-loose">
            Keep your work
            <span className="flex">
              bundled <span className="bg-LightBlue ml-4">together.</span>
            </span>
          </h1>
          <p className=" lg:py-6 text-gray-500 text-xs md:text-sm lg:text-xl text-center">
            We believe in autonomous teams that own their
            <span className="flex items-center justify-center">
              work and their piece of workspace.
            </span>
          </p>
        </div>
      </section>
      <section className="flex lg:mt-10 mt-8 justify-center items-center lg:ml-10 md:ml-10 ml-5">
        <Image
          src="/Images/Product/2.png"
          alt="Product2"
          height="680"
          width="1132"
        />
      </section>
      <section className="flex lg:mt-10 mt-10 justify-center items-center lg:ml-10 md:ml-10 ml-5">
        <div className="grid grid-cols-2 gap-12 ">
          <div>
            <Image
              src="/Images/Product/3.png"
              alt="Product3"
              height="484"
              width="538"
            />
            <h1 className="text-xl font-bold ">Dedicated Succes Manager </h1>
            <p className="text-gray-500">
              Your own customer success manager to help onboard
              <span className="flex">
                large team and create custom workflows.
              </span>
            </p>
          </div>
          <div>
            <Image
              src="/Images/Product/p4.png"
              alt="Product4"
              height="484"
              width="538"
            />
            <h1 className="text-xl font-bold ">Dedicated Succes Manager </h1>
            <p className="text-gray-500">
              Your own customer success manager to help onboard
              <span className="flex">
                large team and create custom workflows.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center lg:mt-40 mt-10 ml-12">
        <div className="grid grid-cols-2 px-40 py-20 gap-1">
          <div className="col-span-1">
            <h1 className="flex flex-col text-7xl ">
              A Plan to
              <span className="flex items-start justify-start  ">
                success at scale
              </span>
            </h1>
          </div>
          <div>
            <p className="col-span-1 mt-20 px-20 text-gray-500">
              Oval can help your team collaborate easily.
              <span className="flex ">
                So you will have more control and more support
              </span>
              <span className="flex ">
                to run your company to work with your team.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className=" flex items-center justify-center grid grid-cols-12 gap-10">
        <div className="ml-72 col-span-7 ">
          <ProductPage />
        </div>
        <div className="col-span-5">
          <Image
            src="/Images/Product/Utils/1.png"
            alt="ProductPageUtils1"
            width="166"
            height="308"
            className="ml-80 mt-40"
          />
        </div>
      </section>
      <section className="flex items-center justify-center  lg:mx-40 ">
        <div className="grid grid-cols-3  lg:gap-10 md:gap-8 gap-2 ">
          <div className="col-span-1  mt-40">
            <div className=" lg:text-8xl md:text-6xl text-4xl font-medium  lg:mt-16 md:mt-8 mt-8 lg:mx-20  whitespace-nowrap">
              <span className="inline-block relative ">
                <span className="bg-LightOrange absolute lg:top-20 top-8 md:top-12 left-0 lg:h-6 h-1 w-full"></span>
                <span className="relative">98%</span>
              </span>
              <span className="flex lg:text-sm md:text-sm text-xs font-medium lg:mx-8 md:mx-4 lg:my-6 md:my-4 mx-2 text-gray-400">
                of user saved time
              </span>
            </div>
          </div>
          <div className="col-span-1 mt-36">
            <div className=" lg:text-8xl md:text-6xl text-4xl font-medium  lg:mt-16 md:mt-8 mt-8 lg:mx-20  whitespace-nowrap">
              <span className="inline-block relative ">
                <span className="bg-LightOrange absolute lg:top-20 top-8 md:top-12 left-0 lg:h-6 h-1 w-full"></span>
                <span className="relative">26%</span>
              </span>
              <span className="flex flex-col lg:text-sm md:text-sm text-xs font-medium lg:mx-10 md:mx-4 lg:my-6 md:my-4 mx-2 text-gray-400">
                less email send <span className="flex">and recieved</span>
              </span>
            </div>
          </div>
          <div className="col-span-1 mt-28">
            <div className=" lg:text-8xl md:text-6xl text-4xl font-medium  lg:mt-16 md:mt-8 mt-8 lg:mx-20  whitespace-nowrap">
              <span className="inline-block relative ">
                <span className="bg-LightOrange absolute lg:top-20 top-8 md:top-12 left-0 lg:h-6 h-1 w-full"></span>
                <span className="relative">32%</span>
              </span>
              <span className="flex flex-col lg:text-sm md:text-sm text-xs font-medium lg:mx-8 md:mx-4 lg:my-6 md:my-4 mx-2 text-gray-400">
                Faster Project <span className="flex"> Completion</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Oval />

      <Footer />
    </>
  );
};
export default Product;
