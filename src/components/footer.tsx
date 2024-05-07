import React from "react";


const Footer = () => {
  return (
    <footer className="relative ">
      <div className="min-h-20 flex-1 flex items-center justify-center">
        <div className="px-3 py-2 rounded-xl border">
          <p className="flex gap-1 text-sm">
            developed by
            <a
              href="https://github.com/mxnan"
              target="_blank"
              className="underline underline-offset-4 font-bold"
            >
              mxnan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
