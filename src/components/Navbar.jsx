import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-gray-900 p-4 flex justify-center gap-8 shadow-md z-50">
      {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
        <Link
          key={item}
          to={item.toLowerCase()}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-accent transition"
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
