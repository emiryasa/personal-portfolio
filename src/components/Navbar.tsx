import { navbarData } from "@/utils/data/navbarData";

function Navbar() {
  return (
    <nav className="py-8 px-4">
      <div className="md:container md:mx-auto flex justify-between items-center">
        <div className="text-white hidden md:block">
          <h1 className="text-xl">Emir.me</h1>
        </div>
        <div className="md:gap-10 w-full flex justify-evenly md:justify-end">
          {navbarData.map((item) => (
            <div key={item.id} className="relative">
              <a
                href={item.url}
                className="text-white transition-all duration-300 after:transition-all after:duration-300 after:absolute hover:after:w-full after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
