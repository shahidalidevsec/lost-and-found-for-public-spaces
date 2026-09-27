import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, UserCircle, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, isLoggedIn, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const signOut = () => {
    logout();
    setOpen(false);
    setProfileOpen(false);
    navigate("/");
  };
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="min-w-0">
          <div className="text-lg font-black text-slate-900 sm:text-xl">
            FindBack<span className="text-red-600">.com</span>
          </div>
          <div className="hidden text-xs font-semibold text-slate-500 sm:block">
            Community Lost & Found
          </div>
        </Link>
        <div className="hidden items-center gap-6 lg:flex   ">
          <Link className=" hover:border-b-2 font-semibold  text-gray-800  transition hover:text-red-600" to="/">
            Home
          </Link>
          <Link  className=" hover:border-b-2 font-semibold  text-gray-800  transition hover:text-red-600"  to="/lost-items">
            Lost
          </Link>
          <Link
             className=" hover:border-b-2 font-semibold  text-gray-800  transition   hover:text-emerald-600"
            to="/found-items"
          >
            Found
          </Link>
          <Link  className=" hover:border-b-2 font-semibold  text-gray-800  transition   hover:text-blue-600" to="/about">
            About
          </Link>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen((v) => !v)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50"
              >
                <UserCircle size={21} />
                <span className="max-w-28 truncate font-semibold">
                  {user?.name}
                </span>
                <ChevronDown size={16} />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl border bg-white p-2 shadow-xl">
                  <div className="border-b px-3 py-3">
                    <p className="font-bold">{user?.name}</p>
                    <p className="truncate text-xs text-slate-500">
                      {user?.email}
                    </p>
                  </div>
                  <Link
                    onClick={() => setProfileOpen(false)}
                    className="mt-1 block rounded-xl px-3 py-2 font-semibold hover:bg-slate-50"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                  <Link
                    onClick={() => setProfileOpen(false)}
                    className="block rounded-xl px-3 py-2 font-semibold hover:bg-slate-50"
                    to="/my-reports"
                  >
                    My Reports
                  </Link>
                  <Link
                    onClick={() => setProfileOpen(false)}
                    className="block rounded-xl px-3 py-2 font-semibold hover:bg-slate-50"
                    to="/matches"
                  >
                    Find Matches
                  </Link>
                  <button
                    onClick={signOut}
                    className="mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-2 font-semibold text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={17} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-xl px-4 py-2 font-bold text-slate-700 hover:bg-slate-100"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-xl bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
        <button
          className="rounded-xl p-2 sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t bg-white p-4 sm:hidden">
          <div className="grid gap-2">
            <Link
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-semibold hover:bg-slate-50"
              to="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-semibold"
              to="/lost-items"
            >
              Lost Items
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-semibold"
              to="/found-items"
            >
              Found Items
            </Link>
            {isLoggedIn ? (
              <>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="font-bold">{user?.name}</p>
                  <p className="text-xs text-slate-500">{user?.email}</p>
                </div>
                <Link
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-semibold"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-semibold"
                  to="/my-reports"
                >
                  My Reports
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-semibold"
                  to="/matches"
                >
                  Find Matches
                </Link>
                <button
                  onClick={signOut}
                  className="rounded-xl bg-red-50 px-3 py-3 text-left font-bold text-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-semibold"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-red-600 px-3 py-3 font-bold text-white"
                  to="/register"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
