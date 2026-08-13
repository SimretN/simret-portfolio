function About() {
  return (
    <section id="about" className="px-6 py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-purple-600 font-semibold mb-2">About Me</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get to know me
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-600 leading-7 md:leading-8">
            I'm a Full-Stack Developer with experience building modern web
            applications across both frontend and backend. I enjoy turning ideas
            into clean, responsive and user-friendly digital solutions.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-7 md:leading-8 mt-5">
            I work with technologies such as React, Angular, JavaScript,
            TypeScript, Node.js, C#/.NET, PHP, MongoDB and MySQL. I enjoy
            learning new technologies, solving problems and collaborating in
            agile teams to build reliable applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
