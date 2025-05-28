const skills = [
  { name: "React", level: 45 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 70 },
  { name: "HTML", level: 90 },
  {name: "CSS", level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 text-center">
      <h2 className="text-5xl font-bold text-white mb-10 animate-fadeIn">Skills</h2>
      <div className="max-w-xl mx-auto space-y-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="text-left">
            <p className="font-semibold text-gray-200">{skill.name}</p>
            <div className="w-full bg-gray-700 rounded-full h-3 mt-1">
              <div
                className="bg-accent h-3 rounded-full transition-all duration-700 ease-in-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
