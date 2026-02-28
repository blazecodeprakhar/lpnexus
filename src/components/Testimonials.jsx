import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Rahul Sharma',
        role: 'Founder, Sharma Solutions',
        text: 'LP Nexus transformed our online presence. They understood our tight startup budget and delivered a multi-page business website that looks like it cost 10x more.',
        rating: 5,
    },
    {
        name: 'Priya Mehra',
        role: 'Dentist, Smile Care',
        text: 'I needed a simple but effective booking system for my clinic. The student team was fast, professional, and delivered a highly functional booking portal.',
        rating: 5,
    },
    {
        name: 'Aman Gupta',
        role: 'Freelance Consultant',
        text: 'Outstanding portfolio design! The team was highly responsive, integrated all my feedback seamlessly, and completed it within just one week. Highly recommended.',
        rating: 5,
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 relative z-10 bg-gradient-to-b from-darkBlue to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Client <span className="text-gradient">Success Stories</span></h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our early clients say about working with LP Nexus.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <Quote className="absolute top-4 right-4 text-white/5 w-24 h-24 transform rotate-12 -z-10 group-hover:scale-110 transition-transform" />

                            <div className="flex text-yellow-500 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="fill-current w-5 h-5" />
                                ))}
                            </div>

                            <p className="text-slate-300 italic mb-8 relative z-10 text-lg">"{testimonial.text}"</p>

                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg border border-white/20">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
