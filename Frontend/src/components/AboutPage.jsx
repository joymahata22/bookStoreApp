import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function AboutPage() {
  return (
    <>
    <Navbar />
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
      {/* Top section with image and main text */}
      <div className="flex flex-col md:flex-row">
        {/* Left side - Content */}
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              About <span className="text-pink-500">Our Journey</span>
            </h1>
            <p className="text-sm md:text-xl">
              Founded with a passion for sharing knowledge, we've been dedicated to helping people learn something new every day. Our platform brings together experts and enthusiasts to create a vibrant learning community.
            </p>
            <p className="text-sm md:text-xl">
              What started as a small project has grown into a comprehensive resource hub used by thousands of learners worldwide. We believe that education should be accessible, engaging, and ongoing.
            </p>
          </div>
          <button className="btn mt-6 btn-secondary">Our Courses</button>
        </div>
        
        {/* Right side - Image */}
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src="https://www.pngmart.com/files/About-Us-Download-PNG-Image.png"
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="About us illustration"
          />
        </div>
      </div>

      {/* Mission and values section */}
      <div className="mt-20 md:mt-32">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Our <span className="text-pink-500">Mission & Values</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12 text-pink-500">
                  <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41Z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center">Our Mission</h3>
              <p className="text-center">To make learning accessible and enjoyable for everyone, regardless of their background or previous education.</p>
            </div>
          </div>
          
          {/* Innovation card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12 text-pink-500">
                  <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                  <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center">Innovation</h3>
              <p className="text-center">We continuously explore new teaching methods and technologies to enhance the learning experience.</p>
            </div>
          </div>
          
          {/* Community card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12 text-pink-500">
                  <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center">Community</h3>
              <p className="text-center">We foster a supportive community where learners can connect, collaborate, and grow together.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="mt-20 md:mt-32 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Meet Our <span className="text-pink-500">Team</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team member 1 */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12 text-gray-500">
                      <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">Joy Mahata</h3>
              <p className="text-pink-500">Founder & CEO</p>
            </div>
          </div>
          
          {/* Team member 2 */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12 text-gray-500">
                      <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">JOY MAHATA</h3>
              <p className="text-pink-500">Head of Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default AboutPage;