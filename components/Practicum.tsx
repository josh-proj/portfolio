import React from "react";
import Image from "next/image";

const Practicum = () => {
  return (
    <section id="practicum">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          More about Practicum
          <hr className="w-6 h-1 mx-auto my-4 bg-slate-800 border-0 rounded"></hr>
        </h1>
        <br />
        <br />
        <h2 className="text-center font-bold text-3xl">Software Development</h2>
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/bookdriver2.png"
              alt=""
              width={400}
              height={400}
              className="rounded-xl shadow-2xl"
            />
            <br />
            <Image
              src="/presentation3.png"
              alt=""
              width={400}
              height={400}
              className="rounded-xl shadow-2xl"
            />
            <br />
            <Image
              src="/presentation2.png"
              alt=""
              width={400}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl">
              Driver Booking System
            </h1>
            <p className="mt-4 mb-6 md:text-base">
              Developed a website for the company which will be used for booking
              the company driver and car for site visits. The primary purpose of
              this is to have a centralized system and to prevent employees from
              booking the company driver and car at the same time. There will be
              an assigned employee who will manage the system. If an employee
              sets an appointment, the assigned employee will receive an email
              notification and as well as the one who booked the appointment.{" "}
              <br />
              <br />
              We presented the booking system to the employees and gave a demo
              on how it works.
              <br />
              <br />
              <span className="font-medium">Software used to develop: Wordpress</span>
            </p>
          </div>
        </div>
        <br />
        <hr className="w-6 h-1 mx-auto my-4 bg-slate-800 border-0 rounded"></hr>
        <br />
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/bankform.png"
              alt=""
              width={400}
              height={400}
              className="rounded-xl shadow-2xl"
            />
            <br />
            <Image
              src="/vscodebankforms.png"
              alt=""
              width={400}
              height={400}
              className="rounded-xl shadow-2xl"
            />
            <br />
            <Image
              src="/bankformgithub.png"
              alt=""
              width={400}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl">
              Bank Application Form
            </h1>
            <p className="mt-4 mb-6 md:text-base">
              We were given a task to fix and edit existing codes wherein
              information from the database will be populated into a Bank
              Application Form PDF. We must properly set the coordinates of data
              and make sure the data being displayed into the PDF are correct.
              We edit the code using Visual Studio Code with programming
              language Next.js. Afterwards, we will be submitting the changes
              using Github.
              <br />
              <br />
              <span className="font-medium">
                Software used to develop: Visual Studio Code and Github
              </span>
            </p>
          </div>
        </div>
        <br />
        <hr className="w-6 h-1 mx-auto my-4 bg-slate-800 border-0 rounded"></hr>
        <br />

        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/matchhomeblog.png"
              alt=""
              width={400}
              height={400}
              className="rounded-xl shadow-2xl"
            />
            <br />
            <Image
              src="/blogvscode.png"
              alt=""
              width={400}
              height={400}
              className="rounded-xl shadow-2xl"
            />
            <br />
            <Image
              src="/bloggithub.png"
              alt=""
              width={400}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl">
              Adding Blogs on Website
            </h1>
            <p className="mt-4 mb-6 md:text-base">
              We were assigned a task to put additional blogs into the website.
              We used Visual Studio Code wtih programming language Next.js.
              Afterwards, we will be submitting the changes using Github.
              <br />
              <br />
              <span className="font-medium">
                Software used to develop: Visual Studio Code and Github
              </span>
            </p>
          </div>
        </div>
        <br />
        <hr className="w-50 h-1 mx-auto my-4 bg-slate-800 border-0 rounded"></hr>
        <br />

        <div className="my-12 pb-12 md:pt-16 md:pb-48">
          <h2 className="text-center font-bold text-3xl">
            Quality Assurance (QA)
          </h2>
          <br />

          <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
            <div className="md:mt-2 md:w-1/2 item">
              <Image
                src="/app.jpg"
                alt=""
                width={200}
                height={150}
                className="rounded-xl shadow-2xl mx-auto"
              />
            </div>
            <div className="md:mt-2 md:w-3/5">
              <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl">
                Matchmo Mobile App
              </h1>
              <p className="mt-4 mb-6 md:text-base">
                Developers add new features or make changes to the mobile app.
                As part of the QA process, we test the app and find any bugs
                that may occur, including grammar and typographical error.
                <br />
                <br />
                <span className="font-medium">
                  Software used to develop: Clickup and Mobile app. 
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
            <div className="md:mt-2 md:w-1/2 item">
              <Image
                src="/matchmowebsite.png"
                alt=""
                width={400}
                height={400}
                className="rounded-xl shadow-2xl "
              />
            </div>
            <div className="md:mt-2 md:w-3/5">
              <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-3xl">
                Matchmo Website
              </h1>
              <p className="mt-4 mb-6 md:text-base">
                Every week, we check the website to make sure there are no bugs or error. We have a check list 
                to ensure everything is covered.

                <br />
                <br />
                <span className="font-medium">
                  Software used to develop: Clickup, Google PageSpeed Insights, and Website.
                </span>
              </p>
            </div>
          </div>
        </div>

        <hr className="w-50 h-1 mx-auto my-4 bg-slate-800 border-0 rounded"></hr>
      </div>
    </section>
  );
};

export default Practicum;
