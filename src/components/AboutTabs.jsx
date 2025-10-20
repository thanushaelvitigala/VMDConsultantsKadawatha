import React, { useState } from "react";

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState("history");

  const content = {
    history: {
      title: "History & Why We Are Different",
      text: "We are a recruitment consultancy firm based in London which was formed in 2014 with the goal of providing best candidates in to the recruitment market in the United Kingdom and all around the world. No matter what background our candidates or clients come from, we treat them all equal and provide them all the best service. One of our specialties is that , for candidates who do not meet the required qualifications and experience to apply for available or their dream jobs, we always try to provide them one of our bespoke career pathway programs to make them qualify for available jobs in the current job market. We never leave anyone behind. VMD Consultants also have the full guidance of it’s sister company VMD Solicitors which is one of the leading solicitors firms in the London for last 15 years .",
      img: "https://theactivedigital.com/staging/vmd-demo/wp-content/uploads/2021/04/gallery_1.jpg",
    },
    mission: {
      title: "Mission",
      text: "We think in a different way at VMD. We believe good recruitment is about connecting the right people with the right opportunity. Keeping trust & delivering the perfect service to our clients is the only way to succeed. We proudly say we are a truthful service provider.",
      img: "https://theactivedigital.com/staging/vmd-demo/wp-content/uploads/2021/04/gallery_5.jpg",
    },
    vision: {
      title: "Vision",
      text: "Our Vision is to expand globally and provide recruitment consultancy services worldwide. We have a strong devotion to ensure that our candidates/clients become successful individuals/organizations all around the world. This will mean us raising the bar of recruitment consultancy through the services we provide. We want all our candidates/clients to be proud to be associated with VMD Consultants Our Vision is to expand globally and provide recruitment consultancy services worldwide. We have a strong devotion to ensure that our candidates/clients become successful individuals/organizations all around the world. This will mean us raising the bar of recruitment consultancy through the services we provide. We want all our candidates/clients to be proud to be associated with VMD Consultants.",
      img: "https://theactivedigital.com/staging/vmd-demo/wp-content/uploads/2021/04/gallery_3.jpg",
    },
  };

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        One-On-One Expert Advice
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("history")}
          className={`px-6 py-3 rounded-lg font-semibold ${
            activeTab === "history"
              ? "bg-[#660000] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          History & Why We Are Different
        </button>
        <button
          onClick={() => setActiveTab("mission")}
          className={`px-6 py-3 rounded-lg font-semibold ${
            activeTab === "mission"
              ? "bg-[#660000] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Mission
        </button>
        <button
          onClick={() => setActiveTab("vision")}
          className={`px-6 py-3 rounded-lg font-semibold ${
            activeTab === "vision"
              ? "bg-[#660000] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Vision
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md p-6 rounded-lg">
        <img
          src={content[activeTab].img}
          alt={content[activeTab].title}
          className="w-full md:w-1/3 rounded-lg"
        />
        <div className="md:w-2/3">
          <h3 className="text-xl font-bold mb-3">{content[activeTab].title}</h3>
          <p className="text-gray-700">{content[activeTab].text}</p>
        </div>
      </div>
    </section>
  );
}
