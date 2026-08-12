function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 px-6 py-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 text-center sm:text-left">
          Simret.
        </h2>

        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-600 font-medium">
          <li>
            <a href="#about" className="hover:text-purple-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-purple-500 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-purple-500 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-purple-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
