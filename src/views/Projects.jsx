import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import project1 from "../assets/pr/portfolio-project-1.png";
import project2 from "../assets/pr/portfolio-project-2.png";
import project3 from "../assets/pr/portfolio-project-3.png";
import project4 from "../assets/pr/portfolio-project-4.png";
import project5 from "../assets/pr/portfolio-project-5.png";
import project6 from "../assets/pr/portfolio-project-6.png";
import project7 from "../assets/pr/portfolio-project-7.png";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <a href="hello">
              <img
                class="rounded-t-lg w-full project-img"
                src={project1}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="helo">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  INDY GUIDE Global Tourist Platform
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Internationl Platform for turists.
              </p>
              <a
                target="_blank"
                href="https://indyguide.com/"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <a href="hello">
              <img
                class="rounded-t-lg w-full project-img"
                src={project2}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="helo">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Automation of JUDICIARY SYSTEM
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Automated the judiciary process in the Supreme Court of Azad Jammu & KashmiR.              </p>
              <a
                target="_blank"
                href="/"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <a href="hello">
              <img
                class="rounded-t-lg w-full project-img"
                src={project3}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="helo">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                My Tutor Finder App
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              My Tutor Finder Hybrid App (Android/IOS)         </p>
              <a
                target="_blank"
                href="/"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <a href="hello">
              <img
                class="rounded-t-lg w-full project-img"
                src={project4}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="helo">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Blood Bank App
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Mobile App to manage Blood Donation and Reciving         </p>
              <a
                target="_blank"
                href="/"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
          
          
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <a href="hello">
              <img
                class="rounded-t-lg w-full project-img"
                src={project5}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="helo">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Real-time Alarm Mobile App
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Real-time Alarm Mobile App       </p>
              <a
                target="_blank"
                href="/"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
          
          
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <a href="hello">
              <img
                class="rounded-t-lg w-full project-img"
                src={project6}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="helo">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Kloud VPN Mobile App
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Kloud VPN Mobile App       </p>
              <a
                target="_blank"
                href="/"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>          
            
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <a href="hello">
              <img
                class="rounded-t-lg w-full project-img"
                src={project7}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="helo">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                CMS - Web Portal
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A Complete CMS      </p>
              <a
                target="_blank"
                href="https://ajksupremecourt.gok.pk/"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
          
        </div>
        {/* <a
          href="hello"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a> */}
      </div>
    </div>
  );
};

export default Projects;
