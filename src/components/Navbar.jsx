import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar({isOpen, setIsOpen}) {
  return (
    <>
      {/* hamburger menu button   */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[rgb(0,64,96)] text-white font-semibold px-2 py-2 rounded border-2 border-black fixed top-3 left-40 z-10 ${isOpen ? "left-44" : "left-2"} `} 
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* sidebar  */}
      <nav
        className={`h-screen w-56 bg-[rgb(0,64,96)] flex flex-col gap-4 p-3 text-white font-semibold text-xl text-center boder-2 border-black transition-transform duration-450 ${
          isOpen ? "translate-x" : "-translate-x-full"
        } fixed ` }
      >
        <h1 className="text-[rgb(186, 112, 72)] text-3xl pb-6 border-b border-[rgb(186,112,72)]">
          Niyyah
        </h1>
        <Link to="/" className="hover:text-[rgb(0,187,9)] transition">
          Home
        </Link>
        <Link to="/counter" className="hover:text-[rgb(0,187,9)] transition">
          {" "}
          Counter{" "}
        </Link>
        <Link to="/history" className="hover:text-[rgb(0,187,9)] transition">
          History
        </Link>
        <Link to="/profile" className="hover:text-[rgb(0,187,9)] transition">
          Profile
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
