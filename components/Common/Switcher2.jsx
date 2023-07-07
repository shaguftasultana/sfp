import Image from "next/image";
const Switcher2 = () => {
  return (
    <>
      <section className="mt-6 flex flex-col justify-center items-center ">
        <div>
          <div
            role="tablist"
            aria-label="tabs"
            className=" grid grid-cols-3    text-black"
          >
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-0"
              tabIndex="0"
              title="tab item"
              className="lg:border-t-4 md:border-t-2 border-t-2  border-Orange tab flex flex-col items-start"
            >
              <div className="flex items-center justify-between gap-2">
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
              <p className=" lg:py-2  text-gray-500 lg:text-lg md:text-xs text-sm font-medium">
                Your description for the first tab
              </p>
            </button>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-0"
              tabIndex="0"
              title="tab item"
              className="tab flex flex-col items-start lg:border-t-4 md:border-t-2 border-t-2  border-gray-200 w-full lg:px-6"
            >
              <div className="flex items-center justify-between gap-2 ">
                <span className="lg:text-2xl md:text-md text-sm font-bold">
                  Link
                </span>
              </div>
              <p className=" lg:py-2  text-gray-500 lg:text-lg md:text-xs text-sm font-medium">
                Your description for the first tab
              </p>
            </button>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-0"
              tabIndex="0"
              title="tab item"
              className="tab flex flex-col items-start lg:border-t-4 md:border-t-2 border-t-2  border-gray-200 lg:px-6"
            >
              <div className=" flex items-center justify-between gap-2">
                <span className="lg:text-2xl md:text-md text-sm font-bold">
                  Decentralize
                </span>
              </div>
              <p className=" lg:py-2 text-gray-500 lg:text-lg md:text-xs text-sm font-medium">
                Your description for the first tab
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
            className="lg:ml-40 md:p-0 p-4 "
          />
        </div>
      </section>
    </>
  );
};
export default Switcher2;
