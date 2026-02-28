import { Rocket, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="md:col-span-1">
                        <div className="flex items-center mb-6">
                            <Rocket className="h-8 w-8 text-primary mr-2" />
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                LP Nexus
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            We turn your ideas into powerful digital experiences. A student-led web development startup specializing in high-quality websites and applications.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all"><Github className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-slate-400 hover:text-primary transition-colors text-sm">Home</a></li>
                            <li><a href="#about" className="text-slate-400 hover:text-primary transition-colors text-sm">About Us</a></li>
                            <li><a href="#portfolio" className="text-slate-400 hover:text-primary transition-colors text-sm">Portfolio</a></li>
                            <li><a href="#pricing" className="text-slate-400 hover:text-primary transition-colors text-sm">Pricing Plans</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-primary transition-colors text-sm">Contact Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#services" className="text-slate-400 hover:text-secondary transition-colors text-sm">Portfolio Websites</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-secondary transition-colors text-sm">Business Websites</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-secondary transition-colors text-sm">E-Commerce Stores</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-secondary transition-colors text-sm">Payment Gateway Integrations</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-secondary transition-colors text-sm">Custom Full Stack Apps</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Subscribe</h4>
                        <p className="text-slate-400 text-sm mb-4">Stay updated with our latest offers and web development tips.</p>
                        <form className="flex rounded-md overflow-hidden" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email address" className="bg-white/5 border-none focus:ring-0 px-4 py-2 w-full text-white text-sm outline-none" />
                            <button type="submit" className="bg-primary text-white px-4 py-2 text-sm font-bold hover:bg-indigo-500 transition-colors">Subscribe</button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-slate-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} LP Nexus. All Rights Reserved.
                    </p>
                    <div className="text-slate-500 text-xs max-w-lg text-right italic">
                        Disclaimer: Pricing mentioned is indicative starting price. Final prices may vary depending on exact project complexity, custom functionality, and server configuration requirements.
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
