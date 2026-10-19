function About() {
    return (
        <section 
        id="about" 
        className="border-t border-zinc-800, bg-zinc-950 px-6 py-24 text-white">

            <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
                <div>
                    <p className="mb-4 text-sm tracking-[0.3em] text-cyan-400">
                        ABOUT ME
                    </p>
                    <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                        From physical systems to intelligent systems.
                    </h2>
                    <div className="mt-5 space-y-5 text-zinc-500">
                        <p>
                            I'm a physics graduate building at the intersection of physics, electronics, software engineering, datascience , and artificial intelligence.
                        </p>

                        <p>
                            My goal is to understand systems from the underlying mathematics and physical principles all the way to the software and hardware that make intelligent applications possible.
                        </p>

                        <p>
                            I'm currently focused on Python, JavaScript, Typescript,  React, backend engineering, machine-learning, and AI systems with a long-term focus on Edge AI.
                        </p>

                    </div>
                </div>
            </div>


        </section>
    )
};

export default About;