import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, Lock, Settings, Clock, Briefcase, KeyRound, Menu, X } from 'lucide-react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <main className="text-slate-100 bg-[#0E1B2A] min-h-screen font-inter">
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 z-50 bg-[#0E1B2A]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-400 cursor-pointer" onClick={() => scrollToSection('hero')}>
            aclaud
          </div>
          <div className="hidden md:flex space-x-8 text-slate-300">
            {['about', 'services', 'process', 'why', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-blue-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-slate-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 px-6 pb-6 text-slate-300 bg-[#0E1B2A] border-t border-slate-800">
            {['about', 'services', 'process', 'why', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left hover:text-blue-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-[#0E1B2A] to-[#11263A]">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Secure. Scalable. Cloud-Ready.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        >
          Aclaud Technologies helps startups and growing businesses build trust in the cloud through expert engineering, security, and compliance consulting.
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={() => scrollToSection('contact')} className="bg-[#1E90FF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition">Schedule Discovery Call</button>
          <button onClick={() => scrollToSection('services')} className="border border-blue-400 text-blue-300 px-6 py-3 rounded-xl font-semibold hover:bg-blue-900/30 transition">Request Capabilities Deck</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Trusted Cloud & Security Expertise for Modern Startups</h2>
        <p className="text-slate-300 max-w-3xl mx-auto mb-10">
          Aclaud Technologies LLC is a team of experienced software professionals specializing in <span className="text-blue-400">cloud security</span>, <span className="text-blue-400">compliance</span>, and <span className="text-blue-400">large-scale distributed systems</span>. We partner with startups and scaling companies to architect secure, high-availability platforms — combining enterprise-level rigor with startup agility.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-slate-300">
          <span>🛡️ Security-First Design</span>
          <span>☁️ Multi-Cloud Expertise</span>
          <span>🔒 SOC 2 & ISO 27001</span>
          <span>⚙️ Compliance Automation</span>
          <span>🚀 Startup-Speed Delivery</span>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#11263A] px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Cloud, title: 'Cloud Architecture Review', desc: 'Design and assess scalable, secure cloud infrastructure for AWS, Azure, and GCP.' },
            { icon: Shield, title: 'Security & Compliance Advisory', desc: 'Build risk frameworks and audit readiness for SOC 2, ISO 27001, and GDPR.' },
            { icon: Settings, title: 'DevSecOps & Automation', desc: 'Automate security controls, identity, and deployment guardrails across environments.' },
            { icon: Lock, title: 'Fractional Security Leadership', desc: 'Part-time or project-based CISO-level guidance without full-time overhead.' },
          ].map((service, i) => (
            <motion.div key={i} className="bg-[#0E1B2A] p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-blue-400 transition" whileHover={{ scale: 1.03 }}>
              <service.icon className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-[#0E1B2A] py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">How We Work</h2>
        <p className="text-slate-300 mb-10 max-w-3xl mx-auto">Transparent process. Clear deliverables. Confidential execution.</p>
        <div className="flex flex-wrap justify-center gap-4 text-slate-200 text-sm">
          {['Discovery Call', 'Mutual NDA', 'Technical & Risk Assessment', 'Action Plan & Delivery', 'Ongoing Partnership'].map((step, i) => (
            <span key={i} className="px-4 py-2 bg-[#11263A] rounded-full border border-slate-700">{i + 1}. {step}</span>
          ))}
        </div>
      </section>

      {/* Why Aclaud */}
      <section id="why" className="py-24 px-6 bg-[#11263A] text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Aclaud Technologies?</h2>
        <ul className="max-w-3xl mx-auto text-left text-slate-300 list-disc list-inside space-y-2">
          <li>Deep technical expertise across leading cloud providers</li>
          <li>Decades of combined experience in large-scale distributed systems</li>
          <li>Proven frameworks for compliance and trust readiness</li>
          <li>Flexible engagement models for startups and mid-sized teams</li>
          <li>Trusted by founders and investors to de-risk cloud operations</li>
        </ul>
        <p className="italic text-slate-400 mt-8">“Security and scalability are not opposites — they’re both outcomes of sound engineering.”</p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Cloud Trust Together</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Preparing for SOC 2, scaling your infrastructure, or seeking strategic security guidance? Our team is ready to help.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="mailto:info@aclaud.com" className="bg-[#1E90FF] px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition">Email Us</a>
          <a href="#" className="border border-blue-400 text-blue-300 px-6 py-3 rounded-xl font-semibold hover:bg-blue-900/30 transition">Request NDA & Proposal</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400 text-sm border-t border-slate-800">
        © 2025 Aclaud Technologies LLC | All Rights Reserved | info@aclaud.com | aclaud.com
      </footer>
    </main>
  );
}
