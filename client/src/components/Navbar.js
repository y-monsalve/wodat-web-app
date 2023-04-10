import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Safe Places</a>
              </li>
              {/* <li>
                <a>Containers</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">WoDat?</a>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-ghost ">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-ghost">Sing up</button>
          </Link>
        </div>
      </div>
    </>
  );
}
