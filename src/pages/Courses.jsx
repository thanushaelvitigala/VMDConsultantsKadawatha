import { useState } from "react";
import manJumping from "../assets/man-jumping-with-joy-by-lake.jpg";
import bachlor from "../assets/graduation-concept-with-girl-holding-her-diploma_23-2148201861.avif";

const courses = [
  {
    title: "Foundation",
    description: (
      <>
        <p>
          A Foundation program is designed to bridge the gap between high school
          and university education, helping students build the academic
          knowledge, study skills, and confidence needed for higher education.
          It provides a solid grounding in core subjects, including language,
          mathematics, and discipline-specific modules that prepare learners for
          bachelor’s degree entry.
        </p>

        <p className="mt-3">
          This program is particularly valuable for students who may not meet
          direct entry requirements or who wish to strengthen their academic
          foundation before beginning a full degree. By completing a foundation
          course, students gain not only subject knowledge but also critical
          thinking, research, and communication skills, ensuring a smoother
          transition into undergraduate study.
        </p>

        <p className="mt-3">
          A Foundation program is designed to act as a stepping stone between
          high school studies and a university degree. It equips students with
          the academic skills, subject knowledge, and language proficiency
          required to successfully begin their higher education journey.
        </p>

        <p className="mt-3">
          The course is structured to provide a broad introduction to key
          subjects, while also focusing on essential areas such as critical
          thinking, academic writing, and research techniques. Students develop
          not only knowledge but also the study habits and independent learning
          skills needed to thrive in a university setting.
        </p>

        <p className="mt-3">
          Foundation programs are especially useful for learners who may not
          meet the direct entry requirements of a bachelor’s degree or who want
          to strengthen their understanding before pursuing advanced studies.
          This pathway ensures that every student has the opportunity to prepare
          adequately and approach university education with confidence.
        </p>

        <p className="mt-3">
          In addition to academic preparation, foundation courses also help
          students improve their English communication skills, cultural
          awareness, and adaptability — vital qualities for studying abroad or
          in an international environment. Many programs integrate group
          projects and presentations to encourage teamwork and leadership
          abilities.
        </p>

        <p className="mt-3">
          By the end of the program, students will have gained a solid academic
          base, developed strong analytical skills, and built the confidence to
          take on the challenges of higher education. Completing a foundation
          program opens the door to a wide range of bachelor’s degree
          opportunities and sets the stage for long-term academic and career
          success.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
  },

  {
    title: "Full Bachelor (3 Years)",
    description: (
      <>
        <p>
          The Full Bachelor program is a comprehensive three-year degree
          designed to give students an in-depth understanding of their chosen
          field. It combines academic knowledge with practical training,
          ensuring that graduates are prepared for both professional careers and
          further study.
        </p>
        <p className="mt-3">
          Throughout the course, students engage in lectures, workshops, and
          hands-on projects that enhance critical thinking, creativity, and
          problem-solving skills. This balanced approach allows learners to
          develop both theoretical expertise and real-world experience.
        </p>
        <p className="mt-3">
          By the end of the program, graduates will be equipped with the skills
          and confidence needed to pursue rewarding careers or continue their
          education at the postgraduate level.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1584697964194-121bdf94d6d3?auto=format&fit=crop&w=800&q=80",
    image: bachlor,
    //graduation-concept-with-girl-holding-her-diploma_23-2148201861
  },
  {
    title: "Bachelor Top-Up",
    description: (
      <>
        <p>
          The Bachelor Top-Up program is a one-year course designed for students
          who have already completed a diploma or foundation qualification. It
          enables learners to upgrade their credentials into a full bachelor's
          degree.
        </p>
        <p className="mt-3">
          This pathway is ideal for individuals seeking to advance their
          professional opportunities or transition into higher levels of
          academic study. It focuses on advanced subject modules, critical
          analysis, and independent research.
        </p>
        <p className="mt-3">
          Upon completion, graduates hold a full bachelor’s degree, opening the
          door to postgraduate programs or improved career prospects across
          industries worldwide.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Masters",
    description: (
      <>
        <p>
          The Master’s program is a postgraduate degree that offers advanced
          knowledge and specialization in a chosen field. It provides students
          with the opportunity to deepen their academic expertise and enhance
          professional skills.
        </p>
        <p className="mt-3">
          The program emphasizes research, critical analysis, and practical
          application of knowledge. Students often participate in case studies,
          projects, and internships that bridge the gap between academic theory
          and real-world practice.
        </p>
        <p className="mt-3">
          Graduates of the Master’s program are well-prepared for leadership
          positions, advanced career opportunities, or progression into doctoral
          research.
        </p>
      </>
    ),
    image: manJumping,
  },
  {
    title: "Master of Research",
    description: (
      <>
        <p>
          The Master of Research (MRes) is a postgraduate degree focused on
          developing advanced research skills in preparation for doctoral study
          or specialized professional roles. It emphasizes independent inquiry,
          methodology, and critical evaluation.
        </p>
        <p className="mt-3">
          Unlike taught master’s programs, the MRes is heavily
          research-oriented, often involving the design and completion of an
          extensive research project under academic supervision. This provides
          students with first-hand experience in conducting professional-level
          research.
        </p>
        <p className="mt-3">
          By completing the MRes, students demonstrate their ability to produce
          high-quality, original work — a credential highly valued in academia,
          industry, and research organizations worldwide.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CoursesPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (course) => {
    setSelected(course);
    setOpen(true);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, idx) => (
        <div
          key={idx}
          onClick={() => handleOpen(course)}
          className="cursor-pointer bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-3">
              {course.description}
            </p>
            <button className="mt-2 text-blue-600 font-medium hover:underline">
              <a href="applynow">Apply Now →</a>
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {open && selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">{selected.title}</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>
            <div className="overflow-y-auto">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700">{selected.description}</p>
                <div className="mt-6">
                  <a href="applynow">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                      Apply Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
