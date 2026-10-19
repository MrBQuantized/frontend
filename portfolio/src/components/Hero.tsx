
function Hero() {
    return (
        <section id="home" className="relative-flex min-h-screen items-center overflow-hidden bg-zinc-850 px-6 pt-24 text-white">
            {/* Background glow */}
            <div className="absolute left-1/2 top-1/3 z-0 h-100 w-100-translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"/>

            <div className="relative z-10 mx-auto w-full max-w-7xl">
                <p className="mb-6 text-sm font-medium tracking-[0.3em] text-cyan-400">
                    PHYSICS • ELECTRONICS • AI
                </p>

                <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                    I build 
                    <br />
                    <span className="text-zinc-500">intelligent systems.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                    Physics graduate buidling at the intersection of software engineering, data science, 
                    artificial intelligence, and hardware.
                </p>
                
                <div className="mt-10 flex flex-wrap gap-4">
                    <a href="#projects" className="rounded-md bg-cyan-400 px-6 py-3 font-medium text-zinc-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0,25)]">
                        View projects →
                    </a>
        
                    <a href="#contact" className="rounded-md border border-zinc-700 px-6 py-3 font-medium text-zinc-200 transition-all duration-300 hover:border-cyan-200 hover:text-cyan-400">
                        Get in Touch →
                    </a>
                </div>
            
                <div className="mt-12 flex gap-6 text-sm text-zinc-500">
                    <a href="#" className="transition-colors hover:text-cyan-400"> 
                    GitHub
                    </a>
                    <a href="#" className="transition-colors hover:text-cyan-400"> 
                    LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}


export default Hero;