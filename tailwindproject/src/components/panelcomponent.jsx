import React from "react";

const Panelcomponent = ({ paragraph, panelHeader, imgSource }) => {
  return (
    <div>
      <div className="flex flex-col  py-5 md:flex-row md:space-x-7 panel">
        <div className="flex justify-center md:w-1/2">
          <img src={imgSource} alt="" className="relative z-10" />
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
            {panelHeader}
          </h3>
          <p className="max-w-md text-center text-grayishBlue md:text-left">
            {paragraph}
          </p>
          <div className="mx-auto md:mx-0">
            <a
              href="#1"
              className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg
                        md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
            >
              More info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panelcomponent;
