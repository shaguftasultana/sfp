import Footer from "@/components/Common/Footer";
import PaymentPlans from "@/components/Common/PaymentPlan";
import Tables from "@/components/Common/Tables";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const pricing = () => {
  return (
    <>
      <Navbar />
      <section className="flex mt-40 justify-center items-center">
        <div className="flex flex-col items-center justify-center  ">
          <p className=" lg:py-8 text-gray-400 text-xs font-semibold md:text-sm lg:text-xl text-center">
            PRICING
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-center lg:leading-loose">
            One tool for your
            <span className="flex my-2">
              whole team
              <span className="bg-LightOrange ml-2">needs.</span>
            </span>
          </h1>
          <p className="lg:py-4 text-gray-500 text-sm md:text-md lg:text-xl text-center">
            Try Oval free for 30 days to start connected with all your teams.
            <span className="flex items-center justify-center">
              Cancel any time. No credit card required.
            </span>
          </p>
        </div>
      </section>
      <section>
        <div className="flex  text-center items-center justify-center mt-4 text-lg">
          <div>
            <span className="text-orange-500">save 13%</span>
            <span className="text-black  flex ">Annual plans</span>
          </div>

          <label htmlFor="toggle" className="relative ml-4">
            <input type="checkbox" id="toggle" className="hidden" />
            <svg
              className="toggle-button "
              viewBox="0 0 24 12"
              width="79"
              height="38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0" y="0" width="24" height="12" rx="6" fill="#FF6846" />
              <circle
                cx="6"
                cy="6"
                r="5"
                fill="white"
                className="toggle-indicator"
              />
            </svg>
          </label>
          <span className="text-black ml-4 text-lg">Monthly Plans</span>
        </div>
      </section>
      <PaymentPlans />
      <section className="flex flex-col items-center justify-center">
        <div>
          <p className="lg:py-4 text-gray-500 text-sm md:text-md lg:text-xl text-center">
            Leading Brands trust Oval for Teamwork Software
          </p>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-6 grid-cols-3 mt-4 lg:gap-20 md:gap-10 gap-4">
          <div>
            <Image
              src="/Images/Pricing/BrandLogos/b1.png"
              alt="PricingBrandLogo1"
              height="50"
              width="150"
            />
          </div>
          <div>
            <Image
              src="/Images/Pricing/BrandLogos/b2.png"
              alt="PricingBrandLogo2"
              height="45"
              width="150"
            />
          </div>
          <div>
            <Image
              src="/Images/Pricing/BrandLogos/b3.png"
              alt="PricingBrandLogo3"
              height="79"
              width="120"
            />
          </div>
          <div>
            <Image
              src="/Images/Pricing/BrandLogos/b4.png"
              alt="PricingBrandLogo4"
              height="38"
              width="150"
            />
          </div>
          <div>
            <Image
              src="/Images/Pricing/BrandLogos/b5.png"
              alt="PricingBrandLogo5"
              height="41"
              width="150"
            />
          </div>
          <div>
            <Image
              src="/Images/Pricing/BrandLogos/b6.png"
              alt="PricingBrandLogo6"
              height="31"
              width="150"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="mt-80">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-center lg:leading-loose">
            Full Plan Comparison
          </h1>
        </div>
        <Tables />
      </section>
      <Footer />
    </>
  );
};
export default pricing;
