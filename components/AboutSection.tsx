import React from "react"
import Image from "next/image"



const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-slate-800 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            
            <p className="text-lg">
              Hi, my name is <span className="font-bold">{"Joshua"}</span> and {"I'm"} a graduating IT student
              based in Laguna, PH.
            </p>
            <br />
            <p className="text-lg">
              I will be graduating from Mapua Malayan Colleges Laguna 
              with a BS in Information Technology.
            </p>
            <br />
            <p className="text-lg">
              I have a lot of hobbies that keeps me busy.
              From playing sports, outdoors, traveling, to playing video games.
              I always like learning new skills as well as seeking new experiences and keeping myself
              active.
            </p>
            <br />
            <p className="text-lg">
            I believe that you should never stop growing and {"that's"} what I strive to do. 
            I have a desire to always push the limits of what is possible. 
            I am excited to see where my career takes me and am always open to new opportunities.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutSection
