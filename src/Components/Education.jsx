import React from "react";

export default function Education() {
  const events = [
    {
      percentage: "81.63%",
      year: "- 2023-2024",
      title: "Post Graduate Diploma in Advance computing",
      institute:
        "-Center for development of advance computing (CDAC) ACTS Pune.",
    },
    {
      percentage: "8.14 CGPA",
      year: "- 2021-2023",
      title: "Bacholor's Degree In Mechanical Engineering",
      institute: "-Savitribai Phule Pune University (SPPU), Pune.",
    },
    {
      percentage: "77.51%",
      year: "- 2014-2017",
      title: "Diploma In Mechanical Engineering",
      institute:
        "-P.DR. Vitthlrao Vikhe Patil Institute of Technology And Engineering Polytechnic  (Pravaranagar), Ahmednagar.",
    },
    {
      percentage: "81.20%",
      year: "- 2013-2014",
      title: "SSC",
      institute: "-L.Balashastri Jambhekar Madhyamik Vidyalaya, Kerul.",
    },
  ];
  return (
    <div id="education" className="my-8">
      <hr className="border-t-2 border-purple-500 mx-8 my-4" />
      <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl mb-4">
        Education
      </h1>
      <div className="relative">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-green-300 my-2" />
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } mb-8`}
          >
            <div
              className={`w-1/2 p-4 bg-gray-300 border border-red-500 rounded-lg shadow-2xl shadow-green-300 ${
                index % 2 === 0 ? "mr-auto" : "ml-auto"
              }`}
            >
              <h3 className="text-lg text-pink-700 font-bold">{event.title}</h3>
              <p className="text-gray-600">{event.institute}</p>
              <h4 className="text-gray-600 text-sm">{event.year}</h4>
              <h2>Marks:- {event.percentage}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
