function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-shadow-white"
        >
          BO.
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#home"
            className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="text-2xl text-zinc-300 md:hidden"
          aria-label="Open navigation"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
