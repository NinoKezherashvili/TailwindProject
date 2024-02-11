import { useEffect, useState } from "react";
import illustrationF1 from "../images/illustration-features-tab-1.svg";
import illustrationF2 from "../images/illustration-features-tab-2.svg";
import illustrationF3 from "../images/illustration-features-tab-3.svg";
import Panelcomponent from "./panelcomponent";

const Features = () => {
  const [panels, setPanels] = useState([]);
  const [panelTargets, setPanelTargets] = useState([]);

  // ორ დაეწკაპება რომელიმე თარგეთს, ამ თარგეთზე უნდა დაემატოს წითელი ხაზი, და წაიშალოს ყველა დანარჩენიდან
  // ამ ინდექსზე რაც არის იმის პანელის დისპლეი უნდა გახდეს ბლოკი და სხვა დანარჩენის ნონი

  useEffect(() => {
    const panelsList = document.querySelectorAll(".panel");
    const panelTargets = document.querySelectorAll(".panel-target");

    const panelsArray = Array.from(panelsList); // Convert NodeList to Array
    const panelTargetsArray = Array.from(panelTargets);
    if (panelsArray && panelsArray.length > 0) {
      panelsArray.forEach((el, i) => {
        if (i !== 0) {
          el.classList.add("hidden");
        } else {
          el.classList.add("block");
        }
      });
    }
    setPanels(panelsArray);
    setPanelTargets(panelTargetsArray);
  }, []);

  const changePanel = (e) => {
    panelTargets.forEach((el) => {
      el.classList.remove("border-b-4", "border-softRed", "hover:text-softRed");
    });

    e.target.classList.add(
      "border-b-4",
      "border-softRed",
      "hover:text-softRed"
    );
    const dataTargetValue = e.target.getAttribute("data-target");
    console.log(dataTargetValue);

    const targetPanel = panels.filter(
      (el) => panels.indexOf(el) === parseInt(dataTargetValue - 1)
    );

    targetPanel[0].classList.add("block");

    panels.forEach((el) => {
      el.classList.add("hidden");
      el.classList.remove("block");
      if (targetPanel[0] == el) {
        el.classList.add("block");
        el.classList.remove("hidden");

        console.log(true);
        console.log(el.classList);
      }
    });
  };

  return (
    <div>
      <section>
        {/*Features Heading */}

        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-grayisBlue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        {/*Feature Tabs */}

        <section id="tabs">
          {/*Tabs Container */}
          <div className="container relative mx-auto mb-32 mt-12 px-6">
            <div className="bg-tabs"></div>
            <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
              <div
                className="flex justify-center text-center text-gray-600 border-b md:border-b-0 tab md:w-1/3"
                data-target="panel-target"
              >
                <div
                  className="py-5  panel-target border-b-4
                  border-softRed
                  hover:text-softRed"
                  data-target="1"
                  onClick={(e) =>
                    changePanel(e, e.target.getAttribute("data-target"))
                  }
                >
                  Simple Bookmarking
                </div>
              </div>
              <div className="flex justify-center text-center text-gray-600 border-b md:border-b-0 tab md:w-1/3">
                <div
                  className="py-5  panel-target"
                  data-target="2"
                  onClick={(e) =>
                    changePanel(e, e.target.getAttribute("data-target"))
                  }
                >
                  Speedy Searching
                </div>
              </div>
              <div className="flex justify-center text-center text-gray-600 border-b md:border-b-0  tab md:w-1/3">
                <div
                  className="py-5 panel-target"
                  data-target="3 "
                  onClick={(e) =>
                    changePanel(e, e.target.getAttribute("data-target"))
                  }
                >
                  Easy Sharing
                </div>
              </div>
            </div>
            {/*Tab Panels */}
            <div id="panels">
              <section className="container mx-auto">
                <Panelcomponent
                  panelHeader="Bookmark in one click "
                  paragraph={
                    "  Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites."
                  }
                  imgSource={illustrationF2}
                />
                <Panelcomponent
                  panelHeader="Intelligent search"
                  paragraph={
                    "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
                  }
                  imgSource={illustrationF1}
                />
                <Panelcomponent
                  panelHeader="Bookmark in one click 3"
                  paragraph={
                    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites."
                  }
                  imgSource={illustrationF3}
                />
              </section>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Features;
