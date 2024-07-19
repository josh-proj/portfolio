import React from "react";
import Image from "next/image";

const Academics = () => {
  return (
    <section id="academics">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-5xl">
          Trainings
          <hr className="w-6 h-1 mx-auto my-4 bg-slate-800 border-0 rounded"></hr><br/>
        </h1>
        <ul>        
            <li>            
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl text-center">
                {"CCNA Routing and Switching 1 & 2 – NetAcad Learning"}
              </h1>
            </li>

            <li>            
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl text-center"><br/>
                {"CompTIA Labs for IT Fundamentals - Comptialabs"}
              </h1>
            </li>

            <li>            
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl text-center"><br/>
                {"CertMaster Labs for A+ Core 1 – Comptialabs"}
              </h1>
            </li>
           
        </ul><br/><br/><br/><br/><br/>
        <hr className="w-50 h-1 mx-auto my-4 bg-slate-800 border-0 rounded"></hr>
        </div>

        <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-5xl">
          Seminars Attended
          <hr className="w-6 h-1 mx-auto my-4 bg-slate-800 border-0 rounded"></hr><br/>
        </h1>
        <ul>        
            <li>            
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl text-center">
                {"CIS Critical Security Controls (CIS)"}<br/> {"Controls Basics and Implementation"}
              </h1>
            </li>
            <br/>

            <li>            
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl text-center"><br/>
                {"Goldstone's Webinar on AI in Education"}
              </h1>
            </li>

        </ul>

        <br/><br/><br/><br/><br/>
        <hr className="w-50 h-1 mx-auto my-4 bg-slate-800 border-0 rounded"></hr>
        </div>

        <h1 className="text-center font-bold text-4xl">
          Machine Problems from Academics
          
        </h1>
        <br />

        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">            
            <br />
            <Image
              src="/Medicine Reminder.png"
              alt=""
              width={400}
              height={400}
              className="rounded-xl shadow-2xl"/>
          </div>          
          
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl">
            IT152P - Medicine Reminder
            </h1>
            <p className="mt-4 mb-6 md:text-base">
            An alarm system that focuses on reminding a person to take 
            their medicine with the use of Arduino uno. 
            Time slots are selected using push buttons and at the same time,
             it will also display the current date and time.
            </p>
          </div>                   
        </div>
        <br/>

        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">            
            <br />
            <Image
              src="/cinebook5.jpg"
              alt=""
              width={200}
              height={150}
              className="rounded-xl shadow-2xl mx-auto"
            />
          </div>
          
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl">
            IT140P - Cinebook
            </h1>
            <p className="mt-4 mb-6 md:text-base">
            A mobile app paired with Arduino Uno and RFID for booking a slot in cinema.  
            Once customer books a slot, a cinema staff will hand over an RFID configured 
            for the movie the customer booked. RFID will be used to open the cinema gate 
            in order to enter and watch the movie.
            </p>
          </div>
          </div>
          <br/>

          <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">            
            <br />
            <Image
              src="/planteria1.jpg"
              alt=""
              width={400}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
          
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl">
            IT114L - Planteria
            </h1>
            <p className="mt-4 mb-6 md:text-base">
            An online shop wherein customers can buy plants and tools for gardening with an interface for the seller 
            which they can use for updating their store and products. 

            </p>
          </div>
          </div>
          <br/>

          <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">            
            <br />
            <Image
              src="/4pics1.jpg"
              alt=""
              width={300}
              height={300}
              className="rounded-xl shadow-2xl mx-auto"
            />
          </div>
          
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl">
            IT101-2L -  4 Pics 1 Word
            </h1>
            <p className="mt-4 mb-6 md:text-base">
            A game wherein you have to guess the word based from the 4 pictures being displayed.
            </p>
          </div>
          </div>
          <br/><br/>
        
        
    </section>
  );
};

export default Academics;
