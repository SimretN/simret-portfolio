function About() {
  return (
    <section id="about" className="bg-gray-50 px-5 sm:px-6 py-14 md:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left Side - Cards */}
          <div className="grid gap-5">
            {/* Education Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm text-center">
              <p className="text-purple-600 font-semibold mb-2">Education</p>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                Full-Stack Web Development
              </h3>

              <p className="text-gray-600">Chas Academy, Stockholm</p>
            </div>

            {/* Development Focus Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm text-center">
              <p className="text-purple-600 font-semibold mb-2">
                Development Focus
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Frontend + Backend
              </h3>

              <p className="text-gray-600 leading-6">
                Creating responsive, reliable and user-focused web experiences.
              </p>
            </div>
          </div>

          {/* Right Side - About Text */}
          <div className="w-full max-w-xl mx-auto md:mx-0 md:pl-4 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 text-center md:text-left">
              Building with purpose
            </h3>

            <p className="text-gray-600 text-base leading-7 mb-4">
              I'm a Full-Stack Web Developer who enjoys turning ideas into
              clean, functional and engaging digital experiences. I work across
              both frontend and backend, combining thoughtful user experiences
              with reliable application logic.
            </p>

            <p className="text-gray-600 text-base leading-7">
              I'm curious, solution-focused and always motivated to keep
              learning. I enjoy solving real problems, collaborating with others
              and building applications that are useful, reliable and enjoyable
              to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
