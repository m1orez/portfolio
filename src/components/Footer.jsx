const Footer = () => {
    return (
      <footer className="py-6 text-center text-gray-500 bg-gray-900 border-t border-gray-700">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/m1orez" target="_blank" rel="noreferrer" className="text-white hover:text-accent transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pauline-walhout-60732034b/" target="_blank" rel="noreferrer" className="text-white hover:text-accent transition">
            LinkedIn
          </a>
        </div>
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Pauline Walhout. Built with ❤️ using React & Vite.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  