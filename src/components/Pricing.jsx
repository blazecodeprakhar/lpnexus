import { Check, X } from 'lucide-react';

const pricingPlans = [
    {
        name: 'Single Page Website',
        target: 'HTML / CSS / React',
        price: '₹500 – ₹1000',
        features: [
            'Simple Landing Page',
            'Portfolio Website',
            'React Version Available',
            'Responsive Design'
        ],
        optional: [],
        disabled: [],
        popular: false,
        color: 'from-slate-600 to-slate-800',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Static Multi-Page Website',
        target: 'HTML / CSS / React',
        price: '₹1000 – ₹2000',
        features: [
            'Informational Website',
            'Multiple Static Pages',
            'Responsive Layout',
            'Basic SEO Setup'
        ],
        optional: [],
        disabled: [],
        popular: false,
        color: 'from-primary to-accent',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Custom Front-End Development',
        target: 'React / Vue / Angular',
        price: '₹2500 – ₹8000',
        features: [
            'Modern Dynamic SPA',
            'Clean UI Design',
            'Responsive Design',
            'Component-Based Architecture'
        ],
        optional: [],
        disabled: [],
        popular: true,
        color: 'from-secondary to-purple-600',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Full-Stack Web Application',
        target: 'Frontend + Backend',
        price: '₹6000 – ₹10,000',
        features: [
            'Frontend + Backend Development',
            'Database Integration',
            'User Authentication',
            'Deployment Support'
        ],
        optional: [],
        disabled: [],
        popular: false,
        color: 'from-darkBlue to-black border border-white/20',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'E-Commerce Website',
        target: 'Custom / Shopify',
        price: '₹5000 – ₹15,000',
        features: [
            'Online Store Setup',
            'Product Management',
            'Payment Gateway Integration',
            'Order Management System'
        ],
        optional: [],
        disabled: [],
        popular: false,
        color: 'from-pink-600 to-red-600',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },

    {
        name: 'Web Apps with Database',
        target: 'SQL / NoSQL',
        price: '₹5000 – ₹15,000',
        features: [
            'Dynamic Web Applications',
            'Database Integration',
            'Complex Queries Handling',
            'Scalable Architecture'
        ],
        optional: [],
        disabled: [],
        popular: false,
        color: 'from-indigo-600 to-blue-600',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 relative z-10 bg-gradient-to-t from-black to-darkBlue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Transparent <span className="text-gradient">Pricing</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Prices may vary depending on the complexity and features of the project.
                        <br />
                    </p>
                </div>

                {/* GRID UPDATED TO 3 COLUMNS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, idx) => (
                        <div key={idx} className={`group relative rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(79,70,229,0.2)] ${plan.popular ? 'bg-gradient-to-b from-primary to-accent shadow-[0_0_30px_rgba(79,70,229,0.3)] transform -translate-y-2' : 'hover:bg-gradient-to-br hover:from-white/20 hover:to-transparent'}`}>

                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide z-20 shadow-[0_0_20px_rgba(79,70,229,0.5)] animate-pulse">
                                    Most Popular
                                </div>
                            )}

                            <div className="bg-darkBlue rounded-3xl h-full flex flex-col glass-panel overflow-hidden relative z-10 transition-colors duration-500 group-hover:bg-[#080b18]">

                                {/* Image Container */}
                                <div className="h-48 w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-darkBlue via-transparent to-transparent z-10" />
                                    <img
                                        src={plan.image}
                                        alt={plan.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 uppercase tracking-widest">
                                            {plan.target.split('/')[0]}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow relative z-10 -mt-10">
                                    <div className="mb-6">
                                        <div className="text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-primary">
                                            {plan.name}
                                        </div>
                                        <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-4 transition-all duration-300 group-hover:from-white group-hover:to-white">
                                            {plan.price}
                                        </div>
                                    </div>

                                    <div className="flex-grow space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-start text-slate-300 text-sm group-hover:text-white transition-colors duration-300">
                                                <Check className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}

                                        {plan.optional.map((opt, i) => (
                                            <div key={i} className="flex items-start text-slate-400 text-sm italic">
                                                <Check className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                <span>{opt}</span>
                                            </div>
                                        ))}

                                        {plan.disabled.map((item, i) => (
                                            <div key={i} className="flex items-start text-slate-500 text-sm line-through">
                                                <X className="w-5 h-5 text-slate-600 mr-2 flex-shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href={`https://wa.me/918901028029?text=${encodeURIComponent(`Hi LP Nexus, I am interested in the *${plan.name}* package priced at *${plan.price}*. Can we discuss this project?`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`mt-8 w-full block text-center py-3 px-6 rounded-lg font-bold transition-all duration-300 hover:scale-[1.02] ${plan.popular
                                            ? 'bg-primary text-white hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                                            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20'
                                            }`}
                                    >
                                        Choose Plan
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Pricing;