import Image from "next/image";

const Oval = () => {
  return (
    <>
      <footer className="relative h-screen  text-white mt-40 mb-40">
        <div className="relative w-40 h-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path
              fill="none"
              stroke="gray"
              strokeWidth="2"
              d="M0 50 Q50 0 100 50"
            />
          </svg>
          <div className="absolute flex justify-between items-center w-40 h-20">
            <img
              src="image1.jpg"
              alt="Image 1"
              className="w-8 h-8 rounded-full"
              style={{ transform: "rotate(45deg) translateY(-50%)" }}
            />
            <img
              src="image2.jpg"
              alt="Image 2"
              className="w-8 h-8 rounded-full"
              style={{ transform: "rotate(90deg) translateY(-50%)" }}
            />
            <img
              src="image3.jpg"
              alt="Image 3"
              className="w-8 h-8 rounded-full"
              style={{ transform: "rotate(135deg) translateY(-50%)" }}
            />
            <img
              src="image4.jpg"
              alt="Image 4"
              className="w-8 h-8 rounded-full"
              style={{ transform: "rotate(180deg) translateY(-50%)" }}
            />
          </div>
        </div>
        <div className="absolute w-full h-full rounded-full border-t-2 border-gray-500"></div>
        <div className="absolute w-[75%] h-[75%] top-[12.5%] left-[12.5%] rounded-full border-t-2 border-gray-400"></div>
        <div className="absolute w-[50%] h-[50%] top-[25%] left-[25%] rounded-full border-t-2 border-gray-300"></div>
        <div className="absolute w-[25%] h-[25%] top-[37.5%] left-[37.5%] rounded-full border-t-2 border-gray-200"></div>
      </footer>
    </>
  );
};
export default Oval;
