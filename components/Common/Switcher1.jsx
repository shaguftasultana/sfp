import Image from "next/image";
const Switcher1 = () => {
  return (
    <>
      <section className="md:mt-40 lg:mt-2 mt-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  lg:gap-28  lg:mr-0 md:mr-0 mr-20">
        <div className=" flex flex-col lg:justify-end lg:items-end justify-center items-center lg:mr-0 md:mr-0 mr-20">
          <h1 className="text-2xl md:text-5xl lg:text-7xl  lg:leading-loose ">
            Built your
            <span className="flex">own workspace.</span>
          </h1>
          <div className="lg:mr-20 ">
            <p className=" lg:pt-6 md:py-4 py-2 text-gray-500 text-xs md:text-sm lg:text-xl lg:ml-0 md:ml-0 ml-20 whitespace-nowrap">
              It will take a couple of hours, but will save your
              <span className="flex ">company weeks in the long term.</span>
            </p>
          </div>

          <div
            role="tablist"
            aria-label="tabs"
            className="grid grid-rows-3 text-black lg:mr-10 lg:ml-0 md:ml-0 ml-40 whitespace-nowrap"
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
              <div className="flex items-center justify-between gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:h-4 lg:w-4 md:h-3 md:w-3 h-2 w-2"
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
                <span className="lg:text-xl md:text-sm text-xs font-bold">
                  Create
                </span>
              </div>
              <p className="lg:border-b-4 md:border-b-2 border-b-2  border-orange-500 lg:py-1 lg:mx-6 text-gray-500 lg:text-lg md:text-xs text-xs font-medium">
                Easy-to-use apps for each team with no codes
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
              <div className="flex items-center justify-between gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:h-4 lg:w-4 md:h-3 md:w-3 h-2 w-2"
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
                <span className="lg:text-xl md:text-sm text-xs font-bold">
                  Organize
                </span>
              </div>
              <p className="lg:pt-1 lg:mx-6 text-gray-500 lg:text-lg md:text-xs text-xs font-medium">
                Work into custom hierarchies, fields and formulas
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
              <div className="flex items-center justify-between gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:h-4 lg:w-4 md:h-3 md:w-3 h-2 w-2"
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
                <span className="lg:text-xl md:text-sm text-xs font-bold">
                  Visualize
                </span>
              </div>
              <p className=" lg:pt-1 lg:mx-6 text-gray-500 lg:text-lg md:text-xs text-xs font-medium">
                Workflows with Tables, Boards, Timelines,
                <span className="flex"> Charts & more.</span>
              </p>
            </button>
          </div>
        </div>

        <div
          data-target="panel-0"
          className="panel-preview transition duration-500 "
        >
          <div className="lg:mt-80">
            <Image
              src="/Images/Switcher1/1.png"
              alt="Switcher1 Image1"
              width="701"
              height="523"
              className="lg:ml-0 md:ml-0 ml-10 lg:mt-0 md:mt-0 mt-4 "
            />
          </div>
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
