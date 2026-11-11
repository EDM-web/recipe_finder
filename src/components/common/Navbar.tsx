import { NavLink } from "react-router";

const navlinks = [
  { name: "Home", path: "/" },
  { name: "Recipes", path: "/recipes" },
  { name: "Favorites", path: "/favorites" },
];

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="flex justify-between items-center py-4 px-8 max-w-7xl">
        <h2 className="text-2xl font-bold text-orange-500">Recipe Finder</h2>
        <div className="flex items-center gap-6">
          {navlinks.map((nav) => (
            <NavLink
              key={nav.name}
              to={nav.path}
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-gray-600"
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
