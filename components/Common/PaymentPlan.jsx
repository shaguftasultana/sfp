const PaymentPlans = () => {
  return (
    <>
      <section className="mt-10 flex flex-col justify-center items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:px-40 lg:py-10 lg:gap-0 md:gap-2 gap-4">
          <div className="justify-center text-center border-gray-300 lg:rounded-l-lg border md:p-2 p-2 lg:p-16">
            <h2 className="text-lg font-bold mb-1">Starter</h2>
            <p className="mb-10 text-gray-500">Upto 20 People</p>
            <h2 className="text-2xl font-bold mb-1">$199</h2>
            <p className="mb-10 text-gray-500">
              Per month, billed annually in USD
            </p>
            <p className="mb-10 text-gray-500 underline">
              Contact us for Qoute
            </p>

            <button className="bg-Orange text-white py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
          <div className="justify-center text-center border-gray-300 border md:p-2 p-2 lg:p-16">
            <h2 className="text-lg font-bold mb-1">Growth</h2>
            <p className="mb-10 text-gray-500">Upto 20 People</p>
            <h2 className="text-2xl font-bold mb-1">$499</h2>
            <p className="mb-10 text-gray-500">
              Per month, billed annually in USD
            </p>
            <p className="mb-10 text-gray-500 underline">
              Contact us for Qoute
            </p>

            <button className="bg-Orange text-white py-2 px-4 rounded ">
              Buy Now
            </button>
          </div>
          <div className="justify-center text-center border-gray-300  border md:p-2 p-2 lg:p-16">
            <h2 className="text-lg font-bold mb-1">Midsize</h2>
            <p className="mb-10 text-gray-500">Upto 20 People</p>
            <h2 className="text-2xl font-bold mb-1">$899</h2>
            <p className="mb-10 text-gray-500">
              Per month, billed annually in USD
            </p>
            <p className="mb-10 text-gray-500 underline">
              Contact us for Qoute
            </p>

            <button className="bg-Orange text-white py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
          <div className="justify-center text-center border-gray-300 lg:rounded-r-lg border md:p-2 p-2 lg:p-16">
            <h2 className="text-lg font-bold mb-1">Large</h2>
            <p className="mb-10 text-gray-500">Upto 20 People</p>
            <h2 className="text-2xl font-bold mb-1">$1,999</h2>
            <p className="mb-10 text-gray-500">
              Per month, billed annually in USD
            </p>
            <p className="mb-10 text-gray-500 underline">
              Contact us for Qoute
            </p>

            <button className="bg-Orange text-white py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 bg-gray-100 lg:mx-40 lg:py-4 lg:px-40 md:py-2 py-2  my-4 rounded-xl lg:gap-0 md:gap-1 gap-1">
          <h1 className="lg:text-2xl font-bold flex items-center justify-center lg:gap-4 md:gap-1 gap-1">
            Enterprise
            <span className="lg:text-xl text-gray-500 font-normal whitespace-nowrap">
              For companies with over 1,000+ people
            </span>
          </h1>

          <button className="lg:ml-80 md:ml-80 ml-40  lg:py-3 md:py-1 py-1 lg:px-2 text-sm bg-Orange text-white rounded-lg border border-gray-400">
            Contact us
          </button>
        </div>
      </section>
      <section className="flex  lg:mt-10 mt-4 justify-center items-center">
        <div className="flex flex-col items-center justify-center mb-40 ">
          <p className=" lg:py-1 text-gray-500 text-xs md:text-sm lg:text-lg text-center">
            See how an all-in-one Oval plan stacks up against the competition
            and saves you money
          </p>
          <h1 className="text-sm md:text-sm lg:text-2xl text-center font-bold">
            Compare Prices
          </h1>
        </div>
      </section>
    </>
  );
};
export default PaymentPlans;
