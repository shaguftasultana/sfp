import Image from "next/image";

const Oval = () => {
  return (
    <>
      <footer className="relative h-screen  text-white mt-40 mb-40">
        <div className="absolute bottom-0 left-0 right-0 pb-10 flex items-end justify-center space-x-4">
          {/* Planets and Descriptions */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/path/to/your/image.jpg"
              alt="Planet 1"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>Planet 1 description</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/path/to/your/image.jpg"
              alt="Planet 2"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>Planet 2 description</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/path/to/your/image.jpg"
              alt="Planet 3"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>Planet 3 description</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/path/to/your/image.jpg"
              alt="Planet 4"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>Planet 4 description</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-full ">
          <div className="absolute w-full h-full rounded-full border-t-2 border-gray-500"></div>
          <div className="absolute w-[75%] h-[75%] top-[12.5%] left-[12.5%] rounded-full border-t-2 border-gray-400"></div>
          <div className="absolute w-[50%] h-[50%] top-[25%] left-[25%] rounded-full border-t-2 border-gray-300"></div>
          <div className="absolute w-[25%] h-[25%] top-[37.5%] left-[37.5%] rounded-full border-t-2 border-gray-200"></div>
        </div>
      </footer>
    </>
  );
};
export default Oval;
