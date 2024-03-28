import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <details>
                  <summary>Where to see</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/wine">Wine</Link>
                    </li>
                    <li>
                      <Link href="/history">History</Link>
                    </li>
                    <li>
                      <Link href="/trails">Trails</Link>
                    </li>
                    <li>
                      <Link href="/shopping">Shopping</Link>
                    </li>
                    <li>
                      <Link href="/forkids">for Kids</Link>
                    </li>
                    <li>
                      <Link href="/hiddengems">Hidden Gems</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Where to eat</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/user">Fine Dining</Link>
                    </li>
                    <li>
                      <Link href="/user">Takeout</Link>
                    </li>
                    <li>
                      <Link href="/user">Sit-Down</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Where to Stay</summary>
                  <ul className="p-2">
                    <li>
                      <a>Hotels</a>
                    </li>
                    <li>
                      <Link href="/user">AirBnbs</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>About?</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            The Notl Travel Guide
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Where to see</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/wine">Wine</Link>
                  </li>
                  <li>
                    <Link href="/history">History</Link>
                  </li>
                  <li>
                    <Link href="/trails">Trails</Link>
                  </li>
                  <li>
                    <Link href="/shopping">Shopping</Link>
                  </li>
                  <li>
                    <Link href="/forkids">for Kids</Link>
                  </li>
                  <li>
                    <Link href="/hiddengems">Hidden Gems</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Where to eat</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/user">Fine Dining</Link>
                  </li>
                  <li>
                    <Link href="/user">Takeout</Link>
                  </li>
                  <li>
                    <Link href="/user">Sit-Down</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Where to Stay</summary>
                <ul className="p-2">
                  <li>
                    <a>Hotels</a>
                  </li>
                  <li>
                    <Link href="/user">AirBnbs</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About?</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default NavBar;
