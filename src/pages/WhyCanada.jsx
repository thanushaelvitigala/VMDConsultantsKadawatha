import React, { useState } from "react";

export default function WhyCanada() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is the Canada process hard? How long does it take?",
      answer:
        "Depending on the availability of the required documents and funds we have processed many applications in less than a month. We start a minimum 6 months before the course starts to make you well prepared. However, if you have picked a course, have your IELTS, funds and other documents we can expedite the process to a very few months.",
    },
    {
      question: "Many state it’s a long pathway?",
      answer:
        "Yes, many who do not have the capacity does not recommend. But we at VMD ensure that a solicitor/ legal firm is attached to us and you will have legal representation if there’s any issues regarding your paperwork or process.",
    },
    {
      question: "Does VMD offer jobs as well?",
      answer:
        "Yes, VMD is enrolled with multiple recruiters and partner firms who have vacancies ranging from blue to white collar jobs, we provide hybrid, remote, part- and full-time jobs to all our applicants.",
    },
    {
      question: "Do we get scholarships?",
      answer:
        "Yes, VMD has offered scholarships for over $5000 to candidates from the total course fee. Many agents or consultants hide the fact that there’s a discount and take it themselves, we however do not do such and offer the same to the candidate as we understand the financial burden every student has to go thru.",
    },
  ];

  // Unsplash image URLs (examples)
  const bannerUrl =
    "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80";
  const servicesImgUrl =
    "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  const faqImgUrl =
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  return (
    <div className="mt-20">
      {/* Banner */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold z-10">
          Study In Canada
        </h1>
      </section>

      {/* Why VMD */}
      <section className="container mx-auto px-6 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#660000]">Why VMD?</h2>
          <p className="text-gray-700 mb-3">
            We at VMD emphasis on the need of clear guidance you required when
            migrating to a new country for your studies. VMD consultants make
            sure that you are provided the full guidance throughout. Below are
            some of the services you will be provided by us.
          </p>
          <a
            href="#"
            className="text-red-600 font-semibold hover:underline inline-block mb-3"
          >
            View Canada University List
          </a>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Full support to choose your course and colleges/Universities
            </li>
            <li>Full visa guidance</li>
            <li>
              Advise on opportunities that will open up after completing a
              particular course (Career Pathway Advice)
            </li>
            <li>Airport pickup service and Accommodation arrangements</li>
            <li>Job placement guidance</li>
            <li>Full support for the main applicant and dependents</li>
            <li>
              <strong>Note:</strong> Even though you are migrating to a
              different country to complete your studies, We will make sure you
              will never feel alone in the UK. Our team will always be with you
              for any support you will be required.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={servicesImgUrl}
            alt="VMD Services"
            className="max-w-md object-cover"
          />
        </div>
      </section>

      {/* How Does It Work */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#660000]">
          How Does It Work?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              id: "01.",
              title: "Receives CV",
              desc: "We receive CVs from across the globe, allocate them to a local employer at VMD residing in the same country or region to explain how we work, our packages and timelines.",
            },
            {
              id: "02.",
              title: "Advice And Assist",
              desc: "Coming across the globe to study is not easy; we discuss programs, pathways to study and work, and plans to gain residency.",
            },
            {
              id: "03.",
              title: "Finalizing University",
              desc: "Documentation and English requirements are handled carefully; we help pick the best course and university for our candidates.",
            },
            {
              id: "04.",
              title: "Guidance In Visa",
              desc: "After acceptance, we handle all visa documents, paperwork, bank work and legalizations to ensure a smooth process.",
            },
            {
              id: "05.",
              title: "Confirmation",
              desc: "We track your application until a confirmed visa receipt to travel to Canada is achieved.",
            },
            {
              id: "06.",
              title: "Support",
              desc: "We assist from your destination until you reach Canada and help you arrive, settle, and find part-time jobs within legal working hours.",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 shadow rounded hover:shadow-lg transition"
            >
              <h3 className="text-[#ff4000] text-2xl font-bold">{item.id}</h3>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-6 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={faqImgUrl}
            alt="Canadian Student"
            className="max-w-sm object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#660000]">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-3 border rounded">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left px-4 py-3 font-semibold ${
                  openIndex === index
                    ? "bg-[#ff4000] text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 text-sm bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
