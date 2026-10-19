function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 px-6 py-28 text-white"
    >
      {/* Background glow */}
      <div className="absolute right-[-10em] top-1/2 h-[25rem] w-[25rem] -transate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <p className="text-sm tracking-[0.3em] text-cyan-400">GET IN TOUCH</p>

        <h2 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Let's build something
          <span className="text-zinc-600">Interesting</span>
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Interested in collaborating, discussing a project, or exploring ideas
          around software, AI, physics, and intelligent systems?
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#"
            className="gorup inline-flex items-center gap-3 rounded-md bg-cyan-400 px-6 py-3 
                    font-medium text-zinc-950 transition-all duration-300 hover:bg-cyan-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                    "
          >
            Get in Touch
            <span className="transition-transform duration-300 group-hover:translation-x-1">
              →
            </span>
          </a>

          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-md bg-cyan-400 px-6 py-3 
                    font-medium text-zinc-950 transition-all duration-300 hover:bg-cyan-200
                    "
          >
            GitHub
          </a>

          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-md bg-cyan-400 px-6 py-3 
                    font-medium text-zinc-950 transition-all duration-300 hover:bg-cyan-200
                    "
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
