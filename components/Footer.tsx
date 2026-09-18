export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-8 md:px-16 lg:px-24 pt-12 pb-16 mt-16 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-subtle">
      <div>
        &copy; {currentYear} Freda. All rights reserved.
      </div>

      <ul className="flex items-center gap-6">

        <li>
          <a href="#hero" className="hover:text-main transition-colors">
            Back to top &uarr;
          </a>
        </li>
      </ul>
    </footer>
  );
}
