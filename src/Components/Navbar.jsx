import { Link } from "react-router-dom";

const Navbar = () => {
    const NavLinks = <>
    <Link className="mr-4" to='/'>Home</Link>
    <Link className="mr-4" to='/addCoffe'>Add Coffee</Link>
    <Link className="mr-4" to='/signUp'>Sign Up</Link>
    <Link className="mr-4" to='/users'>Users</Link>
    </>
  return (
    <div className="navbar bg-pink-400 lg:max-w-7xl mx-auto rounded-lg ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            
           {NavLinks}
            
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Coffe store</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            NavLinks
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
