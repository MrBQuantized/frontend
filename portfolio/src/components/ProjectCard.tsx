interface Props {
    number: string;
    title: string;
    description: string;
    technologies: string[];
};

function ProjectCard({
    number,
    title,
    description,
    technologies,
}: Props) {

    return (
        <article className="group flex min-h-[360px] flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-3 hover:border-cyan-300/50 hover:bg-zinc-900/70">
            <span className="text-sm text-zinc-600">{number}</span>
            <h3 className="mt-6 text-2xl font-emibold text-white">
                {title}
            </h3>

            <p className="mt-4 leading-relaxed text-zinc-400">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span key={technology} 
                    className="rounded-md border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400 transition-colors group-l hover: border-zinc-600">
                        {technology}
                    </span>
                ))}
            </div>

            <a
            href="#"
            className="mt-auto pt-8 text-sm font-medium text-zinc-300 transition-colors hover:text-cyan-400">
            </a>
                View Project →
        </article>
    )
}

export default ProjectCard;