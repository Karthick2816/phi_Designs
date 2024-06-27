import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="px-4 py-10 footer xl:px-24 text-base-content">
        <aside>
          <img src="" alt="" />
          <p className="my-3 text-white md:w-40">
            As The Saying Goes, 'Design Is Not Just What It Looks Like And Feels
            Like. Design Is How It Works.' We At PhiDesigns Are A Young Design
            Team That Builds workspaces That Are Not Just Aesthetic But
            Functional.
          </p>
        </aside>
        <nav>
          <header className="text-2xl text-orange-600 text-footer-title">
            CITIES
          </header>
          <a className="text-white link link-hover">
            Office interior Designers in Ahmadabad
          </a>
          <a className="text-white link link-hover">
            {" "}
            Office interior Designers in Pune
          </a>
          <a className="text-white link link-hover">
            {" "}
            Office interior Designers in Noida
          </a>
          <a className="text-white link link-hover">
            Office interior Designers in Vadodara
          </a>
          <a className="text-white link link-hover">
            Office interior Designers in Rajkot
          </a>
          <a className="text-white link link-hover">
            Office interior Designers in Gurgaon
          </a>
        </nav>
        <nav>
          <header className="footer-title">Cities</header>
          <a className="text-white link link-hover">
            Office interior Designers in Ahmadabad
          </a>
          <a className="text-white link link-hover">
            {" "}
            Office interior Designers in Pune
          </a>
          <a className="text-white link link-hover">
            {" "}
            Office interior Designers in Noida
          </a>
          <a className="text-white link link-hover">
            Office interior Designers in Vadodara
          </a>
          <a className="text-white link link-hover">
            Office interior Designers in Rajkot
          </a>
          <a className="text-white link link-hover">
            Office interior Designers in Gurgaon
          </a>
        </nav>
        <nav>
          <header className="text-xl text-orange-600 text-footer-title">
            Quick Menu
          </header>
          <a className="text-white link link-hover">Home </a>
          <a className="text-white link link-hover">About us</a>
          <a className="text-white link link-hover">Contact us</a>
          <a className="text-white link link-hover">Portfolio</a>
          <a className="text-white link link-hover">Virtual Walkthroughs</a>
          <a className="text-white link link-hover">Privacy Policy </a>
          <a className="text-white link link-hover">Vendor Partners </a>
        </nav>
        <nav>
          <header className="text-xl text-orange-600 text-footer-title">
            Let's Connect
          </header>
          <a className="text-white link link-hover">hi@phidesigns.in</a>
          <a className="text-white link link-hover ">+91 99980 01667</a>
          <a className="text-white link link-hover">Social media</a>
          <a className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
      <hr />
      <footer className="items-center px-4 py-4 mt-2 footer xl:px-24">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2024- All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-center"></nav>
      </footer>
    </div>
  );
};

export default Footer;
