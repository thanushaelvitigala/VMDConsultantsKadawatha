import React, { useState } from "react";

export default function StudyInEuropePage() {
  const [openIndex, setOpenIndex] = useState(null);

  // --- FAQ content ---
  const faqs = [
    {
      question: "Is the Europe process hard? How long does it take?",
      answer:
        "Depending on the availability of the required documents and funds we have processed many applications in less than a month. We start a minimum 6 months before the course starts to make you well prepared. However, if you have picked a course, have your IELTS, funds and other documents we can expedite the process to a very few months.",
    },
    {
      question: "Many state it’s a long pathway?",
      answer:
        "Yes, many who do not have the capacity does not recommend. But we at VMD ensure that a solicitor/legal firm is attached to us and you will have legal representation if there’s any issues regarding your paperwork or process.",
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

  // --- Online Unsplash images ---
  const bannerUrl =
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1332&q=80"; // Europe city / architecture
  const whyEuropeImage =
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80"; // University or European classroom
  const faqImage =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"; // Student group

  return (
    <div className="mt-20">
      {/* === Banner === */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold z-10">
          Study In Europe
        </h1>
      </section>

      {/* === Why Europe === */}
      <section className="container mx-auto px-6 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#660000]">
            Why Europe?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>Top ranked universities with international recognition.</li>
            <li>Flexible academic and vocational course offerings.</li>
            <li>
              Research-intensive operations and recognised qualifications.
            </li>
            <li>Creative teaching methodologies to build confidence.</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={whyEuropeImage}
            alt="European Universities"
            className="max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* === Why VMD === */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#660000]">Why VMD?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>Full support in choosing courses and universities.</li>
            <li>Career pathway advice and counseling.</li>
            <li>Legal representation through our sister solicitor firm.</li>
            <li>Airport pickup, accommodation & job placement guidance.</li>
            <li>24/7 aftercare and support for dependents.</li>
          </ul>
        </div>
      </section>

      {/* === Process / How It Works === */}
      <section className="container mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#660000]">
          How Does It Work?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { id: "01.", title: "Submit your CV / Advice & Assist" },
            { id: "02.", title: "Select the best course & university" },
            { id: "03.", title: "Arrange offer letters & scholarships" },
            { id: "04.", title: "Visa processing & legal support" },
            { id: "05.", title: "Travel & accommodation arrangements" },
            { id: "06.", title: "Continuous support post arrival" },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-[#ff4000] text-2xl font-bold">{item.id}</h3>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* === FAQs === */}
      <section className="container mx-auto px-6 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={faqImage}
            alt="Europe Students"
            className="max-w-sm rounded-lg shadow-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#660000]">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-3 border rounded overflow-hidden">
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

      {/* === Submit CV Form === */}
      <section className="container mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold mb-6 text-[#660000]">
          Submit Your CV
        </h2>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <iframe
            title="Job Application Form"
            src="https://form.jotform.com/252625954426059"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* === Footer === */}
      <footer className="border-t pt-6 bg-white">
        <div className="container mx-auto px-6 md:px-16 text-gray-700 text-sm">
          <p>Solar House 915 High Road, North Finchley, London N12 8QJ</p>
          <p>020 8090 4724</p>
          <p>info@vmdconsultants.co.uk</p>
        </div>
      </footer>
    </div>
  );
}
