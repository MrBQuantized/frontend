import { use, useEffect, useState } from "react";





function PhysicsLab() {

    const [angle, setAngle] = useState(0);
    const [running, setRunning] = useState(true);

    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => {
            setAngle((currentAngle) => (currentAngle + 2) % 360);
        }, 30);

        return () => clearInterval(interval);
    }, [running]);

    const x = Math.cos((angle * Math.PI) / 180) * 128;
    const y = Math.cos((angle * Math.PI) / 180) * 128;


  return (
    <section
      id="physics"
      className="relative overflow-hidden border-t border-zinc-800 bg-black px-6 py-28 text-white"
    >
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] text-cyan-400">
            PHYSICS LAB
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Where physics meets code.
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-400">
            A space for experiments, simulations, and interactive
            visualizations connecting physical principles with computation.
          </p>
        </div>

        {/* Experiment */}
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Simulation area */}
          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Orbit */}
            <div className="relative h-64 w-64 rounded-full border border-zinc-700">
              {/* Planet */}
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 shadow-[0_0_60px_rgba(34,211,238,0.2)]" />

              {/* Orbiting object */}
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" 
              style={{
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
              />
            </div>

            {/* Labels */}
            <span className="absolute left-6 top-6 text-xs tracking-widest text-zinc-600">
              SIMULATION_01
            </span>

            <span className="absolute bottom-6 right-6 text-xs text-zinc-600">
              ORBITAL SYSTEM
            </span>
          </div>

          {/* Information panel */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-xs tracking-[0.25em] text-zinc-600">
              CURRENT EXPERIMENT
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Orbital Motion
            </h3>

            <p className="mt-4 leading-relaxed text-zinc-400">
              Exploring how mathematical models can be translated into
              interactive computational systems.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-sm text-zinc-500">Velocity</span>
                <span className="font-mono text-cyan-400">7.82 km/s</span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-sm text-zinc-500">Altitude</span>
                <span className="font-mono text-cyan-400">400 km</span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-sm text-zinc-500">Period</span>
                <span className="font-mono text-cyan-400">92.6 min</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setRunning((current) => !current)}
              className="mt-8 w-full rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
                {running ? "Pause Experiment" : "Run Experiment"} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhysicsLab;