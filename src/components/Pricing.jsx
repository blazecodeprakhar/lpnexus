import { Check, X } from 'lucide-react';

const pricingPlans = [
    {
        name: 'Basic Package',
        target: 'Starter Portfolio',
        price: '₹4,999 - ₹7,999',
        features: ['3-5 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO'],
        optional: ['Domain setup (+₹1K)', 'Hosting setup (+₹1.5K)'],
        disabled: ['Admin Panel', 'E-Commerce', 'Custom API'],
        popular: false,
        color: 'from-slate-600 to-slate-800'
    },
    {
        name: 'Professional',
        target: 'Business Package',
        price: '₹12,000 - ₹25,000',
        features: ['5-10 Pages', 'Custom UI', 'Domain Setup (1yr)', 'Hosting Guidance', 'SEO Optimized', 'WhatsApp Integration', 'Admin Panel (Basic)'],
        optional: [],
        disabled: ['E-Commerce Features', 'Complex Authentication'],
        popular: true,
        color: 'from-primary to-accent'
    },
    {
        name: 'E-Commerce',
        target: 'Online Stores',
        price: '₹25,000 - ₹45,000',
        features: ['Product Listing', 'Cart + Checkout', 'Razorpay/Stripe Setup', 'Admin Dashboard', 'Order Management'],
        optional: [],
        disabled: ['Custom Business Logic outside E-Comm'],
        popular: false,
        color: 'from-secondary to-purple-600'
    },
    {
        name: 'Full Stack',
        target: 'Custom Web App',
        price: '₹40k - ₹1.5L+',
        features: ['Authentication System', 'Database Integration', 'API Development', 'Role-based Dashboard', 'Custom Logic & Payments', 'Deployment Support'],
        optional: [],
        disabled: [],
        popular: false,
        color: 'from-darkBlue to-black border border-white/20'
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 relative z-10 bg-gradient-to-t from-black to-darkBlue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparent <span className="text-gradient">Pricing</span></h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Affordable solutions designed to scale. Choose a package that fits your goals and budget.
                        <br /><span className="text-sm italic text-slate-500">*Final pricing depends on complexity and features.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pricingPlans.map((plan, idx) => (
                        <div key={idx} className={`relative rounded-3xl p-[1px] ${plan.popular ? 'bg-gradient-to-b from-primary to-accent shadow-[0_0_30px_rgba(79,70,229,0.3)] transform -translate-y-2' : ''}`}>

                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide z-10 shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="bg-darkBlue rounded-3xl h-full p-8 flex flex-col glass-panel">
                                <div className="mb-6">
                                    <h3 className="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-2">{plan.target}</h3>
                                    <div className="text-2xl font-bold text-white mb-2">{plan.name}</div>
                                    <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-4">{plan.price}</div>
                                </div>

                                <div className="flex-grow space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start text-slate-300 text-sm">
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

                                <a href="#contact" className={`mt-8 w-full block text-center py-3 px-6 rounded-lg font-bold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-indigo-500 hover:shadow-lg' : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'}`}>
                                    Choose Plan
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Pricing;
