import React from "react";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl z-10 md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Earn money from posting sponsored ads{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">
                on your Whatsapp status
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Sign up today and start earning
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none flex  items-center space-x-1 justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Link href="/register">
                    <Button size="xl" color="success">
                      Get Started
                    </Button>
                  </Link>
                </div>
                <div>
                  <Button
                    color="dark"
                    size="xl"
                    className=" text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative grid grid-cols-1 gap-y-10 md:grid-cols-2 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center relative ">
                <Image
                  className="mx-auto"
                  objectFit="contain"
                  src="/images/hero.svg"
                  width="768"
                  height="432"
                  alt="Hero"
                />
                <button className="absolute top-full md:w-[400px] transform -translate-y-1/2 inset-x-0 mx-auto bg-white rounded-full font-medium group p-4 shadow-lg">
                  <span className="">
                    You can earn over 50k monthly with easyBlurb
                  </span>
                </button>
              </div>
              <div className="flex flex-col justify-center relative">
                <Image
                  className="mx-auto"
                  objectFit="contain"
                  src="/images/Rectangle.svg"
                  width="768"
                  height="432"
                  alt="Hero"
                />
                <button className="absolute top-full md:w-[400px] transform -translate-y-1/2 inset-x-0 mx-auto bg-white rounded-full font-medium group p-4 shadow-lg">
                  <span className="">
                    Get up to 300% increase in Sales over a month
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
