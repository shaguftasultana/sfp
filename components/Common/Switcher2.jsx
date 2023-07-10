import Image from "next/image";
const Switcher2 = () => {
  return (
    <>
      <section className="mt-6 flex flex-col justify-center items-center ">
        <div>
          <div
            role="tablist"
            aria-label="tabs"
            className=" grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 text-black lg:gap-0 md:gap-0 gap-2  "
          >
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-0"
              tabIndex="0"
              title="tab item"
              className="lg:border-t-4 md:border-t-2 border-t-2  border-Orange tab flex flex-col items-start lg:mr-20 md:mr-14 w-full"
            >
              <div className="flex items-center justify-between lg:gap-2 md:gap-2 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:h-5 lg:w-5 md:h-4 md:w-4 h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                {/* <div className="tab-indicator  h-1 w-2/3 bg-orange-500 transition-[top] duration-500"></div> */}

                <span className="lg:text-2xl md:text-md text-sm font-bold">
                  Align
                </span>
              </div>
              <p className=" lg:py-2  text-gray-500 lg:text-lg md:text-xs text-xs font-medium">
                Ideas and knowledge with real-time
                <span className="flex">collaborative wiki.</span>
              </p>
            </button>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-0"
              tabIndex="0"
              title="tab item"
              className="tab flex flex-col items-start lg:border-t-4 md:border-t-2   border-gray-200 w-full lg:px-6 md:px-4 lg:mr-20 w-full md:mr-14"
            >
              <div className="flex items-center justify-between gap-2 ">
                <span className="lg:text-2xl md:text-md text-sm font-bold">
                  Link
                </span>
              </div>
              <p className=" lg:py-2  text-gray-500 lg:text-lg md:text-xs text-xs font-medium">
                Visually by building roadmap that
                <span className="flex">are always up to date.</span>
              </p>
            </button>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-0"
              tabIndex="0"
              title="tab item"
              className="tab flex flex-col items-start lg:border-t-4 md:border-t-2  md:px-2 border-gray-200 lg:px-6"
            >
              <div className=" flex items-center justify-between gap-2">
                <span className="lg:text-2xl md:text-md text-sm font-bold">
                  Decentralize
                </span>
              </div>
              <p className=" lg:py-2 text-gray-500 lg:text-lg md:text-xs text-xs font-medium">
                Smoothly when every body knows
                <span className="flex">what is important.</span>
              </p>
            </button>
          </div>
        </div>

        <div
          data-target="panel-0"
          className="panel-preview transition duration-500 flex flex-col justify-center items-center lg:mt-20 "
        >
          <Image
            src="/Images/Switcher2/1.png"
            alt="Switcher2 Image1"
            width="1132"
            height="690"
            className="lg:ml-4 md:p-10 p-4 lg:p-0"
          />
        </div>
      </section>
    </>
  );
};
export default Switcher2;
