import logo from "../images/logo-bookmark.svg";
export const Navigation = () => {
  return (
    <div>
      <nav className="container mx-auto p-6">
        <div className="flex items-center justify-between space-x-20 my-6">
          {/*Logo */}
          <div className="z-30">
            <img src={logo} alt="logo" id="logo" />
          </div>
          {/*Menu Items */}
          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <a href="#features" className="tracking-widest hover:text-softRed">
              Features
            </a>
            <a href="#download" className="tracking-widest hover:text-softRed">
              Download
            </a>
            <a href="#faq" className="tracking-widest hover:text-softRed">
              FAQ
            </a>
            <a
              href="#login"
              className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
            >
              login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
