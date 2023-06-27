import Footer from "@/components/Common/Footer";
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
              src="/Images/Product/4.png"
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
        </div>
      </section>
      <section className="flex lg:mt-40 mt-10 ml-12">
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
      <section>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-col h-full justify-between">
              <div className="mb-8">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                      fill="#a3a09f"
                    ></path>
                  </svg>
                </svg>
                <h3 className="text-lg font-bold mt-2">Heading 1</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="mb-8">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                      fill="#a3a09f"
                    ></path>
                  </svg>
                </svg>
                <h3 className="text-lg font-bold mt-2">Heading 2</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div>
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                      fill="#a3a09f"
                    ></path>
                  </svg>
                </svg>
                <h3 className="text-lg font-bold mt-2">Heading 3</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-col h-full justify-between">
              <div className="mb-8">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                      fill="#a3a09f"
                    ></path>
                  </svg>
                </svg>
                <h3 className="text-lg font-bold mt-2">Heading 4</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="mb-8">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                      fill="#a3a09f"
                    ></path>
                  </svg>
                </svg>
                <h3 className="text-lg font-bold mt-2">Heading 5</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div>
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                      fill="#a3a09f"
                    ></path>
                  </svg>
                </svg>
                <h3 className="text-lg font-bold mt-2">Heading 6</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Product;
