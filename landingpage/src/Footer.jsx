import React from "react";
import logo from "./assets/logo.svg";
import facebookIcon from "./assets/Facebook.png";
import twitterIcon from "./assets/Twitter.png";
import linkedinIcon from "./assets/Linkedin.png";
import youtubeIcon from "./assets/Youtube.png";
import mediumIcon from "./assets/Medium.png";
import pinterestIcon from "./assets/Pinterest.png";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center w-full rounded-full border border-[#2a2a2a] bg-[#1f1f1f] px-3 py-2 md:px-6 md:py-4">
  <input
    type="email"
    placeholder="Enter Your Email"
    required
    className="flex-1 bg-transparent text-sm md:text-base text-gray-400 placeholder-gray-500 outline-none min-w-0 mr-2"
  />
  <button className="rounded-full bg-[#242424] px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm font-semibold text-white hover:bg-[#2a2a2a] transition-colors whitespace-nowrap">
    
    <span className="md:hidden">Subscribe</span>
    
   
    <span className="hidden md:inline">Subscribe To Newsletter</span>
  </button>
</div>

            <h2 className="text-2xl md:text-3xl font-semibold">
              Signup and start enjoying the benifits today!
            </h2>
            
            <button className="rounded-full bg-[#6a3cef] px-10 py-4 text-base font-semibold text-white hover:bg-[#5b33d0] transition-colors">
              Sign Up To Lilypads
            </button>

            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <img src={facebookIcon} alt="Facebook" className="h-20 w-20 rounded-full  p-0 cursor-pointer object-contain" />
              <img src={twitterIcon} alt="Twitter" className="h-20 w-20 rounded-full  p-0 cursor-pointer object-contain" />
              <img src={linkedinIcon} alt="LinkedIn" className="h-20 w-20 rounded-full  p-0 cursor-pointer  object-contain" />
              <img src={youtubeIcon} alt="YouTube" className="h-20 w-20 rounded-full  p-0 cursor-pointer  object-contain" />
              <img src={mediumIcon} alt="Medium" className="h-20 w-20 rounded-full  p-0 cursor-pointer  object-contain" />
              <img src={pinterestIcon} alt="Pinterest" className="h-20 w-20 rounded-full  p-0 cursor-pointer object-contain" />
            </div>
          </div>

          <div className="hidden lg:block w-px bg-white/10" />

          <div className="flex-1 space-y-8">
            <div className="flex items-start gap-6">
              <img src={logo} alt="Lilypads Logo" className="h-20 w-20 flex-shrink-0" />
              <div className="ml-4">
                <p className="text-sm font-semibold text-white mb-3">Reach Us At</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  6751 Columbia Gateway Dr.,<br />
                  3rd floor, Columbia,<br />
                  MD 21046
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-10 lg:gap-14">
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Network</h3>
                <ul className="space-y-2.5 text-sm text-gray-300">
                  <li className="hover:text-white cursor-pointer">Community</li>
                  <li className="hover:text-white cursor-pointer">Investor</li>
                  <li className="hover:text-white cursor-pointer">Broker</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
                <ul className="space-y-2.5 text-sm text-gray-300">
                  <li className="hover:text-white cursor-pointer">Invest</li>
                  <li className="hover:text-white cursor-pointer">Discover</li>
                  <li className="hover:text-white cursor-pointer">Transact</li>
                  <li className="hover:text-white cursor-pointer">Manage</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Technology</h3>
                <ul className="space-y-2.5 text-sm text-gray-300">
                  <li className="hover:text-white cursor-pointer">Artificial Intelligence</li>
                  <li className="hover:text-white cursor-pointer">Block Chain</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Our Story</h3>
                <ul className="space-y-2.5 text-sm text-gray-300">
                  <li className="hover:text-white cursor-pointer">Approach</li>
                  <li className="hover:text-white cursor-pointer">AboutUs</li>
                </ul>
              </div>

              <div className="max-w-[180px]">
                <h3 className="text-sm font-semibold text-white mb-4">Highlights</h3>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="hover:text-white cursor-pointer leading-snug">
                    Impact of COVID-19 on the food and beverage industry and the retail sector
                  </li>
                  <li className="hover:text-white cursor-pointer leading-snug">
                    Commercial lending during COVID-19: navigating the impact
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Knowledge Center</h3>
                <ul className="space-y-2.5 text-sm text-gray-300">
                  <li className="hover:text-white cursor-pointer">Resource</li>
                  <li className="hover:text-white cursor-pointer">Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4">
          <p className="text-[11px] text-gray-500">
            © {new Date().getFullYear()} Lilypads. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
