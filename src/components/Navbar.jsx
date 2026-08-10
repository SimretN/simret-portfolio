function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-5 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900">Simret.</h2>

      <ul className="flex gap-6 text-gray-600 font-medium">
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
    </nav>
  );
}

export default Navbar;
