import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div id="about" className="w-full relative">
      <div class="flex flex-wrap md:flex-nowrap justify-between items-center px-4 py-1 bg-yellow-300">
        <h1 class="font-bold py-2 md:w-auto w-full mb-2 md:mb-0">
          <span class="font-bold text-pink-700">Email Id: </span>{" "}
          <a
            href="mailto:pravinbale2@gmail.com"
            class="underline text-blue-600"
          >
            pravinbale2@gmail.com
          </a>
        </h1>
        <div class="flex justify-center w-full md:w-auto">
          <button
            class="bg-sky-300 hover:bg-green-500 text-white font-bold border rounded-full py-2 px-4"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1HUqZg6Am5mVX8oXS7oG98szphMCDn5VB/view?usp=drive_link",
                "_blank"
              )
            }
          >
            Download Resume
          </button>
        </div>
      </div>

      <Slider {...settings} className="h-[50vh]">
        <div className="relative w-full h-[50vh]">
          <img
            src="/assets/slider-bg.webp"
            alt="Slide 1"
            className="object-cover w-full h-[50vh]"
          />
          <div className="absolute inset-0 flex items-center justify-center text-cente p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
              <h2 className="text-xl text-pink-700 sm:text-2xl lg:text-3xl font-bold animate-title">
                Full Stack Java Developer
              </h2>
              <p className="mt-2 text-sm sm:text-base lg:text-lg font-semibold">
                Expertise in developing robust back-end systems and applications
                using Java technologies, focusing on server-side logic and
                enterprise solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[50vh]">
          <img
            src="/assets/slider-bg.webp"
            alt="Slide 2"
            className="object-cover w-full h-[50vh]"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
              <h2 className="text-xl text-pink-700 sm:text-2xl lg:text-3xl font-bold animate-title">
                MERN Stack Developer
              </h2>
              <p className="mt-2 text-green- text-sm sm:text-base lg:text-lg font-semibold">
                Specialized in building full-stack applications using MongoDB,
                Express.js, React, and Node.js to create dynamic, scalable web
                solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[50vh]">
          <img
            src="/assets/slider-bg.webp"
            alt="Slide 3"
            className="object-cover w-full h-[50vh]"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
              <h2 className="text-xl text-pink-700 sm:text-2xl lg:text-3xl font-bold animate-title">
                Front-End Developer
              </h2>
              <p className="mt-2 text-sm sm:text-base lg:text-lg font-semibold">
                Skilled in crafting user-friendly interfaces and experiences
                with HTML, CSS, and JavaScript, React Js, ensuring responsive
                and visually appealing web designs.
              </p>
            </div>
          </div>
        </div>
      </Slider>
      <style jsx>{`
        @keyframes moveTitle {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-title {
          display: inline-block; /* Ensure the text flows in one line */
          white-space: nowrap; /* Prevent text from wrapping */
          animation: moveTitle 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
