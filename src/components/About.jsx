import { BookOpen, Users, Rocket } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative z-10 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-primary/20 to-secondary/10 p-6 rounded-2xl glass-panel border border-white/5 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform">
                                <Users className="w-10 h-10 text-primary mb-3" />
                                <h4 className="text-xl font-bold text-white mb-1">Student Led</h4>
                                <p className="text-sm text-slate-400">Driven by passion & innovation</p>
                            </div>
                            <div className="bg-gradient-to-tr from-accent/20 to-primary/10 p-6 rounded-2xl glass-panel border border-white/5 flex flex-col items-center justify-center text-center mt-8 transform hover:scale-105 transition-transform">
                                <Rocket className="w-10 h-10 text-accent mb-3" />
                                <h4 className="text-xl font-bold text-white mb-1">Startup Spirit</h4>
                                <p className="text-sm text-slate-400">Agile, fast, and scalable</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                            <BookOpen className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-medium tracking-wide text-gray-300">Our Story</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Built by ambitious minds, <span className="text-gradient">for ambitious goals.</span>
                        </h2>

                        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                            <strong className="text-white">LP Nexus</strong> is built by passionate college students who believe in innovation, affordability, and real-world impact. We started our journey combining our technical expertise to build real solutions for real businesses, rather than just academic projects.
                        </p>

                        <div className="space-y-6">
                            <div className="border-l-4 border-primary pl-4">
                                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                                <p className="text-slate-400">To empower individuals and small businesses with powerful digital tools that level the playing field against corporate giants.</p>
                            </div>

                            <div className="border-l-4 border-secondary pl-4">
                                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                                <p className="text-slate-400">To provide affordable, scalable, and beautifully designed web solutions that drive real business growth without compromising on quality.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
