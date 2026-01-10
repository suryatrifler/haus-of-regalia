import React from "react";

export default function HomeFooter() {
  return (
    <footer className="mt-28 border-t border-[#835C57]-300 bg-[#faf0ee]">
      <div className="max-w-[1200px] mx-auto px-24 pt-20 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* LEFT — CONTACT DETAILS */}
          <div>
            <h3
              className="text-[11.5px] uppercase tracking-[0.32em] mb-6"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Get in Touch
            </h3>

            <div
              className="text-[13px] leading-[1.6] text-[#835C57]-900 space-y-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p>Phone : 9744999050, 81292 06164</p>

              <p>
                Email :
                <br />
                arkdesignstudio18@gmail.com
                <br />
                ark@arkarchitecturestudio.com
              </p>

              <p>
                For Careers,
                <br />
                careers@arkarchitecturestudio.com
              </p>
            </div>

            {/* SOCIAL ICON BUTTONS */}
            <div className="flex items-center gap-4 mt-10">
              
              {/* --- FACEBOOK --- */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[45px] h-[45px] rounded-[7px] cursor-pointer transition-all duration-300 flex items-center justify-center"
                aria-label="Facebook"
              >
                {/* 1. BACKGROUND LAYER (Absolute) */}
                <span className="
                  absolute inset-0 w-full h-full rounded-[10px] 
                  bg-[#1877F2] 
                  transition-all duration-300 
                  origin-bottom 
                  group-hover:rotate-[25deg]
                "></span>

                {/* 2. ICON CONTAINER (Relative, sits on top) */}
                <span className="
                  relative w-full h-full flex items-center justify-center rounded-[10px] 
                  border border-[rgba(156,156,156,0.466)] 
                  bg-transparent backdrop-blur-[0px] 
                  transition-all duration-300 
                  group-hover:border-[rgba(226,226,226,0.466)]
                  group-hover:bg-[rgba(202,202,202,0.466)] 
                  group-hover:backdrop-blur-[4px]
                ">
                  <svg
                    viewBox="0 0 384 512"
                    fill="white"
                    height="1.6em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </a>

              {/* --- INSTAGRAM --- */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[45px] h-[45px] rounded-[7px] cursor-pointer transition-all duration-300 flex items-center justify-center"
                aria-label="Instagram"
              >
                {/* 1. BACKGROUND LAYER */}
                <span className="
                  absolute inset-0 w-full h-full rounded-[10px] 
                  bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]
                  transition-all duration-300 
                  origin-bottom 
                  group-hover:rotate-[25deg]
                "></span>

                {/* 2. ICON CONTAINER */}
                <span className="
                  relative w-full h-full flex items-center justify-center rounded-[10px] 
                  border border-[rgba(156,156,156,0.466)] 
                  bg-transparent backdrop-blur-[0px] 
                  transition-all duration-300 
                  group-hover:border-[rgba(226,226,226,0.466)]
                  group-hover:bg-[rgba(202,202,202,0.466)] 
                  group-hover:backdrop-blur-[4px]
                ">
                  <svg fill="white" viewBox="0 0 448 512" height="1.5em" className="w-5 h-5">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </span>
              </a>

              {/* --- PINTEREST --- */}
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[45px] h-[45px] rounded-[7px] cursor-pointer transition-all duration-300 flex items-center justify-center"
                aria-label="Pinterest"
              >
                {/* 1. BACKGROUND LAYER */}
                <span className="
                  absolute inset-0 w-full h-full rounded-[10px] 
                  bg-[#E60023] 
                  transition-all duration-300 
                  origin-bottom 
                  group-hover:rotate-[25deg]
                "></span>

                {/* 2. ICON CONTAINER */}
                <span className="
                  relative w-full h-full flex items-center justify-center rounded-[10px] 
                  border border-[rgba(156,156,156,0.466)] 
                  bg-transparent backdrop-blur-[0px] 
                  transition-all duration-300 
                  group-hover:border-[rgba(226,226,226,0.466)]
                  group-hover:bg-[rgba(202,202,202,0.466)] 
                  group-hover:backdrop-blur-[4px]
                ">
                  <svg
                    viewBox="0 0 384 512"
                    fill="white"
                    height="1.6em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                  </svg>
                </span>
              </a>

            </div>
          </div>

          {/* RIGHT — FORM */}
          <div>
            <h3
              className="text-[11.5px] uppercase tracking-[0.32em] mb-6"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Contact Us
            </h3>

            <form className="grid grid-cols-2 gap-x-5 gap-y-4">
              <input
                placeholder="Name"
                className="
                  col-span-1
                  bg-[#835C57] text-[#FAF0EE]
                  px-3.5 py-2
                  text-[12px]
                  outline-none
                  placeholder:text-neutral-400
                  transition-colors
                  hover:bg-neutral-800
                  focus:bg-neutral-800
                "
                style={{ fontFamily: "var(--font-inter)" }}
              />

              <textarea
                placeholder="Message"
                className="
                  col-span-1 row-span-2
                  bg-[#835C57] text-[#FAF0EE]
                  px-3.5 py-2
                  text-[12px]
                  outline-none resize-none
                  placeholder:text-neutral-400
                  transition-colors
                  hover:bg-neutral-800
                  focus:bg-neutral-800
                  h-[100px]
                "
                style={{ fontFamily: "var(--font-inter)" }}
              />

              <input
                placeholder="Email"
                className="
                  col-span-1
                  bg-[#835C57] text-[#FAF0EE]
                  px-3.5 py-2
                  text-[12px]
                  outline-none
                  placeholder:text-neutral-400
                  transition-colors
                  hover:bg-neutral-800
                  focus:bg-neutral-800
                "
                style={{ fontFamily: "var(--font-inter)" }}
              />

              <div className="col-span-2 flex justify-end pt-5">
                <button
                  type="submit"
                  className="
                    bg-[#835C57] text-[#FAF0EE]
                    px-8 py-2
                    text-[11.5px] uppercase tracking-[0.18em]
                    transition-colors
                    hover:bg-neutral-800
                  "
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}