import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full px-8 md:px-16 lg:px-24 pt-8 pb-12 flex justify-between items-center">
      <Link href="/" className="group flex items-center gap-3 hover:opacity-80 transition-opacity">
        {/* Monogram FE Logo */}
        <div className="relative flex items-center justify-center w-8 h-8 font-serif text-2xl leading-none text-main">
          <span className="absolute top-0 -translate-x-1.5">F</span>
          <span className="absolute top-[0.4rem] translate-x-1.5">E</span>
        </div>
        <span className="text-sm font-medium tracking-[0.2em] uppercase text-main mt-1 hidden sm:block">
          Freda Efod
        </span>
      </Link>

      <div className="flex items-center gap-6">
        <nav aria-label="Primary Navigation" className="hidden sm:block">
          <ul className="flex items-center gap-5 text-sm text-muted">
            <li>
              <a href="#work" className="hover:text-main transition-colors">Work</a>
            </li>
            <li>
              <a href="#what-i-do" className="hover:text-main transition-colors">Services</a>
            </li>
            <li>
              <a href="#about" className="hover:text-main transition-colors">About</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-main transition-colors">FAQ</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-main transition-colors">Contact</a>
            </li>
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
