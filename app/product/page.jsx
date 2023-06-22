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
          alt="Landing1"
          width="1423"
          height="671"
        />
      </section>
      <section>
        <Reviews />
      </section>
    </>
  );
};
export default Product;
