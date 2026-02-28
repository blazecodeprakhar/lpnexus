import { ArrowRight, Code2 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Subtle Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] md:top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/30 rounded-full blur-[120px] animate-blob mix-blend-screen opacity-70"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen opacity-50"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen opacity-40"></div>

                {/* Grid overlay for tech feel */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDAuNWg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wLjUgMGwwIDQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGZpbGw9Im5vbmUiLz4KPC9zdmc+')] opacity-50 z-0"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <Code2 className="w-4 h-4 text-neonBlue" />
                    <span className="text-sm font-medium tracking-wide text-gray-300">Empowering Startups & Businesses</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    We Build Powerful <br className="hidden md:block" />
                    <span className="text-gradient drop-shadow-lg">
                        Digital Experiences
                    </span>
                </h1>

                <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    From portfolio websites to full-stack business systems — <span className="text-white font-semibold">LP Nexus</span> turns your ideas into reality with modern technologies.
                </p>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <a href="#pricing" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                        <span className="relative flex items-center">
                            Explore Packages
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>

                    <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-200 border border-white/20 glass-panel rounded-full hover:bg-white/10 hover:text-white transition-all hover:scale-105">
                        Get a Free Consultation
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;
