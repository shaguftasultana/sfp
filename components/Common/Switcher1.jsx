import Image from "next/image";
const Switcher1 = () => {
  return (
    <>
      <section className="lg:mt-60 mt-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  lg:gap-20  ">
        <div className=" flex flex-col lg:justify-end lg:items-end justify-center items-center">
          <h1 className="text-2xl md:text-5xl lg:text-7xl  lg:leading-loose">
            Built your
            <span className="flex">own workspace.</span>
          </h1>
          <div className="lg:mr-20 ">
            <p className=" lg:py-6 md:py-4 py-2 text-gray-500 text-xs md:text-sm lg:text-xl ">
              It will take a couple of hours , but will save your
              <span className="flex ">company weeks in the long term.</span>
            </p>
          </div>

          <div
            role="tablist"
            aria-label="tabs"
            className="grid grid-rows-3 lg:gap-1 md:gap-2 gap-2 text-black lg:mr-48 md:mr-20"
          >
            {/* <div className="tab-indicator  h-1 w-1/3 bg-orange-500 transition-[bottom] duration-500"></div> */}
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-0"
              tabIndex="0"
              title="tab item"
              className="tab flex flex-col items-start"
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
                <span className="lg:text-2xl md:text-md text-sm font-bold">
                  Create
                </span>
              </div>
              <p className="lg:border-b-4 md:border-b-2 border-b-2  border-orange-500 lg:py-2 lg:mx-6 text-gray-500 lg:text-lg md:text-xs text-sm font-medium">
                Your description for the first tab
              </p>
            </button>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-0"
              tabIndex="0"
              title="tab item"
              className="tab flex flex-col items-start"
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
                <span className="lg:text-2xl md:text-md text-sm font-bold">
                  Organize
                </span>
              </div>
              <p className=" lg:py-2 lg:mx-6 text-gray-500 lg:text-lg md:text-xs text-sm font-medium">
                Your description for the first tab
              </p>
            </button>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-0"
              tabIndex="0"
              title="tab item"
              className="tab flex flex-col items-start"
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
                <span className="lg:text-2xl md:text-md text-sm font-bold">
                  Visualize
                </span>
              </div>
              <p className=" lg:py-2 lg:mx-6 text-gray-500 lg:text-lg md:text-xs text-sm font-medium">
                Your description for the first tab
              </p>
            </button>
          </div>
        </div>

        <div
          data-target="panel-0"
          className="panel-preview transition duration-500 "
        >
          <Image
            src="/Images/Switcher1/1.png"
            alt="Switcher1 Image1"
            width="701"
            height="523"
            className="lg:p-0 md:p-0 p-4"
          />
        </div>
        {/* <div
          data-target="panel-1"
          className="panel-preview transition duration-500 "
        >
          <Image
            src="/Images/Switcher1/2.png"
            alt="Switcher1 Image2"
            width="701"
            height="523"
          />
        </div>
        <div
          data-target="panel-2"
          className="panel-preview transition duration-500 "
        >
          <Image
            src="/Images/Switcher1/3.png"
            alt="Switcher1 Image3"
            width="701"
            height="523"
          />
        </div> */}
      </section>
    </>
  );
};
export default Switcher1;
