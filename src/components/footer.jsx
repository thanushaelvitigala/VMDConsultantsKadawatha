import React from "react";

function footer() {
  return (
    <div>
      <footer className="bg-[#660000] text-white py-10">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div>
            <h3 className="font-bold mb-3">VMD Consultants</h3>
            <p>
              We Have Our Head Office Based In The UK With Offices Across
              Canada, Australia And Sri Lanka.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Head Office</h4>
            <p>Solar House 915 High Road, London N12 8QJ</p>
            <p>020 8090 4724</p>
            <p>info@vmdconsultants.co.uk</p>
          </div>
          <div>
            <h4 className="font-semibold">Kadawatha Office</h4>
            <p>153/B/1,Nikado City Complex ,Kadawatha ,Sri Lanka</p>
            <p>+94 74 056 5246</p>
            <p>studypathways@vmdconsultants.co.uk</p>
          </div>
        </div>
        <p className="text-center mt-6 text-sm">
          © {new Date().getFullYear()} VMD Consultants
        </p>
      </footer>
    </div>
  );
}

export default footer;
