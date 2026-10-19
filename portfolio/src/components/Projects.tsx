import ProjectCard from './ProjectCard';

const projects = [
   { 
        number: "01",
        title: "UrbanNest Hospitality Analytics",
        description: "Exploratory data analysis and predictive modeling using hotes booking demand data.",
        technologies: ["Python", "Pandas", "SQL", "Scikit-Learn"]
    },
    {
        number: "02",
        title: "URL Threat Detection",
        description: "A machine learning system for classifying URLs as benign or potentially malicious.",
        technologies: ["Python", "Pandas" , "FastAPI"]
    },
    {
        number: "03",
        title: "Student Management System",
        description: "A full-stack application for managing students, courses, and academic records.",
        technologies: ["React", "TypeScript" , "FastAPI", "PostgreSQL"]
    }
];

function Projects() {
    return(
        <section 
        id="projects"
        className='border-t border-zinc-800 bg-zinc-950 px-6 py-24 text-white'>
            <div className='mx-auto max-w-7xl'>
                <div className='mb-12'>
                    <p className='text-sm tracking-[0.3em] text-cyan-400'>
                        SELECTED WORK
                    </p>
                    <h2 className="mt-3 text-4xl font-bold sm:text">
                        Projects
                    </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard 
                        key={project.number}{...project}
                        />
                        
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Projects;