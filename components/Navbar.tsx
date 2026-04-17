"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock, LineChart, Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) =>
    pathname === path ? "bg-green-900 text-white" : "text-slate-500";

  return (
    <div className="navbar bg-white border-b border-gray-200 px-4 md:px-10 py-2">
      <div className="navbar-start w-full md:w-auto justify-between md:justify-start">
        <Link href="/" className="text-2xl flex items-center">
          <span className="font-extrabold text-gray-900">Keen</span>
          <span className="font-extrabold text-green-900">Keeper</span>
        </Link>

        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} className="btn btn-ghost btn-circle">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 border border-gray-100"
          >
            <li>
              <Link
                href="/"
                className={`mb-1 flex items-center gap-2 ${getLinkClass("/")}`}
              >
                <Home size={16} /> Home
              </Link>
            </li>
            <li>
              <Link
                href="/timeline"
                className={`mb-1 flex items-center gap-2 ${getLinkClass("/timeline")}`}
              >
                <Clock size={16} /> Timeline
              </Link>
            </li>
            <li>
              <Link
                href="/stats"
                className={`flex items-center gap-2 ${getLinkClass("/stats")}`}
              >
                <LineChart size={16} /> Stats
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end hidden md:flex w-full">
        <ul className="flex items-center gap-2 text-sm font-medium">
          <li>
            <Link
              href="/"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-md transition-colors ${getLinkClass("/")}`}
            >
              <Home size={18} />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/timeline"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-md transition-colors ${getLinkClass("/timeline")}`}
            >
              <Clock size={18} />
              Timeline
            </Link>
          </li>
          <li>
            <Link
              href="/stats"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-md transition-colors ${getLinkClass("/stats")}`}
            >
              <LineChart size={18} />
              Stats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
