import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formSubmitData = new FormData(e.target);
        formSubmitData.append("access_key", "39a6330d-9cd9-4de2-9046-50241723e0e2");

        // Customizing the email received
        formSubmitData.append("subject", `New Project Inquiry: ${formData.projectType || 'General'} from ${formData.name}`);
        formSubmitData.append("from_name", "LP Nexus Website Portal");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formSubmitData
            });

            const data = await response.json();
            if (data.success) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                alert("Error sending message. Please try again later.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong! Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 relative z-10 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Build Your <span className="text-gradient">Website Today</span></h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Ready to start your project? We're here to help you turn your idea into an amazing digital experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

                        <div className="glass-panel p-6 rounded-2xl flex items-start group hover:-translate-y-1 transition-transform border border-white/5">
                            <div className="bg-primary/20 p-4 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="ml-6 flex-grow">
                                <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                                <p className="text-slate-400">hello@lpnexus.com</p>
                            </div>
                        </div>

                        <div className="glass-panel p-6 rounded-2xl flex items-start group hover:-translate-y-1 transition-transform border border-white/5">
                            <div className="bg-green-500/20 p-4 rounded-xl text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div className="ml-6 flex-grow">
                                <h4 className="text-lg font-bold text-white mb-1">WhatsApp / Call</h4>
                                <p className="text-slate-400">+91 98765 43210</p>
                                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-sm text-green-400 mt-2 inline-block hover:underline font-semibold">
                                    Chat on WhatsApp &rarr;
                                </a>
                            </div>
                        </div>

                        <div className="glass-panel p-6 rounded-2xl flex items-start group hover:-translate-y-1 transition-transform border border-white/5">
                            <div className="bg-accent/20 p-4 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div className="ml-6 flex-grow">
                                <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                                <p className="text-slate-400">India-Based Tech Startup <br /> Operating Globally 🌍</p>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl relative">
                        <h3 className="text-2xl font-bold text-white mb-8">Ready to Start?</h3>

                        {submitted ? (
                            <div className="bg-green-500/10 border border-green-500/50 p-6 rounded-xl text-center animate-fade-in-up">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send className="text-white w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                                <p className="text-green-200">Thanks for reaching out. We will get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                                        <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="+91 00000 00000" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Project Type</label>
                                        <select required name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-[#1a1b26] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer">
                                            <option value="" disabled hidden>Select a project</option>
                                            <option value="portfolio">Portfolio Website</option>
                                            <option value="business">Business Website</option>
                                            <option value="ecommerce">E-Commerce Store</option>
                                            <option value="appointment">Appointment System</option>
                                            <option value="custom">Full Stack Custom App</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Estimated Budget Range</label>
                                    <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#1a1b26] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer">
                                        <option value="" disabled hidden>Select budget range</option>
                                        <option value="5k-10k">₹5,000 - ₹10,000</option>
                                        <option value="10k-25k">₹10,000 - ₹25,000</option>
                                        <option value="25k-50k">₹25,000 - ₹50,000</option>
                                        <option value="50k+">₹50,000+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                                    <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Tell us about your project..."></textarea>
                                </div>

                                <button disabled={loading} type="submit" className="w-full bg-primary hover:bg-indigo-500 text-white font-bold py-4 rounded-lg flex items-center justify-center transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] disabled:opacity-75 disabled:cursor-not-allowed">
                                    {loading ? 'Sending...' : 'Start Your Project'}
                                    {!loading && <Send className="w-5 h-5 ml-2" />}
                                </button>
                            </form>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
