// Hero.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/portfolio/img/background.jpg')" }}
    >
      <h1 className="text-6xl md:text-8xl font-bold text-white bg-clip-text text-transparent animate-fadeIn">
        Hi, I'm Pauline Walhout
      </h1>
      <p className="text-xl mt-4 text-gray-300 animate-fadeIn">
        Creating elegant, responsive, and functional web experiences.
      </p>
      <div className="flex space-x-6 mt-6 text-accent animate-bounceSlow">
        <a href="https://github.com/m1orez" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/pauline-walhout-60732034b/" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:m1orez@outlook.com" className="hover:scale-110 transition">
          <FaEnvelope size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
