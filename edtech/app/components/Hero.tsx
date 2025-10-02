import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 xl:py-28 overflow-hidden">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30"></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/20"></div>
        
        {/* Clean decorative elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-[#4169E1] rounded-full opacity-20"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-[#4169E1] rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-[#4169E1] rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-32 w-1 h-1 bg-[#4169E1] rounded-full opacity-30"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 lg:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#4169E1]/10 text-[#4169E1] rounded-full text-sm font-semibold w-fit">
              🚀 Join 50,000+ learners worldwide
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Empowering{' '}
              <span className="relative">
                <span className="text-[#4169E1]">Education</span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[#4169E1]/20 -skew-x-12"></div>
              </span>{' '}
              with Technology
            </h1>

            {/* Supporting Text */}
            <p className="text-lg text-gray-600 sm:text-xl lg:text-lg xl:text-xl max-w-2xl leading-relaxed">
              Transform your learning journey with our AI-powered educational platform. 
              Access personalized courses, interactive content, and expert mentorship to unlock 
              your full potential in the digital age.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">AI-Powered Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">24/7 Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Certified Courses</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#4169E1] border-2 border-[#4169E1] rounded-xl shadow-lg transition-all duration-300 hover:bg-[#3557C7] hover:border-[#3557C7] hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#4169E1]/25">
                Get Started Free
                <svg 
                  className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </button>

              <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#4169E1] bg-white border-2 border-[#4169E1] rounded-xl shadow-lg transition-all duration-300 hover:bg-[#4169E1] hover:text-white hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#4169E1]/25">
                Watch Demo
                <svg 
                  className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 5a12 12 0 1118 0" 
                  />
                </svg>
              </button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#4169E1] to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                    A
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                    S
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                    M
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                    +
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">50,000+ students</p>
                  <p className="text-sm text-gray-500">Active learners</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">4.9/5</p>
                  <p className="text-sm text-gray-500">2,500+ reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Enhanced Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Subtle Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Minimal floating elements */}
                <div className="absolute top-8 left-6 w-3 h-3 bg-[#4169E1] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-16 right-8 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-8 w-2 h-2 bg-indigo-400 rounded-full opacity-25 animate-pulse delay-2000"></div>
              </div>
              
              {/* Main Learning Dashboard Mockup */}
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200/50 p-6 lg:p-8 transform rotate-2 hover:rotate-0 transition-all duration-300 hover:shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#4169E1] to-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Learning Dashboard</h3>
                      <p className="text-xs text-gray-500">Welcome back, Student!</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Progress Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-900">React Basics</span>
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">85%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-[85%] transition-all duration-1000"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-xl border border-purple-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-purple-900">JavaScript</span>
                      <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">92%</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-[92%] transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>

                {/* Video Lesson Preview */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4169E1]/20 to-purple-500/20"></div>
                  <div className="relative flex items-center justify-center min-h-[120px]">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
                      <svg className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="relative text-center mt-4">
                    <h4 className="text-white font-semibold text-sm">Advanced React Hooks</h4>
                    <p className="text-white/70 text-xs">15 min remaining</p>
                  </div>
                </div>

                {/* Achievement Badges */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-600">3 achievements unlocked</span>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-3 border border-gray-100 transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">98%</p>
                    <p className="text-xs text-gray-500">Success</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 -left-6 bg-white rounded-xl shadow-lg p-3 border border-gray-100 transform rotate-3 hover:rotate-0 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#4169E1] to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">2.5h</p>
                    <p className="text-xs text-gray-500">Today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
