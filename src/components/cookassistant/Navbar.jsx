import logoImg from "../../assets/ca.svg";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex items-center justify-between w-full px-6 font-semibold text-orange-500 border-b border-stone-300 bg-gradient-to-r from-lime-100 via-green-100 to-teal-100">
      <div className="flex items-center my-auto">
        <img src={logoImg} alt="CookAssistant" className="w-10 lg:w-full" />
      </div>
      <div className="flex gap-3">
        <a href="#about" className="text-sm lg:text-xl">
          關於
        </a>
        <a href="#achievements" className="text-sm lg:text-xl">
          成果
        </a>
        <a href="#tech" className="text-sm lg:text-xl">
          使用技術
        </a>
        <a href="#contact" className="text-sm lg:text-xl">
          聯絡方式
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
