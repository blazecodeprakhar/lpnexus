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

    // Locking body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

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
        <>
            {/* Backdrop for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-darkBlue/90 backdrop-blur-md py-3 shadow-lg shadow-primary/10' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <button onClick={scrollToTop} className="flex items-center group cursor-pointer relative z-50">
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
                        <div className="md:hidden flex items-center relative z-50">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-slate-300 hover:text-white p-2 transition-colors focus:outline-none"
                                aria-label="Toggle Menu"
                            >
                                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav Menu */}
                <div className={`md:hidden absolute top-full left-0 w-full glass-panel border-t border-white/5 transition-all duration-500 origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                    <div className="px-6 py-8 space-y-4">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    if (link.onClick) link.onClick(e);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`block px-4 py-3 text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 border border-transparent hover:border-white/10 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                scrollToTop();
                                setIsMobileMenuOpen(false);
                            }}
                            className={`block w-full text-center mt-6 bg-primary text-white px-5 py-4 rounded-xl font-bold transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                            style={{ transitionDelay: `${navLinks.length * 50}ms` }}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
