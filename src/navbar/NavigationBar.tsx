// src/components/Navbar.tsx

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MobileNav from './MobileNav';

const Navbar = () => {

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-black' : 'text-grey hover:text-[#d4af37]';


  return (
    <nav>
      <div className="flex items-center justify-around  ">
        {/* logo */}
        <div className="flex-col items-center">
          <Link to={'/'}>
            <img
              src="https://josephinstudiof.in/wp-content/uploads/2022/03/logo-black-2-73x40.png"
              alt="Logo"
              className="h-14 w-auto mr-3"
            />
          </Link>
        </div>

        {/* navTabs */}
        <ul
          className={`hidden md:flex space-x-6 text-sm font-semibold text-gray-500`}
        >
          <li>
            <NavLink to="/" className={navLinkClass} end>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={navLinkClass}>
              Blogs
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/services" className={navLinkClass}>
              SERVICES
            </NavLink>
          </li> */}
          <li className="relative group cursor-pointer">
            <span className={navLinkClass({ isActive: false })}>Gallery</span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md border border-[#BA9E52] rounded w-72 z-50">
              <li>
                <NavLink
                  to="/gallery/classical"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Classical Dance Photography
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery/family"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Family Portrait Photography
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery/kids"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Kids Photoshoots
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery/bussiness"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Business Photoshoots
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery/allience"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Alliance Portrait Photography
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery/meternity"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Maternity Photoshoots
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/faq" className={navLinkClass}>
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className={navLinkClass}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/*mobileMore*/}
        <div className="md:hidden">
          <MobileNav/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
