import React from "react";
import logo from "./assets/logo.svg";
import datadrivenImg from "./assets/datadriven.png";
import lilypadsImg from "./assets/lilypads.png";
import managerImg from "./assets/manager.png";
import optimiseImg from "./assets/optimise.png";
import subscribersImg from "./assets/subscribers.png";
import heroImage from "./assets/image.png";
import phone1 from "./assets/phone1.png";
import phone2 from "./assets/phone2.png";


const HeroSection = () => {

  return (
    <div className="font-sans text-gray-900">

      <div className="relative min-h-screen bg-white overflow-hidden flex flex-col">

        
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-br from-purple-50 via-white to-pink-50 pointer-events-none -z-20" />

        
        <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full z-0">
          <img
            src={heroImage}
            alt="Hero Background"
            className="h-full w-full object-cover object-left-top"
          />
          
          <div className="absolute inset-0 bg-black/10 lg:bg-transparent"></div>
        </div>

        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 w-full flex-grow flex flex-col">
          
         
          <header className="flex items-center justify-between py-6">
            <div className="flex items-center gap-12 flex-[1.2]">
              <img src={logo} alt="Lilypads Logo" className="h-10 w-auto object-contain" />
              
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-[14px] font-bold text-purple-700 flex flex-col items-center">
                  Home <span className="w-1.5 h-1.5 bg-purple-700 rounded-full mt-1"></span>
                </a>
                <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-purple-600 transition">Network</a>
                <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-purple-600 transition">Product</a>
                <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-purple-600 transition">Technology</a>
                <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-purple-600 transition">Our Story</a>
                <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-purple-600 transition">Knowledge Center</a>

              </nav>
            </div>

            
            <div className="flex items-center gap-4 flex-1 justify-end">
              <button className="hidden md:inline-flex items-center rounded-[16px] border border-white text-white px-8 py-3 text-[14px] font-semibold hover:bg-white/10 transition">
                Contact Us
              </button>
              <button className="rounded-[16px] bg-white px-10 py-3 text-[14px] font-bold text-purple-700 shadow-lg hover:bg-gray-100 transition">
                Log In
              </button>
            </div>
          </header>

          
          <main className="py-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
            <div className="space-y-8 pt-10">
              <div className="flex items-center gap-3">
                <div className="h-1 w-8 bg-[#c53363] rounded-full" />
                <p className="text-sm font-bold text-[#c53363]">Welcome to the</p>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-gray-900">
                Unprecedented <br />
                Era of <span className="text-[#c53363]">Real Estate</span> <br />
                <span className="text-[#c53363]">Investing</span>
              </h1>

              <p className="text-base text-gray-500 max-w-lg leading-relaxed">
                Lilypads uses sophisticated technologies for data-driven decisions in investing, managing and funding commercial real estate assets.
              </p>

              <button className="inline-flex items-center gap-2 rounded-[16px] bg-[#7D59C3] px-14 py-4 text-sm font-bold text-white shadow-xl shadow-purple-200 hover:bg-[#6a51e0] transition-transform hover:-translate-y-1">
                Start Investing Now
                <span className="text-lg">→</span>
              </button>

              <div className="flex flex-wrap gap-12 pt-8">
                <div>
                  <p className="text-3xl font-bold text-[#7D59C3]">658+</p>
                  <p className="text-sm text-gray-600 font-medium mt-1">Properties Registered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#7D59C3]">685+</p>
                  <p className="text-sm text-gray-600 font-medium mt-1">Deals Cracked</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#7D59C3]">255+</p>
                  <p className="text-sm text-gray-600 font-medium mt-1">Investors</p>
                </div>
              </div>
            </div>

            
            <div className="relative h-[650px] w-full hidden lg:block">

    
                <img
                    src={phone1}
                    alt="Investments App"
                    className="absolute top-1/2 -translate-y-1/2 left-[-50px] w-[400px] h-[670px] object-cover rounded-[40px]  "
                />

                <img
                    src={phone2}
                    alt="User Profile"
                    className="absolute top-1/2 -translate-y-1/2 right-[-150px] w-[330px] h-[680px] object-cover rounded-[40px] shadow-2xl "
                />

            </div>

            
          </main>
        </div>
      </div>

    
      <section className="bg-[#f5f3f9] py-30">
        <div className="mx-auto max-w-7xl px-4 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-collapse">
            
            
            <div className="border-b border-gray-300 md:border-r bg-[#f5f3f9] p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-0.5 w-8 bg-[#c53363]" />
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">About Us</p>
              </div>
              <h2 className="text-2xl md:text-3xl text-gray-900 font-serif leading-tight">
                Lillypad is the only Real Estate Investment tool you need for your business
              </h2>
            </div>

            
            <div className="border-b border-gray-300 lg:border-r bg-[#f5f3f9] p-6">
              <div className="flex items-center gap-3 mb-3">
                <img src={datadrivenImg} alt="Data Driven" className="h-[90px] w-[90px] rounded-full object-cover flex-shrink-0" />
                <h3 className="text-base font-semibold text-gray-900">
                  Become a Data-Driven Investor
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions and assists with reaching your long term investment objectives.
              </p>
            </div>

            
            <div className="border-b border-gray-300 bg-[#f5f3f9] p-6">
              <div className="flex items-center gap-3 mb-3">
                <img src={lilypadsImg} alt="Lilypads" className="h-[90px] w-[90px] rounded-full object-cover flex-shrink-0" />
                <h3 className="text-base font-semibold text-gray-900">
                  Lilypads can help you make smarter decisions.
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Streamline your investment evaluation process and collaborate in reaching your long term investment objectives.
              </p>
            </div>

            
            <div className="border-b md:border-b-0 border-r border-gray-300 bg-[#f5f3f9] p-6">
              <div className="flex items-center gap-3 mb-3">
                <img src={managerImg} alt="Manager" className="h-[90px] w-[90px] rounded-full object-cover flex-shrink-0" />
                <h3 className="text-base font-semibold text-gray-900">
                  Manager Due Diligence
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Evaluate managers against your objectives using traditional risk metrics with the addition of factor analysis. All it takes is a set of returns.
              </p>
            </div>

            
            <div className="border-b md:border-b-0 lg:border-r border-gray-300 bg-[#f5f3f9] p-6">
              <div className="flex items-center gap-3 mb-3">
                <img src={optimiseImg} alt="Optimize" className="h-[90px] w-[90px] rounded-full object-cover flex-shrink-0" />
                <h3 className="text-base font-semibold text-gray-900">
                  Optimize Asset Allocation
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Understand the underlying risk drivers in your portfolio using the Lilypads analysis factors and then optimize that portfolio based on objectives.
              </p>
            </div>

            
            <div className="bg-[#f5f3f9] p-6">
              <div className="flex items-center gap-3 mb-3">
                <img src={subscribersImg} alt="Subscribers" className="h-[90px] w-[90px] rounded-full object-cover flex-shrink-0" />
                <h3 className="text-base font-semibold text-gray-900">
                  Our Subscribers
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Serving a constellation of global subscribers Pension funds, Funds of Funds, Banks, Family offices, Asset managers, Wealth Managers
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HeroSection;

