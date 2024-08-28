import React from "react";

export default function Projects() {
  return (
    <div id="projects" className="space-y-4">
      <hr className="border-t-2 border-purple-500 mx-8 my-4" />
      <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl mb-4">
        Projects
      </h1>
      <div className="min-h-[90vh] flex items-center justify-center ">
        <div className="max-w-6xl mx-auto p-4 lg:p-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start rounded-2xl overflow-hidden bg-gray-300 border-2 border-red-500 shadow-lg h-full lg:h-[90vh]">
            <div className="relative w-full lg:w-1/2 h-full mb-4 lg:mb-0">
              <img
                src="/public/assets/path-lab.png"
                className="w-full h-full object-fit rounded-lg shadow-2xl"
                alt="Project Preview"
              />
            </div>

            <div className="flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2 lg:pl-8 p-4 lg:p-8">
              <h1 className="text-2xl font-bold mb-4">
                <span className="text-pink-700">Title:</span> Pathology Lab
                Management System
              </h1>
              <p className="mb-4">
                - Developed and implemented a streamlined system using React.js,
                Java Spring Boot, and MySQL to enhance patient care and lab
                operations.
              </p>
              <div className="mb-4">
                <h2 className="text-2xl text-pink-700 font-bold mb-2">
                  Key Features:
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>User-centric interface for patients and doctors.</li>
                  <li>
                    Backend functionality for test bookings, appointment
                    scheduling, and report delivery.
                  </li>
                  <li>
                    Patient convenience features for booking, scheduling, and
                    accessing reports.
                  </li>
                  <li>
                    Doctor management features for efficient appointment and
                    report management.
                  </li>
                  <li>Admin panel for optimized lab operations.</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
                <button className="w-full sm:w-1/2 bg-sky-400 hover:bg-green-500 btn text-lg font-bold btn-primary mb-2 sm:mb-0">
                  <a
                    href="https://lifelinepathlab.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Live Demo
                  </a>
                </button>
                <button className="w-full sm:w-1/2 bg-sky-400 hover:bg-green-500  btn text-lg font-bold btn-primary">
                  <a
                    href="https://github.com/pravinbale/PathalogyLabManagementSystem"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[90vh] flex items-center justify-center ">
        <div className="max-w-6xl mx-auto p-4 lg:p-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start rounded-2xl overflow-hidden bg-gray-300 border-2 border-red-500 shadow-lg h-full lg:h-[90vh]">
            <div className="relative w-full lg:w-1/2 h-full mb-4 lg:mb-0">
              <img
                src="/public/assets/portfolio.png"
                className="w-full h-full object-fit rounded-lg shadow-2xl"
                alt="Project Preview"
              />
            </div>

            <div className="flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2 lg:pl-8 p-4 lg:p-8">
              <h1 className="text-2xl font-bold mb-4">
                <span className="text-pink-700">Title:</span> Portfolio Website
              </h1>
              <p className="mb-4">
                - Designed and developed a professional portfolio website to
                showcase about, projects, skills, and contact details
                effectively.
              </p>
              <div className="mb-4">
                <h2 className="text-2xl text-pink-700 font-bold mb-2">
                  Key Features:
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Highlighted projects with detailed descriptions, images, and
                    technologies used.
                  </li>
                  <li>
                    Displayed technical skills and competencies relevant to
                    software development.
                  </li>
                  <li>
                    Integrated a contact form for inquiries and collaboration
                    opportunities.
                  </li>
                  <li>
                    Ensured a responsive and mobile-friendly layout for optimal
                    user experience.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
                <button className="w-full sm:w-1/2 bg-sky-400 hover:bg-green-500 btn text-lg font-bold btn-primary mb-2 sm:mb-0">
                  <a
                    href="https://balepravin-porfolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
                <button className="w-full sm:w-1/2 bg-sky-400 hover:bg-green-500 btn text-lg font-bold btn-primary">
                  <a
                    href="https://github.com/pravinbale/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[90vh] flex items-center justify-center ">
        <div className="max-w-6xl mx-auto p-4 lg:p-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start rounded-2xl overflow-hidden bg-gray-300 border-2 border-red-500 shadow-lg h-full lg:h-[90vh]">
            <div className="relative w-full lg:w-1/2 h-full mb-4 lg:mb-0">
              <img
                src="/public/assets/chat-app.png"
                className="w-full h-full object-fit rounded-lg shadow-2xl"
                alt="Project Preview"
              />
            </div>

            <div className="flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2 lg:pl-8 p-4 lg:p-8">
              <h1 className="text-2xl font-bold mb-4">
                <span className="text-pink-700">Title:</span> Chat-App Clone
              </h1>
              <p className="mb-4">
                - Developed and deployed a real-time Chat App using Node.js,
                Express.js, and React.js, leveraging JavaScript and Tailwind CSS
                for a seamless user experience.
              </p>
              <div className="mb-4">
                <h2 className="text-2xl text-pink-700 font-bold mb-2">
                  Key Features:
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Implemented socket.io for bi-directional, real-time
                    communication, enabling instant messaging and live updates.
                  </li>
                  <li>
                    Displayed technical skills and competencies relevant to
                    software development.
                  </li>
                  <li>
                    Integrated robust authentication and authorization
                    mechanisms to ensure secure user interactions.
                  </li>
                  <li>
                    Utilized Web Sockets for efficient, low-latency
                    communication, enabling a responsive and engaging user
                    interface.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
                <button className="w-full sm:w-1/2 bg-sky-400 hover:bg-green-500 btn text-lg font-bold btn-primary mb-2 sm:mb-0">
                  <a
                    href="https://chat-app-clone.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
                <button className="w-full sm:w-1/2 bg-sky-400 hover:bg-green-500 btn text-lg font-bold btn-primary">
                  <a
                    href="https://github.com/pravinbale/Chat-App/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[90vh] flex items-center justify-center ">
        <div className="max-w-6xl mx-auto p-4 lg:p-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start rounded-2xl overflow-hidden bg-gray-300 border-2 border-red-500 shadow-lg h-full lg:h-[90vh]">
            <div className="relative w-full lg:w-1/2 h-full mb-4 lg:mb-0">
              <img
                src="/public/assets/todo-app.png"
                className="w-full h-full object-fit rounded-lg shadow-2xl"
                alt="Project Preview"
              />
            </div>

            <div className="flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2 lg:pl-8 p-4 lg:p-8">
              <h1 className="text-2xl font-bold mb-4">
                <span className="text-pink-700">Title:</span> React Based TODO
                APP
              </h1>
              <p className="mb-4">
                - Built a scalable Todo List application with Create, Read,
                Update, and Delete (CRUD) functionality and task completion
                tracking
              </p>
              <div className="mb-4">
                <h2 className="text-2xl text-pink-700 font-bold mb-2">
                  Key Features:
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Utilized React Context API for efficient global state
                    management and data storage.
                  </li>
                  <li>
                    Designed a responsive and visually appealing user interface
                    using Tailwind CSS, ensuring crossdevice compatibility.
                  </li>
                  <li>
                    Implemented real-time updates and robust error handling to
                    ensure a seamless user experience Developed modular,
                    reusable code adhering to best practices in React
                    development, promoting maintainability and scalability.
                  </li>
                  <li>Effectively implemented CRUD operations.</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
                <button className="w-full sm:w-1/2 bg-sky-400 hover:bg-green-500 btn text-lg font-bold btn-primary mb-2 sm:mb-0">
                  <a
                    href="https://react-based-todo-list-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
                <button className="w-full sm:w-1/2 bg-sky-400 hover:bg-green-500 btn text-lg font-bold btn-primary">
                  <a
                    href="https://github.com/pravinbale/ReactBasedTodoListApp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
