import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-background min-h-screen text-slate-200 selection:bg-primary/50 selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <WhyChoose />
                <Portfolio />
                <About />
                <Pricing />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
