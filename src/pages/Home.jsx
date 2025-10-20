import React from "react";
import mainimg from "../assets/mainimg.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-end-safe justify-end-safe bg-cover "
        style={{ backgroundImage: `url(${mainimg})` }}
      >
        <div className="relative text-end text-white px-4">
          <h1 className="text-4xl md:text-8xl font-bold text-shadow-zinc-800 text-shadow-lg">
            VMD <br /> CONSULTANTS
          </h1>
          <br />
          <h2 className="text-3xl md:text-4xl font-bold text-shadow-zinc-800 text-shadow-lg">
            KADAWATHA
          </h2>

          <p className="text-center mt-2 text-2xl italic py-6  text-shadow-zinc-800 text-shadow-lg">
            Your Career Pathway Provider
            <br></br>
            <Link to="/contact">
              <button className="align-baseline mt-6 px-6 py-3 bg-[#660000] rounded-lg shadow-lg font-semibold hover:bg-red-900">
                TALK TO US
              </button>
            </Link>
          </p>
        </div>
      </section>

      {/* Services Intro */}
      <section className="bg-[#660000] text-white text-center py-10">
        <h2 className="text-xl md:text-2xl font-bold">
          WE SPECIALISE IN JOB PLACEMENTS & STUDENT CAREER PATHWAY PROGRAMS
          AROUND THE GLOBE
        </h2>
        <p className="mt-3 italic text-lg">
          If You Want To Change Your Life, Your Career, You Are At The Right
          Place.
        </p>
      </section>
    </div>
  );
}

// import React from "react";
// import { FaBars } from "react-icons/fa";
// import mainimg from "../assets/mainimg.jpg";
// import VMDLogo from "../assets/VMD.png";
// import Footer from "../components/footer";
// import AboutUs from "./AboutUs";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="font-sans text-gray-800">
//       {/* Navbar */}
//       <header className="fixed top-0 w-full bg-[#660000] text-white shadow z-50">
//         <div className="container mx-auto flex items-center justify-between p-4">
//           <div className="flex items-center gap-2">
//             <img src="../src/assets/VMD.png" className="h-16" />
//             {/* <span className="font-bold">VMD Consultants</span> */}
//           </div>

//           <nav className="hidden md:flex gap-6 text-sm uppercase">
//             <a href="#">Home</a>
//             {/* <a href="AboutUs">About Us</a> */}
//             <Link to="/about">About Us</Link>
//             <a href="#">Employers</a>
//             <a href="#">International Students</a>
//             <a href="#">Contact Us</a>
//             <button className="bg-white text-[#660000] px-3 py-1 rounded font-semibold">
//               Upload CV
//             </button>
//           </nav>
//           <FaBars className="md:hidden text-2xl cursor-pointer" />
//         </div>
//       </header>

// {/* Hero Section */}
// <section
//   className="relative h-screen flex items-end-safe justify-end-safe bg-cover "
//   style={{ backgroundImage: `url(${mainimg})` }}
// >
//   <div className="relative text-end text-white px-4">
//     <h1 className="text-4xl md:text-8xl font-bold text-shadow-zinc-800 text-shadow-lg">
//       VMD <br /> CONSULTANTS
//     </h1>
//     <br />
//     <h2 className="text-3xl md:text-4xl font-bold text-shadow-zinc-800 text-shadow-lg">
//       KADAWATHA
//     </h2>

//     <p className="text-center mt-2 text-2xl italic py-6  text-shadow-zinc-800 text-shadow-lg">
//       Your Career Pathway Provider
//       <br></br>
//       <button className="align-baseline mt-6 px-6 py-3 bg-[#660000] rounded-lg shadow-lg font-semibold hover:bg-red-900">
//         TALK TO US
//       </button>
//     </p>
//   </div>
// </section>

//       {/* Services Intro */}
//       <section className="bg-[#660000] text-white text-center py-10">
//         <h2 className="text-xl md:text-2xl font-bold">
//           WE SPECIALISE IN JOB PLACEMENTS & STUDENT CAREER PATHWAY PROGRAMS
//           AROUND THE GLOBE
//         </h2>
//         <p className="mt-3 italic text-lg">
//           If You Want To Change Your Life, Your Career, You Are At The Right
//           Place.
//         </p>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 text-center grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto">
//         <div>
//           <h3 className="text-3xl font-bold text-[#660000]">1.5k+</h3>
//           <p>Applicants</p>
//         </div>
//         <div>
//           <h3 className="text-3xl font-bold text-[#660000]">40+</h3>
//           <p>Countries & Colleges</p>
//         </div>
//         <div>
//           <h3 className="text-3xl font-bold text-[#660000]">100+</h3>
//           <p>Universities & Colleges</p>
//         </div>
//         <div>
//           <h3 className="text-3xl font-bold text-[#660000]">100%</h3>
//           <p>Very high candidate + Client satisfaction</p>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="container mx-auto px-6 py-10 text-center">
//         <h2 className="text-2xl font-bold mb-6">
//           We Provide Professional Services
//         </h2>
//         <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
//           We at VMD specialize in providing a rich supply of talent that can
//           uplift your organization and make you stand out from competition.
//           Whether full-time, part-time, or contract-based, we have solutions for
//           all requirements.
//         </p>
//       </section>

//       <Footer />
//     </div>
//   );
// }
