'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import clsx from 'clsx';

import { useUIStore } from '@/store';
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from 'react-icons/io5';

export const SideMenu = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  const { data: session, status } = useSession();
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user?.role === 'admin';

  // useEffect(() => {}, []);
  const logoutAction = async () => {
    closeMenu();
    await signOut();
  };

  return (
    <div className="">
      {/* Background site */}
      {isSideMenuOpen && (
        <div
          onClick={() => {
            closeMenu();
          }}
          className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-30 z-10"
        />
      )}
      {/* blur */}
      {isSideMenuOpen && (
        <div
          onClick={() => {
            closeMenu();
          }}
          className="fade-in fixed top-0 left-0 h-full w-full backdrop-filter backdrop-blur-sm"
        />
      )}
      {/* Navigation */}
      <nav
        className={clsx(
          'fixed p-5 right-0 top-0 h-full w-[400px] bg-white z-20 shadow-2xl transform transition-all duration-300',
          {
            'translate-x-full': !isSideMenuOpen,
          },
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => {
            closeMenu();
          }}
        />

        {/* Search */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-100 focus:outline-none focus:border-red-500"
            placeholder="Search"
          />
        </div>

        {/* Menu */}
        {isAuthenticated && (
          <>
            <Link
              href={'/profile'}
              onClick={() => closeMenu()}
              className="flex items-center mt-10 p-2 hover:bg-red-100 rounded transition-all"
            >
              <IoPersonOutline size={20} />
              <span className="ml-3 text-lg">Profile</span>
            </Link>
            <Link
              href={'/'}
              className="flex items-center mt-5 p-2 hover:bg-red-100 rounded transition-all"
            >
              <IoTicketOutline size={20} />
              <span className="ml-3 text-lg">Orders</span>
            </Link>
          </>
        )}
        {!isAuthenticated && (
          <Link
            onClick={() => closeMenu()}
            href="/auth/login"
            className="flex items-center mt-5 p-2 hover:bg-red-100 rounded transition-all"
          >
            <IoLogInOutline size={20} />
            <span className="ml-3 text-lg">Login</span>
          </Link>
        )}

        {isAuthenticated && (
          <button
            type="submit"
            onClick={logoutAction}
            className="flex items-center mt-5 p-2 hover:bg-red-100 rounded transition-all w-full"
          >
            <IoLogOutOutline size={20} />
            <span className="ml-3 text-lg">Logout</span>
          </button>
        )}

        {isAdmin && (
          <>
            <div className="w-full h-px bg-red-200 my-10" />
            <Link
              href={'/'}
              className="flex items-center mt-5 p-2 hover:bg-red-100 rounded transition-all"
            >
              <IoShirtOutline size={20} />
              <span className="ml-3 text-lg">Products</span>
            </Link>
            <Link
              href={'/'}
              className="flex items-center mt-5 p-2 hover:bg-red-100 rounded transition-all"
            >
              <IoTicketOutline size={20} />
              <span className="ml-3 text-lg">Orders</span>
            </Link>
            <Link
              href={'/'}
              className="flex items-center mt-5 p-2 hover:bg-red-100 rounded transition-all"
            >
              <IoPeopleOutline size={20} />
              <span className="ml-3 text-lg">Users</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
