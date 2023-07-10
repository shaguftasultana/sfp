import Navbar from "@/components/Navbar";
import Reviews from "@/components/Common/Reviews";
import PaymentPlans from "@/components/Common/PaymentPlan";
import Footer from "@/components/Common/Footer";
import Switcher1 from "@/components/Common/Switcher1";
import Image from "next/image";
import Switcher2 from "@/components/Common/Switcher2";
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
      <Switcher1 />
      <section className="flex lg:mt-40 md:mt-40 mt-10 justify-center items-center">
        <div className="flex flex-col items-center justify-center  ">
          <h1 className="text-2xl md:text-5xl lg:text-7xl text-center lg:leading-loose">
            Bring all the roles
            <span className="bg-LightBlue ml-4">together.</span>
          </h1>
          <p className=" lg:py-6 md:py-4 py-2 text-gray-500 text-xs md:text-sm lg:text-xl text-center">
            We believe in autonomous teams that own their
            <span className="flex items-center justify-center">
              work and their piece of workspace.
            </span>
          </p>
        </div>
      </section>
      <Switcher2 />
      <Switcher1 />
      <section className="lg:mt-40 flex flex-row  justify-center items-center lg:mr-60 md:mt-10 md:mr-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className=" h-10 w-10 md:h-20 md:w-20 lg:h-32 lg:w-32 lg:mr-8 md:mr-4 mr-2"
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
          <h1 className="text-2xl md:text-4xl lg:text-7xl text-center lg:leading-loose lg:mt-20 md:mt-10 mt-8 whitespace-nowrap">
            Loved by so many people
            <span className="flex flex-row">around the world.</span>
          </h1>
        </div>
      </section>
      <section className="lg:mt-20">
        <Reviews />
      </section>
      <section className="flex mt-20 items-center justify-center  lg:mx-20 ">
        <div className="grid grid-cols-2 lg:gap-40 md:gap-40 gap-2 ">
          <div className="col-span-1">
            <div className="grid grid-rows-3 lg:gap-2 md:gap-2">
              <div className=" lg:text-8xl md:text-6xl text-4xl font-medium  lg:mt-16 md:mt-8 mt-8 lg:mx-20  whitespace-nowrap">
                <span className="inline-block relative ">
                  <span className="bg-LightOrange absolute lg:top-20 top-8 md:top-12 left-0 lg:h-6 h-1 w-full"></span>
                  <span className="relative">10 years</span>
                </span>
                <span className="flex lg:text-sm md:text-sm text-xs font-medium lg:mx-32 md:mx-14 lg:my-4 md:my-2 mx-6 text-gray-500">
                  In business
                </span>
              </div>
              <div className="lg:text-8xl md:text-6xl text-4xl font-medium  lg:mt-16 lg:mx-20  whitespace-nowrap ">
                <span className="inline-block relative lg:mt-20 md:mt-12 mt-12">
                  <span className="bg-LightOrange absolute lg:top-20 top-8 md:top-12 left-0 lg:h-6 h-1 w-full"></span>
                  <span className="relative">1,092</span>
                </span>
                <span className="flex  lg:text-sm md:text-sm text-xs font-medium lg:mx-12 md:mx-4 lg:my-4 text-gray-500  md:my-2">
                  Partner Company
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-rows-3 lg:gap-2 md:gap-2">
              <div className="text-gray-500 lg:mt-10 md:mt-6 mt-6 lg:text-2xl md:text-sm text-xs">
                Businesses all over the world
                <span className="flex">trust Oval to Build their own</span>
                <span className="flex">workflow</span>
              </div>
              <div className="lg:text-8xl md:text-6xl text-4xl font-medium  lg:mt-2 lg:mx-4  whitespace-nowrap">
                <span className="inline-block relative">
                  <span className="bg-LightOrange absolute lg:top-20 top-8 md:top-12 left-0 lg:h-6 h-1 w-full"></span>
                  <span className="relative">75,000+</span>
                </span>
                <span className="flex  lg:text-sm md:text-sm text-xs font-medium mx-12 lg:mx-32 md:mx-20 lg:my-4 text-gray-500  md:my-2">
                  Customers
                </span>
              </div>
              <div className="lg:text-8xl md:text-6xl text-4xl font-medium  lg:mt-16 lg:mx-20  whitespace-nowrap ">
                <span className="inline-block relative lg:mt-10 md:mt-6 mt-6">
                  <span className="bg-LightOrange absolute lg:top-20 top-8 md:top-12 left-0 lg:h-6 h-1 w-full"></span>
                  <span className="relative">39+</span>
                </span>
                <span className="flex  lg:text-sm md:text-sm text-xs font-medium mx-2 lg:mx-10 lg:my-4 text-gray-500  md:my-2">
                  Branch office
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-4 flex flex-col justify-center">
        <div className="col-span-1 ">
          <Image
            src="/Images/Landing/Utils/1.png"
            alt="LandingUtil1"
            height="358"
            width="196"
          />
        </div>
        <div className="col-span-2 lg:mt-60 md:mt-80 mt-40  flex flex-col justify-center items-center">
          <h1 className=" text-2xl md:text-5xl lg:text-7xl lg:leading-loose whitespace-nowrap">
            Ovals Plans and Pricing
          </h1>
          <p className="lg:mx-32 lg:py-6 md:mx-40 md:py-4 py-2 text-gray-500 text-xs md:text-sm lg:text-xl  whitespace-nowrap mx-8">
            30-day free trial, cancel anytime,
            {/* <span className="lg:no-flex md:no-flex flex md:ml-2 lg:ml-0 ml-2"> */}
            No credit card required
            {/* </span> */}
          </p>
        </div>
      </section>
      <section>
        <div className=" sm:ml-10 flex  text-center items-center justify-center lg:mt-4 lg:text-lg md:text-sm text-xs">
          <div>
            <span className="text-orange-500">save 13%</span>
            <span className="text-gray-500 flex ">Annual plans</span>
          </div>

          <label htmlFor="toggle" className="relative ml-4">
            <input type="checkbox" id="toggle" className="hidden" />
            <svg
              className="toggle-button lg:h-32 lg:w-32 md:h-20 md:w-20 h-10 w-10  "
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
          <span className="text-gray-500 ml-4 lg:text-lg md:text-sm text-xs">
            Monthly Plans
          </span>
        </div>
      </section>

      <PaymentPlans />
      <Footer />
    </>
  );
};
export default landing;
