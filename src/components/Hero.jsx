import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/profile/simret-profile.jpg";

function Hero() {
  return (
    <section id="home" className="px-5 py-12 sm:px-6 md:py-16">
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-col-reverse
          items-center
          justify-between
          gap-10

          md:max-w-5xl
          md:flex-row
          md:gap-8

          xl:max-w-6xl
        "
      >
        {/* Left Side - Text */}
        <div
          className="
            w-full
            min-w-0
            text-center

            md:w-[60%]
            md:text-left
          "
        >
          <p className="mb-4 font-semibold text-purple-600">
            Hello, I'm Simret 👋
          </p>

          <h1
            className="
              mb-8
              text-3xl
              font-bold
              leading-tight
              text-gray-900

              sm:text-4xl

              md:text-4xl
              md:whitespace-nowrap

              lg:text-5xl

              xl:text-5xl
            "
          >
            Full-Stack Web Developer
          </h1>

          {/* Buttons */}
          <div
            className="
              mb-8
              flex
              flex-wrap
              justify-center
              gap-4

              md:justify-start
            "
          >
            <a
              href="/Simret-Negash-CV-English.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-lg
                bg-purple-600
                px-6
                py-3
                font-medium
                text-white
                transition
                hover:bg-purple-700
              "
            >
              View CV
            </a>

            <a
              href="#contact"
              className="
                rounded-lg
                border
                border-gray-300
                px-6
                py-3
                font-medium
                text-gray-800
                transition
                hover:border-purple-600
                hover:text-purple-600
              "
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div
            className="
              flex
              justify-center
              gap-5
              text-2xl

              md:justify-start
            "
          >
            <a
              href="https://github.com/SimretN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-700 transition hover:text-purple-600"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/simret-negash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-700 transition hover:text-purple-600"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side - Profile Picture */}
        <div
          className="
            flex
            w-full
            justify-center

            md:w-[40%]
            md:justify-end
          "
        >
          <div className="relative">
            {/* Purple decoration */}
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-purple-100"></div>

            <img
              src={profileImage}
              alt="Simret Negash"
              className="
                relative
                h-64
                w-52
                rounded-3xl
                object-cover
                shadow-lg

                sm:h-72
                sm:w-56

                md:h-72
                md:w-60

                lg:h-76
                lg:w-64

                xl:h-80
                xl:w-68
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
