import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = (e) => {
        if (e) e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { name: 'Home', href: '#home', onClick: scrollToTop },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darkBlue/90 backdrop-blur-md py-3 shadow-lg shadow-primary/10' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <button onClick={scrollToTop} className="flex items-center group cursor-pointer">
                        <Rocket className="h-8 w-8 text-primary mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:from-white group-hover:to-white transition-all duration-300">
                            LP Nexus
                        </span>
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={link.onClick}
                                className="text-slate-300 hover:text-white transition-colors text-sm font-medium tracking-wide hover:text-shadow-glow"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button onClick={scrollToTop} className="bg-primary hover:bg-indigo-500 text-white px-5 py-2 rounded-full font-medium transition-all hover:shadow-[0_0_15px_rgba(79,70,229,0.5)] active:scale-95">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-300 hover:text-white"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-panel absolute top-full left-0 w-full animate-fade-in-up">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    if (link.onClick) link.onClick(e);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                scrollToTop();
                                setIsMobileMenuOpen(false);
                            }}
                            className="block w-full text-center mt-4 bg-primary text-white px-5 py-3 rounded-md font-medium"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
