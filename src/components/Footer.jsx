import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
        {/* Name / Copyright */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-gray-900">Simret Negash</p>

          <p className="mt-1 text-sm text-gray-500">
            © {currentYear} All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/SimretN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl text-gray-600 transition hover:-translate-y-1 hover:text-purple-600"
          >
            <FaGithub />
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl text-gray-600 transition hover:-translate-y-1 hover:text-purple-600"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Built By */}
        <p className="flex items-center gap-1 text-sm text-gray-500">
          Designed & built with
          <FaHeart className="text-purple-600" />
          by Simret
        </p>
      </div>
    </footer>
  );
}

export default Footer;
