import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { HiArrowDown } from "react-icons/hi"


const projects = [
  {
    name: "Driver Booking System",
    description:
      "We developed a website that is being used by the company for booking the company driver and car for site visits.",
    image: "/bookdriversystem.png",    
    link: "http://book-drivers.matchhome.ph//",
  },
  {
    name: "Software Development",
    description: "We were given a task to put additional blogs into one of the company's website. We also fixed generating information to the correct coordinates when downloading bank forms from the system.",
    image: "/blogwebsite.png",    
    link: "https://matchhome.ph/blogs",
  },
  {
    name: "Quality Assurance (QA)",
    description:
      "We thoroughly check the company's website, mobile app, CRM, and bank portal.",
    image: "/qawebsiteapp.png",    
    link: "https://matchmo.ph/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-5xl">
        Practicum         
      </h1>

      <h2 className="my-10 text-center font-bold text-4xl">
        Snapp Ventures, Inc.
        <hr className="w-6 h-1 mx-auto my-4 bg-slate-800	 border-0 rounded"></hr>
      </h2>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">                      
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
      <br /><br /><br /><br />
      <div className="flex flex-row items-center text-center justify-center ">    
      
          <HiArrowDown size={35} className="animate-bounce" />
        
      </div>
    </section>
  )
}

export default ProjectsSection
