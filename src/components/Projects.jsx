const projects = [
  {
    title: "Weather App",
    description: "A weather application that provides current weather data and forecasts using the OpenWeatherMap API.",
    image: "/portfolio/img/weather-watch.png",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    demo: "https://086212.stu.sd-lab.nl/WeatherWatch/",
    code: "https://github.com/m1orez/weather-app"
  },{
    title: "Portfolio",
    description: "This portfolio website showcases my skills and projects. It is built with React and Tailwind CSS.",
    image: "/portfolio/img/portfolio.png",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    demo: "https://086212.stu.sd-lab.nl/portfolio/",
    code: "https://m1orez.github.io/portfolio/",
  },
  {
    title: "Drinking game",
    description: "A simple drinking game with cards, I made this in my free time to play with friends.",
    image: "/portfolio/img/drinking-game.png",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://086212.stu.sd-lab.nl/blackout/",
    code: "https://github.com/m1orez/blackout/  "
  },
  {
    title: "Tindog",
    description: "A Tinder-like website for dogs. I made this to practice Bootstrap.",
    image: "/portfolio/img/tindog.png",
    tech: ["HTML", "CSS", "Bootstrap"],
    demo: "https://086212.stu.sd-lab.nl/tindog/index.html",
    code: "https://github.com/m1orez/tindog"
  }
];
const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 text-center bg-gray-900">
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-10 animate-fadeIn">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform transition hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold  ">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-accent px-2 py-1 rounded text-sm text-white">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a href={project.demo} className="text-blue-400 hover:underline transition">Live Demo</a>
                <a href={project.code} className="text-blue-400 hover:underline transition">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;