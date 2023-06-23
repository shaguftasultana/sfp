import Image from "next/image";
import Navbar from "@/components/Navbar";
import Build from "@/components/Common/Build";
import Reviews from "@/components/Common/Reviews";
import PaymentPlans from "@/components/Common/PaymentPlan";
import Footer from "@/components/Common/Footer";
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
          <p className=" lg:py-8 text-gray-500 text-xs md:text-sm lg:text-xl text-center">
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
      <section className="flex  lg:mt-20 mt-4 justify-center items-center">
        <div className="flex flex-col items-center justify-center  ">
          <h1 className="text-sm md:text-sm lg:text-2xl text-center font-bold">
            Tools erect walls
          </h1>
          <p className=" lg:py-1 text-gray-500 text-xs md:text-sm lg:text-lg text-center">
            Collaboration is a struggle, when everybody uses a different app.
            <span className="flex items-center justify-center">
              We have solution for that.
            </span>
          </p>
        </div>
      </section>
      <Build />
      <section className="flex mt-40 justify-center items-center">
        <div className="flex flex-col items-center justify-center  ">
          <h1 className="text-2xl md:text-5xl lg:text-7xl text-center lg:leading-loose">
            Bring all the roles
            <span className="bg-LightBlue ml-4">together.</span>
          </h1>
          <p className=" lg:py-6 text-gray-500 text-xs md:text-sm lg:text-xl text-center">
            Built your own workspace to replace isolated tools
            <span className="flex items-center justify-center">
              and bring everyone together.
            </span>
          </p>
        </div>
      </section>
      <section className="flex justify-start lg:ml-40 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="120"
          width="120"
          className="lg:mr-8"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="#FF6846"
              d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
            />
          </g>
        </svg>
        <div>
          <h1 className="text-2xl md:text-5xl lg:text-7xl text-center lg:leading-loose mt-2 ">
            Loved by so many people
            <span className="flex">around the world.</span>
          </h1>
        </div>
      </section>
      <section className="lg:mt-8">
        <Reviews />
      </section>
      <section className="flex  items-center justify-center mt-20 mx-20">
        <div className="grid grid-cols-2 gap-40">
          <div className="col-span-1">
            <div className="grid grid-rows-3 gap-2">
              <div className=" lg:text-8xl sm:text-6xl text-2xl font-medium  mt-16 mx-20  ">
                <span className="inline-block relative">
                  <span className="bg-LightOrange absolute lg:top-20 top-8 left-0 lg:h-6 h-1 w-full"></span>
                  <span className="relative">10 years</span>
                </span>
                <span className="flex text-sm  font-normal mx-32 my-4 text-gray-500">
                  In business
                </span>
              </div>
              <div className=" text-8xl font-medium mx-20 ">
                <span className="inline-block relative mt-20">
                  <span className="bg-LightOrange absolute top-20 left-0 h-6 w-full"></span>
                  <span className="relative">1,092</span>
                </span>
                <span className="flex text-sm  font-normal mx-16 my-4 text-gray-500">
                  Partner Company
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-rows-3 gap-2">
              <div className="text-gray-500 mt-10 text-lg">
                Businesses all over the world
                <span className="flex">trust Oval to Build their own</span>
                <span className="flex">workflow</span>
              </div>
              <div className=" text-8xl font-medium ">
                <span className="inline-block relative">
                  <span className="bg-LightOrange absolute top-20 left-0 h-6 w-full"></span>
                  <span className="relative">75,000+</span>
                </span>
                <span className="flex text-sm  font-normal mx-32 my-4 text-gray-500">
                  Customers
                </span>
              </div>
              <div className=" text-8xl font-medium  ">
                <span className="inline-block relative mt-10">
                  <span className="bg-LightOrange absolute top-20 left-0 h-6 w-full"></span>
                  <span className="relative">39+</span>
                </span>
                <span className="flex text-sm  font-normal mx-10 my-4 text-gray-500">
                  Branch office
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Image
          src="/Images/Landing/Utils/1.png"
          alt="LandingUtil1"
          height="358"
          width="196"
        />
      </section>
      <section>
        <h1 className="text-2xl md:text-5xl lg:text-7xl text-center lg:leading-loose">
          Ovals Plans and Pricing
        </h1>
        <p className="text-center lg:py-6 text-gray-500 text-xs md:text-sm lg:text-xl">
          30-day free trial, cancel anytime. No credit card required.
        </p>
        <div className="flex  text-center items-center justify-center mt-4 text-lg">
          <div>
            <span className="text-orange-500">save 13%</span>
            <span className="text-gray-500 flex ">Annual plans</span>
          </div>

          <label htmlFor="toggle" className="relative ml-4">
            <input type="checkbox" id="toggle" className="hidden" />
            <svg
              className="toggle-button"
              viewBox="0 0 24 12"
              width="89"
              height="47"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0" y="0" width="24" height="12" rx="6" fill="#FF6846" />
              <circle
                cx="6"
                cy="6"
                r="5"
                fill="white"
                className="toggle-indicator"
              />
            </svg>
          </label>
          <span className="text-gray-500 ml-4 text-lg">Monthly Plans</span>
        </div>
      </section>
      <PaymentPlans />
      <Footer />
    </>
  );
};
export default landing;
