function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 text-zinc-500">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-zinc-300">Blessing Onoh</p>
          <p>Physics | Electronics | AI</p>
        </div>
        <div className="flex-gap-6">
          <a href="#" className="transition-colors hover:text-cyan-400">
            GitHub
          </a>
          <a href="#" className="transition-colors hover:text-cyan-400">
            LinkedIn
          </a>
        </div>

        <p>© 2026 Blessing Onoh</p>
      </div>
    </footer>
  );
}

export default Footer;
