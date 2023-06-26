import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" pb-8 pt-32  bg-black">
      <div>
        <div className="m-auto space-y-8 px-4 text-white sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="grid grid-cols-8 gap-6 md:gap-0">
            <div className="col-span-8 md:col-span-2 lg:col-span-3">
              <div className="flex h-full items-center justify-between gap-6 border-b border-white py-6  md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                <div>
                  <Image
                    src="/Images/Logo/SFP.svg"
                    alt="FooterLogo"
                    height="80"
                    width="80"
                    className="flex items-center lg:ml-10"
                  />
                  <h1 className="mt-4 inline-block text-xl text-white font-bold">
                    School Facility Pro
                  </h1>
                  <div className="text-sm mt-20 text-white">
                    @2023 School Facility Pro
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-8 md:col-span-6 lg:col-span-5">
              <div className="grid grid-cols-2 gap-6 pb-16 lg:grid-cols-4 md:pl-16">
                <div>
                  <h2 className="text-xl font-bold text-white ">Product</h2>
                  <ul className="mt-4 list-inside space-y-4   text-white">
                    <li>Landscape</li>
                    <li>Features</li>
                    <li>Documnentaion</li>
                    <li>Referal Program</li>
                    <li>Pricing</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Services</h2>
                  <ul className="mt-4 list-inside space-y-4 text-white">
                    <li>Documnentaion</li>
                    <li>Design</li>
                    <li>Themes</li>
                    <li>Illustrations</li>
                    <li>UI Kit</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white ">Company</h2>
                  <ul className="mt-4 list-inside space-y-4 text-white">
                    <li>About</li>
                    <li>Terms</li>
                    <li>Privacy and Policy</li>
                    <li>Careers</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">More</h2>
                  <ul className="mt-4 list-inside space-y-4 text-white">
                    <li>Documentation</li>
                    <li>Lisence</li>
                    <li>Changing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
