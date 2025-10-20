// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AboutUs from "./pages/AboutUs";
// import Home from "./pages/Home"; // example
// import Contact from "./pages/Contact"; // example

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* catch-all 404 */}
//         <Route
//           path="*"
//           element={<h1 className="text-center mt-10">Page Not Found</h1>}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {" "}
        {/* pt-20 so content not hidden under fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { FaBars } from "react-icons/fa";
// import mainimg from "./assets/mainimg.jpg";

// function App() {
//   const [count, setCount] = useState(0);

//   return <>

//   </>;
// }

// export default App;
