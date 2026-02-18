import { Briefcase } from "lucide-react";
import Link from "next/link";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="h-16 mx-auto  flex justify-between items-center px-4 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            href={"/"}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div >
              {/* logo */}
            </div>
            <span className="text-xl font-semibold tracking-tight">
              Job Jackey
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              className="hidden md:block text-sm font-medium transition-colors hover:text-primary"
              href={"/"}
            >
              Browse Jobs
            </Link>
            <Link
              className="text-sm font-medium transition-colors hover:text-primary"
              href={"/post-job"}
            >
              Post A Job
            </Link>
          </nav>
        </div>

        <NavbarActions />
      </div>
    </header>
  );
}
