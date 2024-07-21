import React from "react"
import Image from "next/image"

const skills = [

  { skill: "Python" },
  { skill: "C#" },
  { skill: "React" },
  { skill: "Next.js" }, 
  { skill: "GitHub" },
  { skill: "Tailwind CSS" },
  { skill: "Networking" },
  { skill: "Git" },
  { skill: "IoT" },

 
]


const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12  md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-slate-800 border-0 rounded"></hr>
        </h1>

        <div className="my-12 pb-12 md:pb-20 md:px-20">
          
          <p className="mt-4 mb-6 md:text-xl">
            Hi, my name is <span className="font-bold">{"Joshua"}</span> and {"I'm"} a graduating IT student
            based in Laguna, PH.<br /><br />

            I will be graduating from Mapua Malayan Colleges Laguna with a BS in Information Technology.<br /><br />

            I have a lot of hobbies that keeps me busy. From playing sports, outdoors, traveling, to playing video games. 
            I always like learning new skills as well as seeking new experiences and keeping myself active.<br /><br />

            I believe that you should never stop growing and {"that's"} what I strive to do. 
            I have a desire to always push the limits of what is possible. 
            I am excited to see where my career takes me and {"I'm"} always open to new opportunities.

               
                                        
              </p>
              
              </div>
           
       

   




        {/* <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p- md:flex-row md:text-left">
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
            I am excited to see where my career takes me and {"I'm"} always open to new opportunities.
            </p>
            <br/><br/><br/><br/>
          </div> 
          
          
        </div>*/}



        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
        <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl text-center font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-4 mt-5 text-black rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            </div>
            </div>
      </div>
      
    </section>
  )
}

export default AboutSection
