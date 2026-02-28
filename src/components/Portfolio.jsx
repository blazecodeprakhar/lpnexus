import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Dentist Appointment System',
        category: 'Full Stack App',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tech: ['React', 'Node.js', 'MongoDB'],
        desc: 'A complete booking system with calendar integration and automated reminders.'
    },
    {
        title: 'Trendy E-Commerce Store',
        category: 'E-Commerce',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tech: ['Next.js', 'Stripe', 'Tailwind'],
        desc: 'High-conversion storefront for a fashion brand featuring a seamless checkout.'
    },
    {
        title: 'Creative Portfolio',
        category: 'Portfolio Website',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tech: ['React', 'Framer Motion'],
        desc: 'An immersive 3D-like personal portfolio with stunning scroll animations.'
    },
    {
        title: 'SAAS Landing Page',
        category: 'Startup Landing Page',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tech: ['React', 'Tailwind', 'Vite'],
        desc: 'High-performance landing page optimized for lead generation and speed.'
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 relative z-10 bg-darkBlue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Work</span></h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Take a look at some of the digital experiences we've engineered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group relative rounded-2xl overflow-hidden glass-panel flex flex-col hover:-translate-y-2 transition-transform duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-darkBlue via-darkBlue/50 to-transparent opacity-90"></div>

                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-8 -mt-16 relative z-10 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 mb-4 flex-grow">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a href="#portfolio" className="inline-flex items-center text-white hover:text-neonBlue transition-colors font-medium">
                                    View Case Study <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
