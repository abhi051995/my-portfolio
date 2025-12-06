import React, { useState, useEffect } from 'react';

// Single-file React portfolio for: Abhishek Choudhary

// TailwindCSS utility classes are used in the markup.

// This file is a complete, copy-paste-ready React component (default export) that

// can be used in a create-react-app, Vite React app, or deployed on Vercel/Netlify.

// The component contains: Home, About (LinkedIn About), Projects, and Contact.



const linkedInAbout = `I help companies build scalable microservices using Spring Boot, Java 17, and cloud-native architecture.\n\nI am a Senior Java Backend Engineer with 7+ years of experience delivering production-grade microservices, secure REST APIs, and cloud deployments. I specialize in microservice design, performance tuning, Docker/Kubernetes, and CI/CD. My approach is pragmatic: clean architecture, strong testing, and fast iteration. I partner with product teams to ship features reliably and maintainable systems.`;




const projects = [

  {

    name: 'Hybrid Search Service',

    desc: 'Advanced search microservice combining lexical (Solr) and semantic (Spring AI) search capabilities with query rewriting. Features core search indexing, semantic embeddings layer, hybrid result interleaving, and LLM-powered query enhancement. Built with Java 17+/18, Spring Boot, Apache Solr, and Spring AI for intelligent document retrieval.',

    repo: 'https://github.com/abhi051995/hybrid-search-service'

  }

];


export default function PortfolioApp() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (

    <div className="min-h-screen text-gray-900">

      <header className="bg-white shadow-sm sticky top-0 z-50 transition-shadow duration-300">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="animate-fadeIn">
            <h1 className="text-2xl font-bold gradient-text">Abhishek Choudhary</h1>
            <p className="text-sm text-gray-600">Senior Spring Boot Microservices Expert • Java 17 • Cloud-native</p>
          </div>
          <div className="flex gap-3 animate-slideInRight">
            <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Contact</a>
          </div>
        </div>
      </header>



      <main className="max-w-5xl mx-auto px-6 py-12 grid gap-12">

        <section 
          id="about" 
          className={`bg-white rounded-2xl p-8 shadow-sm hover-lift transition-all duration-500 ${
            visibleSections.has('about') ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="md:flex md:items-start md:gap-8">
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl animate-float shadow-lg">AC</div>
            </div>

            <div>

              <h2 className="text-xl font-semibold">About</h2>

              <p className="mt-3 whitespace-pre-line text-gray-700">{linkedInAbout}</p>



              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {/* Core Offerings */}
                <div className={`feature-card bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 ${
                  visibleSections.has('about') ? 'animate-slideInLeft' : 'opacity-0'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="icon-gradient w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Core Offerings</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Spring Boot microservice design & development',
                      'API design, security (JWT, OAuth2)',
                      'Docker, Kubernetes (EKS), CI/CD',
                      'Search integrations (Solr) & performance tuning'
                    ].map((item, index) => (
                      <li 
                        key={index}
                        className={`flex items-start gap-3 text-sm text-gray-700 ${
                          visibleSections.has('about') ? 'animate-slideUpFade' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      >
                        <svg className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How I work */}
                <div className={`feature-card bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 ${
                  visibleSections.has('about') ? 'animate-slideInRightDelay' : 'opacity-0'
                }`} style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="icon-gradient w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">How I work</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Define API contract → implement → test → deploy',
                      'Clean architecture and strong typing',
                      'Automated tests and deployment pipelines',
                      'Clear documentation & communication'
                    ].map((item, index) => (
                      <li 
                        key={index}
                        className={`flex items-start gap-3 text-sm text-gray-700 ${
                          visibleSections.has('about') ? 'animate-slideUpFade' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      >
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </section>



        <section 
          id="projects" 
          className={`bg-white rounded-2xl p-8 shadow-sm hover-lift transition-all duration-500 ${
            visibleSections.has('projects') ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <h2 className="text-xl font-semibold">Highlighted Projects</h2>
          <div className="mt-6">
            {projects.map((p, index) => (
              <div 
                key={p.name} 
                className={`p-6 border rounded-lg bg-gray-50 hover-lift transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50 ${
                  visibleSections.has('projects') ? 'animate-scaleIn' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >

                <h3 className="text-lg font-semibold mb-3">{p.name}</h3>

                <p className="text-sm mt-2 text-gray-700 leading-relaxed">{p.desc}</p>

                <a href={p.repo} target="_blank" rel="noreferrer" className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">View on GitHub →</a>

              </div>

            ))}

          </div>

        </section>



        <section 
          id="contact" 
          className={`bg-white rounded-2xl p-8 shadow-sm hover-lift transition-all duration-500 ${
            visibleSections.has('contact') ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="md:flex md:items-start md:justify-between md:gap-8">
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Contact</h2>
              <p className="mt-2 text-sm text-gray-700">Email: <strong>choudharyabhi5991@gmail.com</strong></p>
              <p className="mt-1 text-sm text-gray-700">LinkedIn: <strong>linkedin.com/in/abhishek-choudhary-70b855143</strong></p>
              <p className="mt-1 text-sm text-gray-700">GitHub: <strong>github.com/abhi051995</strong></p>

              <div className="mt-6 flex gap-3">
                <a href="mailto:choudharyabhi5991@gmail.com" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Email me</a>
                <a href="https://www.linkedin.com/in/abhishek-choudhary-70b855143/" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg hover:bg-gray-50 hover:border-indigo-300 transition-colors duration-300">LinkedIn</a>
                <a href="https://github.com/abhi051995" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg hover:bg-gray-50 hover:border-indigo-300 transition-colors duration-300">GitHub</a>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end">
              <a 
                href="/Abhishek-Resume-CB.pdf" 
                download="Abhishek-Choudhary-Resume.pdf"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 font-medium min-w-[180px] justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </section>



      </main>



      <footer className="bg-white mt-8 py-6 border-t">
        <div className="max-w-5xl mx-auto px-6 text-sm text-gray-600 animate-fadeIn">
          © {new Date().getFullYear()} Abhishek Choudhary — Spring Boot Microservices Expert
        </div>
      </footer>

    </div>

  );

}

