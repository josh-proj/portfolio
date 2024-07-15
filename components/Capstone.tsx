import React from "react";
import Image from "next/image";

const Capstone = () => {
  return (
    <section id="capstone">
<div className="my-12 pb-12 md:pt-16 md:pb-48">
          <h1 className="text-center font-bold text-5xl">
            Capstone
          </h1>
          <br /><br /><br />
          
          <h2 className="text-center font-bold text-3xl">
          iLAKO: <br/>Market Merchant Information System With GPS Mapping
          </h2>
          <br />
          <p className="mt-4 mb-6 md:text-lg">
            The study aimed to implement a system called
            iLako: Market Merchant with GPS Mapping,
            which aimed to enhance the buying experience in
            the public market of Binan, Laguna. With the
            integration of GPS mapping for the consumers,
            before they go inside the public market, they can
            look at all the possible things that the consumers
            will buy for their needs.<br /><br />

            Scope and Limitation: The proposed application enhances the public market 
            experience by offering a dynamic map, product information, and real-time GPS 
            navigation for vendors and customers. It features a user-friendly interface and 
            tools for managing vendor fees. However, challenges include reliance on smartphones, 
            potential GPS inaccuracies, limited OTP access for Android users, and the lack of real-time 
            inventory and pricing due to market fluctuations. Overall, it provides a comprehensive solution 
            while acknowledging its limitations.

                <br />
                <br />
                <span className="font-medium text-lg">
                  Software used to develop: OutSystems.
                </span>                
              </p>
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
            <div className="md:mt-2 md:w-1/2 item">
            <Image
                src="/vendoruihome.png"
                alt=""
                width={200}
                height={150}
                className="rounded-xl shadow-2xl mx-auto"
              />
            </div>
            <div className="md:mt-2 md:w-3/5">
              <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-2xl">
              Vendor App UI (Home) 
              </h1>
              
            </div>     
            </div>
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
            <div className="md:mt-2 md:w-1/2 item">
            <Image
                src="/vendorui.png"
                alt=""
                width={200}
                height={150}
                className="rounded-xl shadow-2xl mx-auto"
              />
            </div>
            <div className="md:mt-2 md:w-3/5">
              <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-2xl">
              Vendor App UI 
              </h1>
              
            </div>     
            </div>
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
            <div className="md:mt-2 md:w-1/2 item">
            <Image
                src="/consumerui.png"
                alt=""
                width={200}
                height={150}
                className="rounded-xl shadow-2xl mx-auto"
              />
            </div>
            <div className="md:mt-2 md:w-3/5">
              <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-2xl">
              Consumer UI 
              </h1>
              
            </div>     
            </div>
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
            <div className="md:mt-2 md:w-1/2 item">
            <Image
                src="/consumermapui.png"
                alt=""
                width={200}
                height={150}
                className="rounded-xl shadow-2xl mx-auto"
              />
            </div>
            <div className="md:mt-2 md:w-3/5">
              <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-2xl">
              Consumer Map UI 
              </h1>
              
            </div>     
            </div>

            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-1 md:flex-row md:space-x-4 md:text-left">
            <div className="md:mt-2 md:w-1/2 item">
            <Image
                src="/treasuryui.png"
                alt=""
                width={400}
                height={400}
                className="rounded-xl shadow-2xl mx-auto"
              />
            </div>
            <div className="md:mt-2 md:w-3/5">
              <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-2xl">
              Treasury Office UI 
              </h1>
              
            </div>     
            </div>
          </div>
</section>
  );
};

export default Capstone;
