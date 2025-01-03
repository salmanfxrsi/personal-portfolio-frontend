const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[40px] py-[20px]">
      {/* Logo and Name */}
      <div className="flex items-center gap-1">
        <h1 className="text-white text-xl font-semibold">Salman Farsi</h1>
      </div>
      {/* NavLinks and Others */}
      <div>
        <button className="text-[#FF014F] font-poppins text-sm bg-[linear-gradient(to_right_bottom,#212428,#16181c)] py-[15px] px-[35px] rounded-md hover:translate-y-[-6px] transition-transform duration-500 font-black">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
