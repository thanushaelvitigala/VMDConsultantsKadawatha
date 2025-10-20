import React from "react";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-64 md:h-150 bg-gray-900">
        <img
          src="../src/assets/contact-hero.jpg"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            VMD Consultants Kadawatha
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <p className="text-lg leading-relaxed mb-8">
          Our Kadawatha office in Sri Lanka plays a key role in delivering VMD
          Consultants’ trusted expertise and innovative solutions. With a strong
          commitment to excellence, this branch ensures the highest standards of
          service and support, meeting the needs of our valued clients across
          the region.
        </p>

        <div className="space-y-4">
          <p>
            <span className="font-semibold">Email Address:</span>{" "}
            <a
              href="mailto:studypathways@vmdconsultants.co.uk"
              className="text-blue-600 hover:underline"
            >
              studypathways@vmdconsultants.co.uk
            </a>
          </p>

          <p>
            <span className="font-semibold">Phone Numbers:</span>{" "}
            <a
              href="tel:+94740565246"
              className="text-blue-600 hover:underline"
            >
              +94740565246
            </a>{" "}
            |{" "}
            <a href="tel:112 924 236" className="text-blue-600 hover:underline">
              112 924 236
            </a>
          </p>

          <p>
            <span className="font-semibold">Address:</span> No. 153/1, Nikado
            City Complex, Kadawatha, Sri Lanka
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
