import { Briefcase, Monitor, ShoppingBag, CreditCard, Stethoscope, Layers, ArrowRight } from 'lucide-react';

const serviceData = [
    {
        icon: <Briefcase className="w-8 h-8 text-secondary mb-4" />,
        title: 'Portfolio Websites',
        description: 'Build a strong personal brand with a modern, fast, and fully responsive portfolio tailored to your profession.',
    },
    {
        icon: <Monitor className="w-8 h-8 text-primary mb-4" />,
        title: 'Business Websites',
        description: 'Corporate websites designed to establish credibility, capture leads, and display your services professionally.',
    },
    {
        icon: <ShoppingBag className="w-8 h-8 text-accent mb-4" />,
        title: 'E-Commerce Stores',
        description: 'Fully functional online stores with secure checkout, inventory management, and beautiful product displays.',
    },
    {
        icon: <CreditCard className="w-8 h-8 text-neonBlue mb-4" />,
        title: 'Payment Integrations',
        description: 'Seamless integration of Stripe, Razorpay, or PayPal to securely accept payments from customers worldwide.',
    },
    {
        icon: <Stethoscope className="w-8 h-8 text-green-400 mb-4" />,
        title: 'Appointment Systems',
        description: 'Automated booking systems perfect for dentists, clinics, and consultants to manage their schedules easily.',
    },
    {
        icon: <Layers className="w-8 h-8 text-purple-400 mb-4" />,
        title: 'Custom Web Apps',
        description: 'Scalable full-stack applications with databases, authentication, and custom logic tailored to your needs.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative z-10 bg-gradient-to-b from-transparent to-darkBlue block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Core Services</span></h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        We provide end-to-end web solutions to help you scale your business, increase sales, and establish a dominant online presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceData.map((service, idx) => (
                        <div key={idx} className="glass-panel p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(79,70,229,0.2)] hover:border-primary/50 group">
                            {service.icon}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <a href="#contact" className="inline-flex items-center text-primary font-medium group-hover:text-neonBlue transition-colors">
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
