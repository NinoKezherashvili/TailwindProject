import chromeLogo from "../images/logo-chrome.svg";
import firefoxLogo from "../images/logo-firefox.svg";
import operaLogo from "../images/logo-opera.svg";
import Downloadcomponent from "./downloadcomponent";

const Download = () => {
  return (
    <div>
      <section className="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Donwload the extenstion
          </h2>
          <p className="max-w-lg mx-auto text-center text-grayishBlue">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
      </section>
      <section
        id="download-boxes"
        className="py-32 container mx-auto flex flex-col md:flex-row md:space-x-4"
      >
        <Downloadcomponent
          chromeLogo={chromeLogo}
          downloadHeader={"Add to Chrome"}
        />
        <Downloadcomponent
          chromeLogo={firefoxLogo}
          downloadHeader={"Add to Firefox"}
        />
        <Downloadcomponent
          chromeLogo={operaLogo}
          downloadHeader={"Add to Opera"}
        />
      </section>
    </div>
  );
};

export default Download;
