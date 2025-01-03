import DownloadResumeButton from "../../components/DownloadResumeButton";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[40px] py-[20px]">
      {/* Logo and Name */}
      <div className="flex items-center gap-1">
        <h1 className="text-white text-xl font-semibold">Salman Farsi</h1>
      </div>
      {/* NavLinks and Others */}
      <div>
        <DownloadResumeButton></DownloadResumeButton>
      </div>
    </div>
  );
};

export default Navbar;
