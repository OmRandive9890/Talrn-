"use client"
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [email, setEmail] = useState('');

  // Developer profiles data
  const developers = [
    {
      name: 'Thummar B',
      role: 'iOS Development',
      company: 'Capgemini',
      image: '/developer1.webp'
    },
    {
      name: 'Garg R',
      role: 'Senior iOS Developer',
      company: 'PayTM',
      image: '/developer2.webp'
    },
    {
      name: 'Pradhan R',
      role: 'Lead iOS Developer',
      company: 'Standard Chartered',
      image: '/developer3.webp'
    },
    {
      name: 'Thummar B',
      role: 'iOS Development',
      company: 'Capgemini',
      image: '/developer1.webp'
    },
    {
      name: 'Garg R',
      role: 'Senior iOS Developer',
      company: 'PayTM',
      image: '/developer2.webp'
    }
  ];

  // Industry tags
  const industries = [
    'Healthcare',
    'Automotive',
    'Banking',
    'Capital Markets',
    'Travel',
    'Digital Commerce'
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const maxScroll = developers.length * 280;
        return prev >= maxScroll ? 0 : prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [developers.length]);

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start px-8 lg:px-20 py-12 lg:py-16 gap-10 max-w-[1400px] mx-auto">
        <div className="flex-none w-full lg:w-[35%] pr-0 lg:pr-5">
          <h1 className="text-4xl lg:text-[42px] font-bold text-gray-900 leading-tight mb-5">
            Find & Hire iOS Developers with Ease
          </h1>
          <p className="text-lg text-gray-600 mb-4 font-normal">
            Bring the right talent to your team effortlessly with Talrn
          </p>
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            Hire pre-vetted remote iOS developers with strong technical &
            communication skills within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <input
              type="email"
              placeholder="Your work email"
              className="flex-1 px-5 py-3.5 border border-gray-300 rounded-lg text-[15px] outline-none focus:border-blue-500 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="px-8 py-3.5 bg-blue-600 text-white rounded-lg text-[15px] font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
              Hire iOS Dev
            </button>
          </div>

          <p className="text-sm text-gray-500">
            Looking for remote iOS dev jobs <a href="#apply" className="text-blue-600 underline">Apply here</a>
          </p>
        </div>

        {/* Developer Profiles Slider */}
        <div className="flex-none w-full lg:w-[65%] overflow-hidden relative">
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-5 transition-transform duration-75 ease-linear"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {[...developers, ...developers].map((dev, index) => (
                <div key={index} className="flex-none w-[260px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-full h-[280px] overflow-hidden bg-gray-100">
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mx-4 mt-4 mb-2">
                    {dev.name}
                  </h3>
                  <p className="text-sm text-blue-600 mx-4 mb-2 font-medium">
                    {dev.role}
                  </p>
                  <p className="text-sm text-gray-500 mx-4 mb-4">
                    Worked {index % 3 === 0 ? 'at' : 'on'} <strong className="text-gray-700 font-semibold">{dev.company}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="text-center px-8 lg:px-20 py-10 bg-white">
        <p className="text-lg text-gray-600 mb-3 leading-relaxed">
          Explore <strong className="text-gray-800 font-semibold">411+ iOS developers</strong> from <strong className="text-gray-800 font-semibold">71+ countries</strong>, delivering <strong className="text-gray-800 font-semibold">2516+ projects</strong>.
        </p>
        <p className="text-base text-gray-500 leading-relaxed">
          Discover <strong className="text-gray-800 font-semibold">102+ industry expert</strong> in Ecommerce, Health and Fitness & more with, <strong className="text-gray-800 font-semibold">326+ technology specialists</strong> in Swift, ObjectiveC & more
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#0a1e3d] to-[#1a3a5c] rounded-2xl py-20 px-20 mx-8 lg:mx-20 my-10">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1200px] mx-auto gap-8">
          <h2 className="text-4xl lg:text-[38px] font-bold text-white leading-tight text-center lg:text-left">
            Augment your team with<br />
            highly-skilled iOS Developers
          </h2>
          <button className="px-12 py-4 bg-white text-[#1a3a5c] rounded-lg text-base font-semibold hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300">
            View Profiles
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-8 lg:px-20 py-20 bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 max-w-[1400px] mx-auto">
          <div className="flex-none w-full lg:w-[40%]">
            <h2 className="text-4xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-5">
              Scale your team with Talrn's immediately available resources
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Find pre-vetted iOS developers that have previously worked in the
              same industry instantly.
            </p>
            <p className="text-lg text-gray-800 font-semibold mb-5">
              What is your industry?
            </p>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className="px-5 py-2.5 bg-white text-blue-600 border-[1.5px] border-gray-300 rounded-full text-sm font-medium hover:text-white hover:border-blue-600 hover:bg-blue-500 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-none lg:w-[50%] flex justify-center items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/team.webp"
                alt="Team members"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* World's Largest Network Section */}
      <div className="relative px-8 lg:px-20 py-16 bg-white overflow-hidden">
        <div className="relative bg-black rounded-3xl px-12 lg:px-20 py-20 max-w-[1400px] mx-auto overflow-hidden">
          {/* Background iPhone Image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30">
            <img
              src="/iphone-bg.jpeg"
              alt="iPhone"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[700px]">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Talrn is the world's largest network of top iOS talent.
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-12">
              Save 70% on staff costs, while driving innovation & growth. Guaranteed.
            </p>

            {/* Cards */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mt-10">
              <div className="bg-blue-500 rounded-2xl p-6  hover:bg-blue-300 hover:text-blue-600 transition-colors duration-300 cursor-pointer group">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Featured works on Talrn
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Explore the best works delivered by developers
                </p>
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500 rounded-2xl p-6  hover:bg-blue-300 hover:text-blue-600 transition-colors duration-300 cursor-pointer group">
                <h3 className="text-xl font-semibold text-white mb-3">
                  See all profiles on Talrn
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Discover top developer profiles available on Talrn
                </p>
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500 rounded-2xl p-6  hover:bg-blue-300 hover:text-blue-600 transition-colors duration-300 cursor-pointer group">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Apply as a developer
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Start your journey as a developer with Talrn
                </p>
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="px-8 lg:px-20 py-12 bg-white text-center">
        <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-3">
          We've helped <span className="text-blue-600 font-semibold">250+</span> clients outsource their software development
        </h2>
        <p className="text-gray-600 text-lg">
          And just to name a few...
        </p>

        {/* Client Logos Scrolling Rows */}
        <div className="space-y-8 overflow-hidden">
          {/* First Row - Scrolling Left */}
          <div className="relative">
            <div className="flex gap-8 animate-scroll-left">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-8 flex-shrink-0">
                  <ClientCard name="Remoteshare" logo="/remoteshare.png" />
                  <ClientCard name="1871" logo="/1871.png" badge="Active" />
                  <ClientCard name="UCSF" logo="/ucsf.png" />
                  <ClientCard name="Keller Offers" logo="/keller.png" />
                  <ClientCard name="Simple night" logo="/simple-night.png" />
                  <ClientCard name="RXR" logo="/rxr.png" />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Right */}
          <div className="relative">
            <div className="flex gap-8 animate-scroll-right">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-8 flex-shrink-0">
                  <ClientCard name="YOVI" logo="/yovi.png" />
                  <ClientCard name="Skoller" logo="/skoller.png" />
                  <ClientCard name="Shiny Registry" logo="/shiny-registry.png" />
                  <ClientCard name="SOCPOC" logo="/socpoc.png" />
                  <ClientCard name="Hedge" logo="/hedge.png" />
                  <ClientCard name="Loan" logo="/loan.png" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Managed Services Section */}
      <div className="px-8 lg:px-20 py-16 bg-white">
        <div className="relative bg-gray-800 rounded-3xl overflow-hidden max-w-[1400px] mx-auto min-h-[500px]">
          {/* Background Image with Blur */}
          <div className="absolute inset-0">
            <img
              src="/working.jpeg"
              alt="Team working"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-[600px]">
              Experience Talrn's managed services.
            </h2>
            <p className="text-base lg:text-lg text-white/90 mb-12 max-w-[700px]">
              Full-scale resource augmentation with a dedicated success manager to manage your team's performance. Book a free call with our team.
            </p>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-[1100px]">
              {/* Premium Plan */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                  Premium Plan
                </h3>
                <p className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  $160 <span className="text-lg font-normal">/mo</span>
                </p>
                <button className="w-full border-2 bg-white text-blue-600 hover:bg-blue-500 hover:border-white hover:text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                  Know More
                </button>
              </div>

              {/* Standard Plan */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                  Standard Plan
                </h3>
                <p className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  $0 <span className="text-lg font-normal">/mo</span>
                </p>
                <button className="w-full border-2 bg-white text-blue-600 hover:bg-blue-500 hover:border-white hover:text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                  Know More
                </button>
              </div>

              {/* Customized Plan */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                  Customized Plan
                </h3>
                <p className="text-lg lg:text-xl font-medium text-white mb-8 pt-2">
                  Get in touch with our team
                </p>
                <button className="w-full border-2 bg-white text-blue-600 hover:bg-blue-500 hover:border-white hover:text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Talrn in the News Section */}
      <div className="px-8 lg:px-20 py-3 bg-white text-center">
        <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-4">
          <span className="text-blue-600 font-semibold">Talrn</span> in the news
        </h2>
        <p className="text-gray-600 text-lg max-w-[600px] mx-auto">
          We are recognized as one of the leading platforms for on-demand talent.
        </p>

        {/* News Logos */}
        <div className="flex pt-10 flex-wrap justify-center justify-between items-center gap-16 lg:gap-24 mb-20">
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <img src="/NBC.webp" alt="NBC" className="h-24 lg:h-42 w-auto object-contain" />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <img src="/FOXNEWS.webp" alt="Fox News" className="h-24 lg:h-42 w-auto object-contain" />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <img src="/CBSO.webp" alt="CBS" className="h-24 lg:h-42 w-auto object-contain" />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <img src="/USATODAY.webp" alt="USA Today" className="h-24 lg:h-42 w-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Start Outsourcing Journey CTA */}
      <div className="px-8 lg:px-20 pb-20 bg-white">
        <div className="bg-blue-500 rounded-3xl px-8 lg:px-16 py-12 lg:py-16 max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Start your outsourcing journey today
              </h2>
              <div className="flex flex-wrap gap-6 lg:gap-8">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg font-medium">Independent</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg font-medium">Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg font-medium">Transparent</span>
                </div>
              </div>
            </div>
            <button className="bg-white border hover:bg-blue-500 hover:text-white text-blue-600 font-semibold py-4 px-12 rounded-full hover:shadow-lg transition-all duration-300 text-lg whitespace-nowrap">
              View Profiles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// Client Card Component
function ClientCard({ name, logo, badge }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 min-w-[280px] flex flex-col items-center justify-between">
      {badge && (
        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}
      <div className="flex items-center justify-center h-16 w-16 mb-6">
        <img src={logo} alt={name} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-500">12 month engagement</p>
      </div>
    </div>
  );
}