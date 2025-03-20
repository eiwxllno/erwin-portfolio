import React from "react";

function Footer() {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
      {/* <a href="#hero" className="block text-xl md:text-2xl font-semibold"></a> */}
      <a
        href="mailto:webcifar@gmail.com"
        className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-customColor hover:bg-customColor/90 md:text-md "
      >
        Hire Me!
      </a>
      <p className="text-xs mt-2 text-gray-500 ">
        © {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
