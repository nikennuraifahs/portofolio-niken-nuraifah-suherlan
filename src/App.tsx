import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Tentang Saya */}
        <About />

        {/* 3. Project Pilihan */}
        <Projects />

        {/* 4. Pengalaman */}
        <Experience />

        {/* 5. Pendidikan & Sertifikasi */}
        <EducationCertifications />

        {/* 6. Kontak */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

