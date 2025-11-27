"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FaUser } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/products">Shop</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </>
  );

  return (
    <div className="bg-white shadow-md flex justify-between items-center py-2 px-3 border sticky top-0 z-50">

      {/* LEFT */}
      <div className="navbar-start flex items-center">
        {/* MOBILE MENU */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <ul tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[100]">
            {navLinks}
          </ul>
        </div>

        {/* LOGO */}
        <Link href="/" className="btn btn-ghost text-2xl font-bold text-primary">
          TechZone
        </Link>
      </div>

      {/* CENTER MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-3 ">
          {navLinks}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-2 flex items-center" ref={menuRef}>

        {/* LOGIN BUTTON */}
        {!session && (
          <Link href="/auth/signin" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}

        {/* USER DROPDOWN */}
        {session && (
          <div className="relative">

            {/* AVATAR + NAME BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 btn btn-ghost normal-case"
            >
              <div className="avatar">
                <div className="relative w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1 overflow-hidden">
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="User"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="bg-primary text-white flex items-center justify-center h-full w-full">
                      <FaUser />
                    </div>
                  )}
                </div>
              </div>
              <span className="hidden md:inline text-sm font-medium">
                {session.user?.name}
              </span>
            </button>

            {/* DROPDOWN */}
            {open && (
              <ul className="menu bg-white rounded-lg menu-sm absolute right-0 mt-2 w-56 bg-base-100 shadow rounded-box p-2 z-[200]">
                <li className="menu-title text-xs">
                  {session.user?.email}
                </li>

                <li>
                  <Link href="/dashboard/add-product" onClick={() => setOpen(false)}>
                    ➕ Add Product
                  </Link>
                </li>

                <li>
                  <Link href="/dashboard/manage-products" onClick={() => setOpen(false)}>
                    📦 Manage Products
                  </Link>
                </li>

                <div className="divider my-1"></div>

                <li>
                  <button
                    onClick={() => {
                      setOpen(false);
                      signOut();
                    }}
                    className="text-error w-full text-left"
                  >
                    🚪 Logout
                  </button>
                </li>
              </ul>
            )}

          </div>
        )}

      </div>

    </div>
  );
};

export default Navbar;
