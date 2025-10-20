import React from "react";
import AboutTabs from "../components/AboutTabs";

function AboutUs() {
  return (
    <div>
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Welcome to VMD Consultants - Kadawatha Branch. We’re here to guide
              careers and connect talented people with the right opportunities.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="mb-4">
              At{" "}
              <span className="font-semibold">VMD Consultants - Kadawatha</span>
              , We are proud to continue our mission of being a trusted career
              pathway provider. No matter your background, if you bring passion
              and dedication, we’ll help you achieve your professional goals.
              Our team works closely with students from the application stage to
              the PR process, preparing them for a successful future. We want
              every student to feel confident saying, “We’re glad we chose
              VMD Consultants.”
            </p>
            <p>
              Our team also works closely with employers, making sure they
              receive skilled, motivated candidates who bring real value to
              their organizations. We want every employer to feel confident
              saying,
              <span className="italic">
                {" "}
                “We’re glad we hired through VMD Consultants.”
              </span>
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Team working"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="../../src/assets/CarrerGuidance.jpg"
                alt="Career guidance"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
              <p className="mb-4">
                We provide expert guidance for students who wish to study in
                overseas,guide them to their dream career.
              </p>
              <p>
                We provide expert support in recruitment and career placement,
                focusing on fields such as healthcare, hospitality,
                administration, IT, marketing, and engineering. Our Kadawatha
                branch ensures candidates are connected with meaningful roles
                while guiding employers to the best talent.
              </p>
              <p>
                Even if applicants don’t directly qualify for jobs, we assist
                them with higher education opportunities, scholarships, and
                training programs to strengthen their pathway to success.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Are Different */}
        <section className="py-16 container mx-auto px-6 lg:px-20 text-center">
          {/* <h2 className="text-3xl font-semibold mb-6">Why We Are Different</h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            What sets us apart is our belief that every person deserves a chance
            to shine. We don’t leave anyone behind — if someone doesn’t meet the
            standard requirements, we offer customized career pathways to ensure
            they still have opportunities. Guided by the values of honesty and
            integrity, our Kadawatha branch continues to uphold the same
            standards as our head office in Colombo.
          </p> */}
          <AboutTabs />
          <a
            href="applynow"
            className="inline-block px-6 py-3 bg-red-700 text-white rounded-xl shadow-md hover:bg-red-500 transition"
          >
            Submit Your CV
          </a>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
