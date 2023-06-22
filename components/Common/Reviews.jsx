import Image from "next/image";

const Reviews = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 col-start px-60 py-8">
          <div className="lg:border-r-2 md:border-b-2 border-b-2 border-gray-300 flex flex-col items-center space-y-4">
            <p className="text-gray-800 text-md  max-w-[260px] font-medium">
              "I received great customer service from the specialists who helped
              me. I would recommend to anyone who wants great dashboard that has
              great quality"
            </p>
            <div className="flex space-x-4 mr-20">
              <div>
                <Image
                  className="rounded-full"
                  src="/Images/Reviews/jaffar.jpg"
                  alt="PersonImage"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <p className="text-black font-normal">Jafar Andishmand</p>
                <p className="text-sm text-gray-500">Frontend Designer</p>
              </div>
            </div>
          </div>
          <div className="lg:border-r-2 md:border-b-2 border-b-2 border-gray-300 flex flex-col items-center space-y-4">
            <p className="text-gray-800 text-md  max-w-[260px] font-medium">
              "I received great customer service from the specialists who helped
              me. I would recommend to anyone who wants great dashboard that has
              great quality"
            </p>
            <div className=" flex space-x-4 mr-20 ">
              <div>
                <Image
                  className="rounded-full"
                  src="/Images/Reviews/jaffar.jpg"
                  alt="PersonImage"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <p className="text-black font-normal">Jafar Andishmand</p>
                <p className="text-sm text-gray-500">Frontend Designer</p>
              </div>
            </div>
          </div>
          <div className=" lg:border-r-2 md:border-b-2 border-b-2 text-gray-800 flex flex-col items-center space-y-4">
            <p className="text-md  max-w-[260px] font-medium">
              "I received great customer service from the specialists who helped
              me. I would recommend to anyone who wants great dashboard that has
              great quality"
            </p>
            <div className="flex space-x-4 mr-20">
              <div>
                <Image
                  className="rounded-full"
                  src="/Images/Reviews/jaffar.jpg"
                  alt="PersonImage"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <p className="text-black font-normal">Jafar Andishmand</p>
                <p className="text-sm text-gray-500">Frontend Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Reviews;
