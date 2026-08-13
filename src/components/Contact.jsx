import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-white px-5 sm:px-6 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact Me
          </h2>

          <p className="text-gray-500 text-sm md:text-base mt-3">
            Have an opportunity or want to connect? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Container */}
        <div
          className="
            bg-gray-50
            border
            border-gray-200
            rounded-3xl
            p-6
            sm:p-8
            md:p-10
            lg:p-12
            grid
            grid-cols-1
            md:grid-cols-2
            gap-10
            md:gap-12
            items-center
          "
        >
          {/* Left Side */}
          <div className="text-center md:text-left">
            <p className="text-purple-600 font-semibold mb-3">Let's Connect</p>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Let's work together
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-7 mb-7">
              I'm open to opportunities where I can contribute, continue growing
              as a developer and build meaningful digital experiences. Feel free
              to reach out if you'd like to work together or simply connect.
            </p>

            {/* Email Button */}
            <a
              href="mailto:simnnf4@gmail.com"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-purple-600
                text-white
                px-5
                py-3
                rounded-lg
                font-medium
                hover:bg-purple-700
                transition
              "
            >
              Send Me an Email
              <FaArrowRight className="text-sm" />
            </a>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:simnnf4@gmail.com"
              className="
                flex
                items-center
                gap-4
                bg-white
                border
                border-gray-200
                rounded-xl
                p-4
                sm:p-5
                hover:border-purple-300
                hover:shadow-md
                transition
              "
            >
              <div
                className="
                  w-11
                  h-11
                  shrink-0
                  rounded-xl
                  bg-purple-100
                  text-purple-600
                  flex
                  items-center
                  justify-center
                  text-xl
                "
              >
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500">Email</p>

                <p className="font-semibold text-gray-900 break-all">
                  simnnf4@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/simret-negash"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-4
                bg-white
                border
                border-gray-200
                rounded-xl
                p-4
                sm:p-5
                hover:border-purple-300
                hover:shadow-md
                transition
              "
            >
              <div
                className="
                  w-11
                  h-11
                  shrink-0
                  rounded-xl
                  bg-purple-100
                  text-purple-600
                  flex
                  items-center
                  justify-center
                  text-xl
                "
              >
                <FaLinkedin />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500">LinkedIn</p>

                <p className="font-semibold text-gray-900">Simret Negash</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SimretN"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-4
                bg-white
                border
                border-gray-200
                rounded-xl
                p-4
                sm:p-5
                hover:border-purple-300
                hover:shadow-md
                transition
              "
            >
              <div
                className="
                  w-11
                  h-11
                  shrink-0
                  rounded-xl
                  bg-purple-100
                  text-purple-600
                  flex
                  items-center
                  justify-center
                  text-xl
                "
              >
                <FaGithub />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500">GitHub</p>

                <p className="font-semibold text-gray-900">SimretN</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
