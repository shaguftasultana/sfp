import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <section>
        <div>
          <div
            role="tablist"
            aria-label="tabs"
            className="relative mx-auto mt-12 grid h-12 w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:border-gray-700 dark:border-opacity-60 dark:bg-darker dark:text-gray-300 dark:shadow-none sm:w-max"
          >
            <div className="tab-indicator absolute h-10 rounded-full bg-white shadow-md transition-[left] duration-500 dark:bg-gray-800"></div>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-0"
              tabIndex="0"
              title="tab item"
              className="tab relative block rounded-full px-4 py-2.5 hover:text-primary dark:hover:text-primaryLight"
            >
              <span className="m-auto block w-max text-sm font-medium tracking-wider">
                First Tab
              </span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-1"
              tabIndex="-1"
              title="tab item"
              className="tab relative block rounded-full px-4 py-2.5 hover:text-primary dark:hover:text-primaryLight"
            >
              <span className="m-auto block w-max text-sm font-medium tracking-wider">
                Second Tab
              </span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              tabIndex="-1"
              title="tab item"
              className="tab relative block rounded-full px-4 py-2.5 hover:text-primary dark:hover:text-primaryLight"
            >
              <span className="m-auto block w-max text-sm font-medium tracking-wider">
                Third Tab
              </span>
            </button>
          </div>
        </div>

        <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
          <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
            <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
              <div
                data-target="panel-0"
                className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10"
              >
                <Image
                  src="/images/screenshots/tailus-home.webp"
                  className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                  alt="tailus screenshot"
                  loading="lazy"
                  width="850"
                  height="1780"
                />
              </div>
              <div
                data-target="panel-1"
                className="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-100 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10"
              >
                <Image
                  src="/images/screenshots/tailus-home-dark.webp"
                  className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                  alt="tailus screenshot dark-mode"
                  loading="lazy"
                  width="850"
                  height="1780"
                />
              </div>
              <div
                data-target="panel-2"
                className="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-100 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10"
              >
                <Image
                  src="/images/screenshots/tailus-contact.webp"
                  className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                  alt="tailus contact screenshot"
                  loading="lazy"
                  width="850"
                  height="1780"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Contact;
