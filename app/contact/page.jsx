import Footer from "@/components/Common/Footer";
import Oval from "@/components/Common/Oval";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section>
        <div></div>
        <div>
          <main>
            <section class="py-32 sm:pt-40 md:pt-48 lg:pt-56">
              <div class="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                <div class="mt-12 grid gap-12 sm:mx-auto sm:max-w-lg lg:max-w-max lg:grid-cols-2">
                  <div class="relative">
                    <form
                      action="https://formspree.io/f/xqkorpwb"
                      method="POST"
                      class="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12"
                    >
                      <div class="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
                      <div class="relative">
                        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
                          What should we know ?
                        </h2>
                        <div class="mt-8 mb-6 space-y-4">
                          <div>
                            <label
                              for="name"
                              class="mb-2 block text-gray-600 dark:text-gray-300"
                            >
                              Your name{" "}
                              <span class="text-xl text-red-500 dark:text-red-400">
                                *
                              </span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              autocomplete="name"
                              class="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                            />
                            <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                              Helper
                            </span>
                          </div>
                          <div>
                            <label
                              for="email"
                              class="mb-2 block text-gray-600 dark:text-gray-300"
                            >
                              Work email{" "}
                              <span class="text-xl text-red-500 dark:text-red-400">
                                *
                              </span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              autocomplete="email"
                              class="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                            />
                            <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                              Helper
                            </span>
                          </div>
                          <div>
                            <label
                              for="phone"
                              class="mb-2 block text-gray-600 dark:text-gray-300"
                            >
                              Phone{" "}
                              <span class="text-xl text-red-500 dark:text-red-400">
                                *
                              </span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              id="phone"
                              autocomplete="tel"
                              class="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                            />
                            <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                              Helper
                            </span>
                          </div>
                          <div>
                            <label
                              for="company"
                              class="mb-2 block text-gray-600 dark:text-gray-300"
                            >
                              Company name{" "}
                              <span class="text-xl text-red-500 dark:text-red-400">
                                *
                              </span>
                            </label>
                            <input
                              type="text"
                              name="company"
                              id="company"
                              autocomplete="work"
                              class="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                            />
                            <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                              Helper
                            </span>
                          </div>
                          <div>
                            <label
                              for="message"
                              class="mb-2 block text-gray-600 dark:text-gray-300"
                            >
                              Message
                            </label>
                            <textarea
                              name="message"
                              id="message"
                              class="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                            ></textarea>

                            <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                              Helper
                            </span>
                          </div>
                        </div>

                        <p class="mb-8 text-sm text-gray-600 dark:text-gray-300">
                          By clicking submit below, you agree to the processing
                          of your personal information by PlanetScale as
                          described in the Privacy Policy.
                        </p>

                        <button
                          type="submit"
                          class="relative ml-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight"
                        >
                          <span class="relative text-base font-semibold text-white dark:text-gray-900">
                            Get started
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>

                  <div>
                    <div class="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:px-12">
                      <div class="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
                      <div class="relative">
                        <div class="relative z-10 text-center md:mx-auto md:w-5/6 lg:w-4/6">
                          <h1 class="relative text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                            Start building <span class="opacity-80">here.</span>
                          </h1>
                          <p class="mt-6 text-gray-700 dark:text-gray-300">
                            We'll help you find the right plan and pricing for
                            your business.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 lg:gap-x-24">
                      <Image
                        class="h-8 w-auto lg:h-10 lg:w-auto"
                        src="/Images/Pricing/BrandLogos/b1.png"
                        loading="lazy"
                        alt="airbnb"
                        width="100"
                        height="100"
                      />
                      <Image
                        class="h-8 w-auto lg:h-10 lg:w-auto"
                        src="/Images/Pricing/BrandLogos/b3.png"
                        loading="lazy"
                        alt="coty"
                        width="100"
                        height="100"
                      />
                      <Image
                        class="h-8 w-auto lg:h-10 lg:w-auto"
                        src="/Images/Pricing/BrandLogos/b1.png"
                        loading="lazy"
                        alt="ge"
                        width="100"
                        height="100"
                      />
                      <Image
                        class="h-8 w-auto lg:h-10 lg:w-auto"
                        src="/Images/Pricing/BrandLogos/b3.png"
                        loading="lazy"
                        alt="lilly"
                        width="100"
                        height="100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </section>
      <Oval />
      <Footer />
    </>
  );
};
export default Contact;
