import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContactPage() {
  return (
    <>
    <Navbar />
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 items-center justify-center">
      {/* Left side - Form */}
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
        <div className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            Get in touch with <span className="text-pink-500">us today!</span>
          </h1>
          <p className="text-sm md:text-xl">
            Have questions or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
          </p>
          
          <form className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Full Name" />
              </label>
            </div>
            
            {/* Email Input */}
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email" className="grow" placeholder="Email" />
              </label>
            </div>
            
            {/* Phone Input */}
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                  <path fillRule="evenodd" d="M1.885 2.5c.5-.985 1.73-1.39 2.745-.895l1.436.695c.59.292.99.862.99 1.514v1.33a1.5 1.5 0 0 1-.656 1.239L5 7.38v1.37a1.5 1.5 0 0 0 .53 1.147l4.084 3.51c.401.346.944.436 1.429.43.486-.016.924-.216 1.219-.507l.762-.74a1.5 1.5 0 0 1 2.092.045l.89.885a1.5 1.5 0 0 1-.189 2.25c-.358.306-.796.461-1.237.461-.448 0-1.04-.188-1.613-.516-1.013-.578-2.09-1.638-3.155-2.7-1.095-1.096-2.17-2.182-2.748-3.219-.328-.584-.516-1.18-.516-1.63 0-.45.164-.885.474-1.244l.744-.766A1.5 1.5 0 0 1 7.51 5.5h1.33a1.5 1.5 0 0 0 1.516-.991L11 3.09a1.5 1.5 0 0 0-.895-2.747c-.98-.499-1.722.05-2.22.543-.499.494-1 1.114-1 1.616Z" clipRule="evenodd" />
                </svg>
                <input type="tel" className="grow" placeholder="Phone Number" />
              </label>
            </div>
            
            {/* Message Textarea */}
            <div>
              <textarea 
                className="textarea textarea-bordered w-full" 
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
          </form>
          
          <button className="btn btn-secondary">Send Message</button>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="order-1 w-full mt-20 md:w-1/2">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-customer-service-support-onboarding-pack-business-illustrations-4849052.png"
          className="md:w-[550px] md:h-[460px] md:ml-12"
          alt="Contact us illustration"
        />
      </div>
    </div>
      <Footer />
    </>
  );
}

export default ContactPage;