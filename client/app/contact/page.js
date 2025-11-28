"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! We will contact you soon.");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-base-100 py-10">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary">Contact Us</h1>
        <p className="py-4 text-gray-500">Have questions? We'd love to hear from you.</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left Side */}
          <div className="lg:w-1/3 space-y-8 bg-base-200 p-8 rounded-2xl h-fit">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>

            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full text-primary shadow-md">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="font-bold">Our Location</h3>
                <p className="text-sm text-gray-600">507 Union Trade Centre, France</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full text-primary shadow-md">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h3 className="font-bold">Phone Number</h3>
                <p className="text-sm text-gray-600">(+91) 9876-543-210</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full text-primary shadow-md">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="font-bold">Email Address</h3>
                <p className="text-sm text-gray-600">demo@example.com</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-2/3">
            <div className="card bg-base-100 shadow-2xl rounded-2xl">
              <div className="card-body px-4 py-2 bg-amber-400 rounded-2xl">
                <h2 className="card-title text-2xl mb-4">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control space-x-2 ">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="input rounded bg-white px-2 input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control space-x-2 ">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="input rounded bg-white px-2 input-bordered"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control space-x-2 ">
                    <label className="label">
                      <span className="label-text">Subject</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="input rounded bg-white px-2 input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control space-x-2 ">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
                      className="textarea rounded bg-white px-2 textarea-bordered h-32"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-control mt-6">
                    <button className="rounded-xl bg-violet-800 hover:bg-violet-400 px-4 py-2 text-white text-lg">
                      Send Message
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
