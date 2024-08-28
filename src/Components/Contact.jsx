import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function Contact() {
  return (
    <div id="contact" className="py-6 px-4"> 
    <hr className="border-t-2 border-purple-500 mx-8 my-4" />
      <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl mb-4">
        Social Connects
      </h1>
      <p className="mb-6 text-lg font-semibold">
        Thank you for visiting my portfolio! I am always open to new
        opportunities and professional connections. If you are interested in
        discussing potential collaborations, job openings, or just want to
        connect, feel free to reach out through the platforms below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <div className="w-full h-auto gap-x-4 text-base sm:text-lg md:text-xl font-semibold shadow-xl shadow-green-300 rounded-xl bg-black text-white border-2 border-red-600 flex items-center justify-center p-4">
          <FaLinkedin className="text-blue-600" />
          <span>
            <a href="https://www.linkedin.com/in/pravin-bale-8b2a10243/">
              LinkedIn
            </a>
          </span>
        </div>
        <div className="w-full gap-x-4 h-auto text-base sm:text-lg md:text-xl font-semibold shadow-xl shadow-green-300 rounded-xl bg-black text-white border-2 border-red-600 flex items-center justify-center p-4">
          <TfiEmail className="text-blue-600" />
          <span>
            <a href="mailto:pravinbale2@gmail.com">E-Mail</a>
          </span>
        </div>
        <div className="w-full gap-x-4 h-auto text-base sm:text-lg md:text-xl font-semibold shadow-xl shadow-green-300 rounded-xl bg-black text-white border-2 border-red-600 flex items-center justify-center p-4">
          <FaGithub className="text-green-600" />
          <span>
            <a href="https://github.com/pravinbale">Git-Hub</a>
          </span>
        </div>
        <div className="w-full gap-x-4 h-auto text-base sm:text-lg md:text-xl font-semibold shadow-xl shadow-green-300 rounded-xl bg-black text-white border-2 border-red-600 flex items-center justify-center p-4">
          <FaInstagram className="text-pink-600" />{" "}
          <span>
            <a href="https://www.instagram.com/mr_pravin_bale/">Instagram</a>
          </span>
        </div>
        <div className="w-full gap-x-4 h-auto text-base sm:text-lg md:text-xl font-semibold shadow-xl shadow-green-300 rounded-xl bg-black text-white border-2 border-red-600 flex items-center justify-center p-4">
          <FaFacebook className="text-blue-600" />
          <span>
            <a href="https://www.facebook.com/pravin.bale.1/">Facebook</a>
          </span>
        </div>
      </div>
    </div>
  );
}
