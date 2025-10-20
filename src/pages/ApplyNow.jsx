export default function ApplyNow() {
  return (
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
  );
}

// import { useState } from "react";

// function App() {
//   const [message, setMessage] = useState("");
//   const [mobileNum, setMobileNum] = useState("");
//   const [file, setFile] = useState(null);
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const formData = new FormData();
//       formData.append("message", message);

//       // Ensure correct WhatsApp format
//       let formattedNumber = mobileNum.startsWith("whatsapp:")
//         ? mobileNum
//         : `whatsapp:${mobileNum}`;

//       formData.append("mobileNum", formattedNumber);
//       if (file) formData.append("file", file);

//       const res = await fetch("http://localhost:5000/send-whatsapp", {
//         method: "POST",
//         body: formData, // multipart/form-data
//       });

//       const data = await res.json();
//       if (data.success) {
//         setStatus("✅ WhatsApp message sent successfully!");
//       } else {
//         setStatus("❌ Sending Failed: " + data.error);
//       }
//     } catch (err) {
//       setStatus("⚠️ Unknown Error: " + err.message);
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Ping us on WhatsApp!</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="my-4 flex flex-col xl:mt-20 gap-4"
//       >
//         <input
//           type="text" // changed from number ✅
//           value={mobileNum}
//           onChange={(e) => setMobileNum(e.target.value)}
//           placeholder="Enter your WhatsApp number (e.g. +94754027930)"
//           className="min-w-md p-4"
//           required
//         />
//         <input
//           type="file"
//           name="file"
//           className="p-4"
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type your WhatsApp message here!"
//           rows={4}
//           className="p-4 border-0 active:border-0 focus:border-0"
//           cols={40}
//           required
//         />
//         <br />
//         <button type="submit">Send WhatsApp Message</button>
//       </form>
//       <p>{status}</p>
//     </div>
//   );
// }

// export default App;

//=========================================================================================================================

// src/pages/ApplyNow.jsx
// import React, { useState } from "react";

// export default function ApplyNow() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     country: "",
//     occupation: "",
//     cv: null,
//     comment: "",
//     source: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/send-whatsapp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert("✅ WhatsApp message sent successfully!");
//       } else {
//         alert("❌ Failed: " + data.error);
//       }
//     } catch (error) {
//       console.error("❌ Request error:", error);
//       alert("Error sending request to server");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
//       {/* Title Section */}
//       <h1 className="text-3xl font-bold mb-2">Apply Now</h1>
//       <p className="text-lg text-gray-700 mb-6 text-center">
//         Fill in the form below and we will contact you soon
//       </p>

//       {/* Form Card */}
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
//         <h2 className="text-xl font-semibold text-center mb-2">
//           Submit your CV
//         </h2>
//         <p className="text-sm text-gray-500 text-center mb-6">
//           Please leave your contact info and we will contact you back
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* First Name */}
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           />

//           {/* Last Name */}
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name *"
//             required
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           />

//           {/* Phone */}
//           <input
//             type="tel"
//             name="phone"
//             placeholder="+94754027930"
//             required
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="E-mail *"
//             required
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           />

//           {/* Country */}
//           <select
//             name="country"
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           >
//             <option value="">Country of residence</option>
//             <option value="Sri Lanka">Sri Lanka</option>
//             <option value="India">India</option>
//             <option value="USA">USA</option>
//             <option value="UK">UK</option>
//           </select>

//           {/* Occupation */}
//           <input
//             type="text"
//             name="occupation"
//             placeholder="Your Occupation/Profession"
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           />

//           {/* CV Upload */}
//           <div className="border p-3 rounded-lg">
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               CV*
//             </label>
//             <input
//               type="file"
//               name="cv"
//               required
//               className="w-full text-sm text-gray-500"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Comment */}
//           <textarea
//             name="comment"
//             placeholder="Comment"
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             rows="3"
//             onChange={handleChange}
//           ></textarea>

//           {/* How did you hear */}
//           <select
//             name="source"
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           >
//             <option value="">How did you hear about us</option>
//             <option value="Facebook">Facebook</option>
//             <option value="LinkedIn">LinkedIn</option>
//             <option value="Website">Website</option>
//             <option value="Friend">Friend</option>
//           </select>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

//=========================================================================================================================

// // src/pages/ApplyNow.jsx
// import React, { useState } from "react";

// export default function ApplyNow() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     country: "",
//     occupation: "",
//     cv: null,
//     comment: "",
//     source: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Later: send data to backend (Node/Express + MongoDB)
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
//       {/* Title Section */}
//       <h1 className="text-3xl font-bold mb-2">Apply Now</h1>
//       <p className="text-lg text-gray-700 mb-6 text-center">
//         Fill in the form below and we will contact you soon
//       </p>

//       {/* Form Card */}
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
//         <h2 className="text-xl font-semibold text-center mb-2">
//           Submit your CV
//         </h2>
//         <p className="text-sm text-gray-500 text-center mb-6">
//           Please leave your contact info and we will contact you back
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* First Name */}
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           />

//           {/* Last Name */}
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name *"
//             required
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           />

//           {/* Phone */}
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone"
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="E-mail *"
//             required
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           />

//           {/* Country */}
//           <select
//             name="country"
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           >
//             <option value="">Country of residence</option>
//             <option value="Sri Lanka">Sri Lanka</option>
//             <option value="India">India</option>
//             <option value="USA">USA</option>
//             <option value="UK">UK</option>
//           </select>

//           {/* Occupation */}
//           <input
//             type="text"
//             name="occupation"
//             placeholder="Your Occupation/Profession"
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           />

//           {/* CV Upload */}
//           <div className="border p-3 rounded-lg">
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               CV*
//             </label>
//             <input
//               type="file"
//               name="cv"
//               required
//               className="w-full text-sm text-gray-500"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Comment */}
//           <textarea
//             name="comment"
//             placeholder="Comment"
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             rows="3"
//             onChange={handleChange}
//           ></textarea>

//           {/* How did you hear */}
//           <select
//             name="source"
//             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//             onChange={handleChange}
//           >
//             <option value="">How did you hear about us</option>
//             <option value="Facebook">Facebook</option>
//             <option value="LinkedIn">LinkedIn</option>
//             <option value="Website">Website</option>
//             <option value="Friend">Friend</option>
//           </select>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
