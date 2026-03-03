import { Target, Zap, Clock, ThumbsUp, Database, Code2 } from 'lucide-react';
import { motion } from "framer-motion";

const features = [
    { icon: <Target className="w-6 h-6 text-primary" />, title: 'Student-Driven Innovation', text: 'Fresh perspectives with cutting-edge tech knowledge.' },
    { icon: <ThumbsUp className="w-6 h-6 text-secondary" />, title: 'Affordable Pricing', text: 'Premium quality websites without the corporate price tag.' },
    { icon: <Clock className="w-6 h-6 text-accent" />, title: 'Fast Delivery', text: 'Rapid development cycles ensuring you go live quickly.' },
    { icon: <Code2 className="w-6 h-6 text-neonBlue" />, title: 'Modern UI/UX Design', text: 'Conversion-focused, beautiful layouts tailored to your brand.' },
    { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: 'SEO Optimized', text: 'Built with best practices so you rank higher on Google.' },
    { icon: <Database className="w-6 h-6 text-green-400" />, title: 'Secure & Scalable', text: 'Architecture built to handle growth and protect data.' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const WhyChoose = () => {
    return (
        <section className="relative py-24 bg-darkBlue overflow-hidden">

            {/* Subtle Floating Code Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.span
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute top-10 left-10 text-white/5 text-6xl font-mono"
                >
                    {'{ }'}
                </motion.span>

                <motion.span
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 18, repeat: Infinity }}
                    className="absolute bottom-20 right-20 text-white/5 text-5xl font-mono"
                >
                    {'</>'}
                </motion.span>

                <motion.span
                    animate={{ y: [0, -25, 0] }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute top-1/3 left-1/4 text-white/5 text-4xl font-mono"
                >
                    const
                </motion.span>

                <motion.span
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute bottom-1/4 left-1/3 text-white/5 text-5xl font-mono"
                >
                    function()
                </motion.span>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* LEFT SIDE */}
                    <div className="md:w-1/2">

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6"
                        >
                            Why Choose <span className="text-gradient">LP Nexus?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-slate-400 mb-8 leading-relaxed"
                        >
                            We started as passionate college students and evolved into a specialized web development agency.
                            We understand startup budgets and business goals, providing unmatched value and ongoing support.
                        </motion.p>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {features.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    whileHover={{ y: -6 }}
                                    className="flex items-start p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(79,70,229,0.25)] transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 mt-1 bg-white/5 p-2 rounded-lg border border-white/10">
                                        {item.icon}
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-white mb-1 tracking-wide">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 w-full"
                    >
                        <div className="relative rounded-2xl overflow-hidden glass-panel p-2 shadow-[0_0_40px_rgba(79,70,229,0.25)]">
                            <div className="aspect-video bg-gradient-to-br from-primary/20 via-black to-accent/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                                <div className="text-center relative z-10 p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10">
                                    <h3 className="text-2xl font-bold text-white mb-2">Ongoing Support</h3>
                                    <p className="text-slate-300">We don't just build. We help you grow.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyChoose;