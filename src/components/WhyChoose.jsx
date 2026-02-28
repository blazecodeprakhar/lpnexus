import { Target, Zap, Clock, ThumbsUp, Database, Code2 } from 'lucide-react';

const features = [
    { icon: <Target className="w-6 h-6 text-primary" />, title: 'Student-Driven Innovation', text: 'Fresh perspectives with cutting-edge tech knowledge.' },
    { icon: <ThumbsUp className="w-6 h-6 text-secondary" />, title: 'Affordable Pricing', text: 'Premium quality websites without the corporate price tag.' },
    { icon: <Clock className="w-6 h-6 text-accent" />, title: 'Fast Delivery', text: 'Rapid development cycles ensuring you go live quickly.' },
    { icon: <Code2 className="w-6 h-6 text-neonBlue" />, title: 'Modern UI/UX Design', text: 'Conversion-focused, beautiful layouts tailored to your brand.' },
    { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: 'SEO Optimized', text: 'Built with best practices so you rank higher on Google.' },
    { icon: <Database className="w-6 h-6 text-green-400" />, title: 'Secure & Scalable', text: 'Architecture built to handle growth and protect data.' },
];

const WhyChoose = () => {
    return (
        <section className="py-24 relative z-10 bg-darkBlue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose <span className="text-gradient">LP Nexus?</span></h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            We started as passionate college students and evolved into a specialized web development agency.
                            We understand startup budgets and business goals, providing unmatched value and ongoing support.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 bg-white/5 p-2 rounded-lg border border-white/10">
                                        {item.icon}
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-white mb-1 tracking-wide">{item.title}</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <div className="relative rounded-2xl overflow-hidden glass-panel p-2 shadow-[0_0_50px_rgba(79,70,229,0.3)]">
                            {/* Optional: Add a real team image or abstract 3D graphic. Using a gradient placeholder with tech icons for now */}
                            <div className="aspect-video bg-gradient-to-br from-primary/20 via-black to-accent/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                                <div className="text-center relative z-10 p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10">
                                    <h3 className="text-2xl font-bold text-white mb-2">Ongoing Support</h3>
                                    <p className="text-slate-300">We don't just build. We help you grow.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
