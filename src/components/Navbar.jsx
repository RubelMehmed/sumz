import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      {/* Add your navigation items here */}
      <button
        type='button'
        onClick={() => window.open("https://github.com/rubelmehmed", "_blank")}
        className='black_btn'
      >
        GitHub
      </button>
      <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

      <button
        type='button'
        onClick={() => window.open("https://facebook.com/rubelmehmed.pro", "_blank")}
        className='black_btn'
      >
        Facebook
      </button>
    </nav>
  );
};

export default Navbar;
