// import React, { useState } from "react";
// import { createRoot } from "react-dom/client";
// import {
//   ArrowDown, ArrowRight, Github, Linkedin, Mail, Phone, MapPin, Code2,
//   Braces, Database, Monitor, GraduationCap, BriefcaseBusiness, FileBadge,
//   ExternalLink, Menu, X, Download, CheckCircle2, Sparkles, Terminal
// } from "lucide-react";
// import "./styles.css";

// const githubUrl = "https://github.com/nibharauniyar123";

// const certificates = [
//   {
//     title: "Software Development Internship",
//     organization: "PPSG Tech Pvt. Ltd.",
//     period: "25 Dec 2025 – 18 Mar 2026",
//     image: "/certificates/ppsg-internship.jpg",
//     type: "Internship certificate",
//   },
//   {
//     title: "Full-Stack Developer Internship",
//     organization: "B2World (BTOW Pvt. Ltd.)",
//     period: "Feb 2026 – Oct 2026 (as printed on certificate)",
//     image: "/certificates/b2world-internship.jpg",
//     type: "Internship certificate",
//   },
//   {
//     title: "Computer Operator",
//     organization: "Saral Shikshya Academy",
//     period: "2 May 2025 – 30 Mar 2026",
//     image: "/certificates/saral-experience.jpg",
//     type: "Work experience certificate",
//   },
//   {
//     title: "Internship Acceptance Letter",
//     organization: "FlyWings IT Solutions Pvt. Ltd.",
//     period: "Letter dated 12 Dec 2025",
//     image: "/certificates/flywings-acceptance.jpg",
//     type: "Acceptance letter",
//   },
// ];

// const skillGroups = [
//   { icon: Monitor, title: "Frontend Development", items: ["HTML", "CSS", "JavaScript", "React.js"] },
//   { icon: Terminal, title: "Backend Development", items: ["Node.js", "Django", "PHP", "REST APIs"] },
//   { icon: Code2, title: "Programming Languages", items: ["C", "C++", "Java", "Python"] },
//   { icon: Database, title: "Database & Core CS", items: ["MySQL", "DSA fundamentals"] },
//   { icon: Braces, title: "Tools & Workflow", items: ["Git", "Debugging", "Testing", "Documentation"] },
//   { icon: BriefcaseBusiness, title: "Workplace Skills", items: ["Communication", "Teamwork", "Time management", "Problem-solving"] },
// ];

// const experience = [
//   {
//     role: "Software Development Intern",
//     company: "PPSG Tech Pvt. Ltd.",
//     date: "25 December 2025 – 18 March 2026",
//     points: [
//       "Assisted with developing and maintaining web applications using React.js and Django.",
//       "Worked with PHP, MySQL and REST APIs on assigned development tasks.",
//       "Helped implement features and troubleshoot bugs with guidance from senior developers.",
//       "Used Git for version control and supported testing, documentation and deployment-related tasks.",
//     ],
//   },
//   {
//     role: "Computer Operator / Administrative Support",
//     company: "Saral Shikshya Academy",
//     date: "2 May 2025 – 30 March 2026",
//     points: [
//       "Entered and maintained student records and digital office documents.",
//       "Prepared documents and supported data entry and record-management tasks.",
//       "Helped keep office information organized and assisted with routine computer-related work.",
//     ],
//   },
// ];

// const education = [
//   { degree: "B.Sc. Computer Science and Information Technology", school: "Padmakanya Multiple Campus, Kathmandu", result: "75.10%", year: "2026 · 2082 B.S." },
//   { degree: "+2 Science", school: "Nightingale International College, Kupondole, Lalitpur", result: "GPA 3.73", year: "2022" },
//   { degree: "Secondary Education Examination (SEE)", school: "Shree Sharda Namuna Secondary School, Lahan", result: "GPA 3.45", year: "2019" },
// ];

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeCertificate, setActiveCertificate] = useState(null);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <div className="site-shell">
//       <header className="topbar">
//         <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">N</span><span>Nibha<span className="brand-dot">.</span></span></a>
//         <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
//         <nav className={menuOpen ? "nav nav-open" : "nav"}>
//           {["About", "Skills", "Experience", "Education", "Certificates"].map((item) => (
//             <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
//           ))}
//           <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact me <ArrowRight size={15} /></a>
//         </nav>
//       </header>

//       <main>
//         <section className="hero section-wrap" id="home">
//           <div className="hero-copy">
//             <div className="eyebrow"><span className="status-dot" /> OPEN TO IT OPPORTUNITIES</div>
//             <h1>Hi, I’m <span>Nibha Kumari Gupta.</span></h1>
//             <p className="hero-title">B.Sc. CSIT Graduate <i>·</i> Web Development <i>·</i> IT Support</p>
//             <p className="hero-intro">I enjoy building useful web experiences, learning new technologies and solving problems through code. I also bring hands-on experience in computer operations and administrative support.</p>
//             <div className="hero-actions">
//               <a className="button button-primary" href="#experience">Explore my experience <ArrowRight size={17} /></a>
//               <a className="button button-secondary" href="/Nibha-Kumari-Gupta-CV.pdf" target="_blank" rel="noreferrer"><Download size={17} /> View CV</a>
//             </div>
//             <div className="hero-links">
//               <a href={githubUrl} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={12} /></a>
//               <a href="mailto:nivagupta245@gmail.com"><Mail size={17} /> Email</a>
//               <a href="tel:9825713446"><Phone size={17} /> Call</a>
//             </div>
//           </div>
//           <div className="hero-art" aria-label="Decorative code illustration">
//             <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
//             <div className="code-card">
//               <div className="code-card-top"><span></span><span></span><span></span><small>nibha.js</small></div>
//               <div className="code-content">
//                 <p><b>const</b> developer = {"{"}</p>
//                 <p className="indent"><span>name</span>: <em>"Nibha Gupta"</em>,</p>
//                 <p className="indent"><span>degree</span>: <em>"B.Sc. CSIT"</em>,</p>
//                 <p className="indent"><span>focus</span>: [</p>
//                 <p className="indent indent2"><em>"Web Development"</em>,</p>
//                 <p className="indent indent2"><em>"Learning & building"</em></p>
//                 <p className="indent">]</p>
//                 <p>{"}"};</p>
//                 <div className="terminal-line"><span>➜</span> ready_to_build<span className="cursor">_</span></div>
//               </div>
//             </div>
//             <div className="float-chip chip-react"><Code2 size={16} /> React.js</div>
//             <div className="float-chip chip-python"><Braces size={16} /> Python</div>
//             <div className="float-chip chip-node"><Terminal size={16} /> Node.js</div>
//             <div className="hero-orb"><Sparkles size={22} /></div>
//           </div>
//           <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
//         </section>

//         <section className="section-wrap about-section" id="about">
//           <div className="section-label">01 / ABOUT ME</div>
//           <div className="section-heading-row"><h2>Curious by nature.<br/><span>Developer in progress.</span></h2><p>I’m a CSIT graduate who enjoys turning ideas into practical digital solutions. My internship helped me understand team workflows, debugging, testing and version control, while my office experience strengthened my organization and communication skills.</p></div>
//           <div className="stats-grid">
//             <div className="stat-card"><span className="stat-icon"><GraduationCap /></span><strong>75.10%</strong><small>B.Sc. CSIT result</small></div>
//             <div className="stat-card"><span className="stat-icon"><Code2 /></span><strong>Web + IT</strong><small>Technical interests</small></div>
//             <div className="stat-card"><span className="stat-icon"><FileBadge /></span><strong>4 documents</strong><small>Certificates & letter</small></div>
//           </div>
//         </section>

//         <section className="section-wrap skills-section" id="skills">
//           <div className="section-label">02 / TOOLKIT</div>
//           <div className="section-heading-row"><h2>Skills I’m building<br/><span>and putting to use.</span></h2><p>My current toolkit spans frontend and backend web technologies, programming fundamentals and day-to-day technical support.</p></div>
//           <div className="skills-grid">
//             {skillGroups.map(({icon: Icon, title, items}) => (
//               <article className="skill-card" key={title}><div className="skill-icon"><Icon size={20}/></div><h3>{title}</h3><div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>
//             ))}
//           </div>
//         </section>

//         <section className="experience-section" id="experience">
//           <div className="section-wrap">
//             <div className="section-label">03 / EXPERIENCE</div>
//             <div className="section-heading-row"><h2>Learning by<br/><span>doing the work.</span></h2><p>Practical experience across software development and office operations, with a focus on reliability, collaboration and continuous learning.</p></div>
//             <div className="timeline">
//               {experience.map((job, index) => (
//                 <article className="timeline-item" key={job.company}>
//                   <div className="timeline-marker">{index + 1}</div>
//                   <div className="timeline-card"><div className="timeline-meta">{job.date}</div><h3>{job.role}</h3><div className="company">{job.company}</div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="section-wrap education-section" id="education">
//           <div className="section-label">04 / EDUCATION</div>
//           <div className="section-heading-row"><h2>Education that<br/><span>built my foundation.</span></h2><p>My academic background combines computer science, programming and foundational problem-solving skills.</p></div>
//           <div className="education-list">
//             {education.map((item, index) => (
//               <article className="education-card" key={item.degree}><div className="education-number">0{index + 1}</div><div className="education-main"><h3>{item.degree}</h3><p>{item.school}</p><small>{item.year}</small></div><div className="education-result">{item.result}</div></article>
//             ))}
//           </div>
//         </section>

//         <section className="cert-section" id="certificates">
//           <div className="section-wrap">
//             <div className="section-label">05 / DOCUMENTS</div>
//             <div className="section-heading-row"><h2>Certificates &<br/><span>professional documents.</span></h2><p>Open a document preview to view the certificate or letter. The documents are shown as provided.</p></div>
//             <div className="cert-grid">
//               {certificates.map((cert) => (
//                 <button className="cert-card" key={cert.title} onClick={() => setActiveCertificate(cert)}>
//                   <div className="cert-thumb"><img src={cert.image} alt={`${cert.title} from ${cert.organization}`} loading="lazy"/><span className="view-overlay">View document <ArrowRight size={16}/></span></div>
//                   <div className="cert-info"><span className="cert-type">{cert.type}</span><h3>{cert.title}</h3><p>{cert.organization}</p><small>{cert.period}</small></div>
//                 </button>
//               ))}
//             </div>
//             <p className="document-note"><CheckCircle2 size={16}/> Documents are included for portfolio display. Share personal details publicly only if you are comfortable doing so.</p>
//           </div>
//         </section>

//         <section className="contact-section section-wrap" id="contact">
//           <div className="contact-card">
//             <div className="section-label">06 / LET’S CONNECT</div>
//             <h2>Have an opportunity?<br/><span>Let’s talk.</span></h2>
//             <p>I’m interested in suitable entry-level opportunities in web development, software development and IT support.</p>
//             <div className="contact-details">
//               <a href="mailto:nivagupta245@gmail.com"><Mail size={18}/><span><small>Email</small>nivagupta245@gmail.com</span><ArrowRight size={16}/></a>
//               <a href="tel:9825713446"><Phone size={18}/><span><small>Phone</small>9825713446</span><ArrowRight size={16}/></a>
//               <div><MapPin size={18}/><span><small>Location</small>Kathmandu, Nepal</span></div>
//               <a href={githubUrl} target="_blank" rel="noreferrer"><Github size={18}/><span><small>GitHub</small>github.com/nibharauniyar123</span><ArrowRight size={16}/></a>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">N</span><span>Nibha<span className="brand-dot">.</span></span></a><p>Designed with care · Built with React</p><a href="#home">Back to top ↑</a></footer>

//       {activeCertificate && (
//         <div className="modal-backdrop" role="presentation" onClick={() => setActiveCertificate(null)}>
//           <div className="modal" role="dialog" aria-modal="true" aria-label={activeCertificate.title} onClick={e => e.stopPropagation()}>
//             <div className="modal-head"><div><span className="cert-type">{activeCertificate.type}</span><h3>{activeCertificate.title}</h3><p>{activeCertificate.organization} · {activeCertificate.period}</p></div><button className="modal-close" aria-label="Close preview" onClick={() => setActiveCertificate(null)}><X/></button></div>
//             <div className="modal-image-wrap"><img src={activeCertificate.image} alt={activeCertificate.title}/></div>
//             <div className="modal-actions"><a className="button button-primary" href={activeCertificate.image} target="_blank" rel="noreferrer">Open full image <ExternalLink size={16}/></a><button className="button button-secondary" onClick={() => setActiveCertificate(null)}>Close</button></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// createRoot(document.getElementById("root")).render(<App />);


import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowRight, Github, Linkedin, Mail, Phone, MapPin, Code2,
  Braces, Database, Monitor, GraduationCap, BriefcaseBusiness, FileBadge,
  ExternalLink, Menu, X, Download, CheckCircle2, Sparkles, Terminal
} from "lucide-react";
import "./styles.css";

const githubUrl = "https://github.com/nibharauniyar123";

const certificates = [
  {
    title: "Software Development Internship",
    organization: "PPSG Tech Pvt. Ltd.",
    period: "25 Dec 2025 – 18 Mar 2026",
    image: "/certificates/ppsg-internship.jpg",
    type: "Internship certificate",
  },
  {
    title: "Full-Stack Developer Internship",
    organization: "B2World (BTOW Pvt. Ltd.)",
    period: "Feb 2026 – Oct 2026 (as printed on certificate)",
    image: "/certificates/b2world-internship.jpg",
    type: "Internship certificate",
  },
  {
    title: "Computer Operator",
    organization: "Saral Shikshya Academy",
    period: "2 May 2025 – 30 Mar 2026",
    image: "/certificates/saral-experience.jpg",
    type: "Work experience certificate",
  },
  {
    title: "Internship Acceptance Letter",
    organization: "FlyWings IT Solutions Pvt. Ltd.",
    period: "Letter dated 12 Dec 2025",
    image: "/certificates/flywings-acceptance.jpg",
    type: "Acceptance letter",
  },
];

const skillGroups = [
  { icon: Monitor, title: "Frontend Development", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { icon: Terminal, title: "Backend Development", items: ["Node.js", "Django", "PHP", "REST APIs"] },
  { icon: Code2, title: "Programming Languages", items: ["C", "C++", "Java", "Python"] },
  { icon: Database, title: "Database & Core CS", items: ["MySQL", "DSA fundamentals"] },
  { icon: Braces, title: "Tools & Workflow", items: ["Git", "Debugging", "Testing", "Documentation"] },
  { icon: BriefcaseBusiness, title: "Workplace Skills", items: ["Communication", "Teamwork", "Time management", "Problem-solving"] },
];

const experience = [
  {
    role: "Software Development Intern",
    company: "PPSG Tech Pvt. Ltd.",
    date: "25 December 2025 – 18 March 2026",
    points: [
      "Assisted with developing and maintaining web applications using React.js and Django.",
      "Worked with PHP, MySQL and REST APIs on assigned development tasks.",
      "Helped implement features and troubleshoot bugs with guidance from senior developers.",
      "Used Git for version control and supported testing, documentation and deployment-related tasks.",
    ],
  },
  {
    role: "Computer Operator / Administrative Support",
    company: "Saral Shikshya Academy",
    date: "2 May 2025 – 30 March 2026",
    points: [
      "Entered and maintained student records and digital office documents.",
      "Prepared documents and supported data entry and record-management tasks.",
      "Helped keep office information organized and assisted with routine computer-related work.",
    ],
  },
];

const education = [
  { degree: "B.Sc. Computer Science and Information Technology", school: "Padmakanya Multiple Campus, Kathmandu", result: "75.10%", year: "2026 · 2082 B.S." },
  { degree: "+2 Science", school: "Nightingale International College, Kupondole, Lalitpur", result: "GPA 3.73", year: "2022" },
  { degree: "Secondary Education Examination (SEE)", school: "Shree Sharda Namuna Secondary School, Lahan", result: "GPA 3.45", year: "2019" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(null);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">N</span><span>Nibha<span className="brand-dot">.</span></span></a>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Skills", "Experience", "Education", "Achievements", "Certificates"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact me <ArrowRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO IT OPPORTUNITIES</div>
            <h1>Hi, I’m <span>Nibha Kumari Gupta</span></h1>
            <p className="hero-title">B.Sc. CSIT Graduate <i>·</i> Web Development <i>·</i> IT Support</p>
            <p className="hero-intro">I enjoy building useful web experiences, learning new technologies and solving problems through code. I also bring hands-on experience in computer operations and administrative support.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">Explore my experience <ArrowRight size={17} /></a>
              <a className="button button-secondary" href="/Nibha-Kumari-Gupta-CV.pdf" target="_blank" rel="noreferrer"><Download size={17} /> View CV</a>
            </div>
            <div className="hero-links">
              <a href={githubUrl} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={12} /></a>
              <a href="mailto:nivagupta245@gmail.com"><Mail size={17} /> Email</a>
              <a href="tel:9825713446"><Phone size={17} /> Call</a>
            </div>
          </div>
          {/* <div className="graduation-hero-art" aria-label="Nibha Gupta graduation portrait">
             <div className="profile-hero-art" aria-label="Nibha Gupta graduation portrait"></div>
            <div className="art-orbit orbit-one"></div>
            <div className="art-orbit orbit-two"></div>
            <div className="graduation-photo-frame">
               <div className="graduation-photo-frame">
              <img
                src="/images/profile.jpeg"
                alt="Nibha Kumari Gupta in graduation attire"
                className="profile-photo"
              />

               <img
                src="/images/nibha-graduate.jpeg"
                alt="Nibha Kumari Gupta in graduation attire"
                className="graduation-photo"
              />
            </div>
            </div>
            <div className="float-chip profile-chip profile-chip-top"><GraduationCap size={16} /> B.Sc. CSIT Graduate</div>
            <div className="float-chip profile-chip profile-chip-bottom"><Sparkles size={16} /> 75.10% · Class of 2026</div>
          </div> */}
          
<div className="graduation-hero-art" aria-label="Nibha Gupta profile and graduation photos">
  <div className="art-orbit orbit-one"></div>
  <div className="art-orbit orbit-two"></div>

  <div className="hero-photo-gallery">
    <figure className="hero-photo-card profile-card">
      <div className="hero-photo-frame">
        <img
          src="/images/profile.jpeg"
          alt="Nibha Kumari Gupta professional profile"
          className="hero-gallery-image"
        />
      </div>

      <figcaption>
        <strong>Nibha Kumari Gupta</strong>
        <span>B.Sc. CSIT Graduate</span>
      </figcaption>
    </figure>

    <figure className="hero-photo-card graduation-card">
      <div className="hero-photo-frame">
        <img
          src="/images/nibha-graduate.jpeg"
          alt="Nibha Kumari Gupta in graduation attire"
          className="hero-gallery-image graduation-image"
        />
      </div>

      <figcaption>
        <strong>Graduation Day</strong>
        {/* <span>75.10% .Class of 2026</span> */}
        <span>Bachelor’s Degree · 75.10% · 2026</span>
      </figcaption>
    </figure>
  </div>
</div>

          <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-label">01 / ABOUT ME</div>
          <div className="section-heading-row"><h2>Curious by nature.<br/><span>Developer in progress.</span></h2><p>I’m a CSIT graduate who enjoys turning ideas into practical digital solutions. My internship helped me understand team workflows, debugging, testing and version control, while my office experience strengthened my organization and communication skills.</p></div>
          <div className="stats-grid">
            <div className="stat-card"><span className="stat-icon"><GraduationCap /></span><strong>75.10%</strong><small>B.Sc. CSIT result</small></div>
            <div className="stat-card"><span className="stat-icon"><Code2 /></span><strong>Web + IT</strong><small>Technical interests</small></div>
            <div className="stat-card"><span className="stat-icon"><FileBadge /></span><strong>4 documents</strong><small>Certificates & letter</small></div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-label">02 / TOOLKIT</div>
          <div className="section-heading-row"><h2>Skills I’m building<br/><span>and putting to use.</span></h2><p>My current toolkit spans frontend and backend web technologies, programming fundamentals and day-to-day technical support.</p></div>
          <div className="skills-grid">
            {skillGroups.map(({icon: Icon, title, items}) => (
              <article className="skill-card" key={title}><div className="skill-icon"><Icon size={20}/></div><h3>{title}</h3><div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap">
            <div className="section-label">03 / EXPERIENCE</div>
            <div className="section-heading-row"><h2>Learning by<br/><span>doing the work.</span></h2><p>Practical experience across software development and office operations, with a focus on reliability, collaboration and continuous learning.</p></div>
            <div className="timeline">
              {experience.map((job, index) => (
                <article className="timeline-item" key={job.company}>
                  <div className="timeline-marker">{index + 1}</div>
                  <div className="timeline-card"><div className="timeline-meta">{job.date}</div><h3>{job.role}</h3><div className="company">{job.company}</div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap education-section" id="education">
          <div className="section-label">04 / EDUCATION</div>
          <div className="section-heading-row"><h2>Education that<br/><span>built my foundation.</span></h2><p>My academic background combines computer science, programming and foundational problem-solving skills.</p></div>
          <div className="education-list">
            {education.map((item, index) => (
              <article className="education-card" key={item.degree}><div className="education-number">0{index + 1}</div><div className="education-main"><h3>{item.degree}</h3><p>{item.school}</p><small>{item.year}</small></div><div className="education-result">{item.result}</div></article>
            ))}
          </div>
        </section>

        <section className="section-wrap milestone-section" id="graduation">
          <div className="section-label">05 / GRADUATION MILESTONE</div>
          <div className="section-heading-row">
            <h2>A milestone worth<br/><span>remembering.</span></h2>
            <p>
              Completing my B.Sc. CSIT degree at Padmakanya Multiple Campus,
              Tribhuvan University, is an important step in my journey into
              software development and technology.
            </p>
          </div>
          <div className="milestone-grid">
            <div className="milestone-copy">
              <div className="milestone-icon"><GraduationCap size={25}/></div>
              <span className="milestone-kicker">BACHELOR'S DEGREE</span>
              <h3>B.Sc. Computer Science and Information Technology</h3>
              <p className="milestone-school">Padmakanya Multiple Campus · Tribhuvan University</p>
              <div className="milestone-facts">
                <div><small>Academic result</small><strong>75.10%</strong></div>
                <div><small>Graduation year</small><strong>2026 · 2082 B.S.</strong></div>
                <div><small>Location</small><strong>Kathmandu, Nepal</strong></div>
              </div>
              <p className="milestone-description">
                My academic journey helped me develop a foundation in programming,
                databases, software engineering and problem-solving. I look forward
                to applying this knowledge to practical projects and new opportunities.
              </p>
            </div>
            <figure className="report-figure">
              <img
                src="/images/internship-report.jpeg"
                alt="Final-year Software Development Internship Report submitted to Tribhuvan University"
                loading="lazy"
              />
              <figcaption>
                <span>FINAL-YEAR PROJECT</span>
                <strong>Software Development Internship Report</strong>
                <small>PPSG Tech Pvt. Ltd. · April 2026</small>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="awards-section" id="achievements">
          <div className="section-wrap">
            <div className="section-label">06 / ACHIEVEMENTS & AWARDS</div>
            <div className="section-heading-row">
              <h2>Hard work deserves<br/><span>recognition.</span></h2>
              <p>
                I am grateful to Saral Shikshya Academy for recognizing my work
                and dedication. This appreciation encourages me to keep learning,
                contributing and growing professionally.
              </p>
            </div>
            <div className="awards-grid">
              <article className="award-card">
                <button className="award-photo-button" onClick={() => setActiveCertificate({
                  title: "Best Employee Award",
                  organization: "Saral Shikshya Academy",
                  period: "Award recognition",
                  image: "/images/best-employee-award.jpeg",
                  type: "Achievement"
                })} aria-label="View Best Employee Award photo">
                  <img src="/images/best-employee-award.jpeg" alt="Best Employee Award presented to Nibha Gupta at Saral Shikshya Academy" loading="lazy"/>
                  <span className="award-photo-label">🏆 Best Employee Award</span>
                </button>
                <div className="award-copy">
                  <span className="award-kicker">PROFESSIONAL ACHIEVEMENT</span>
                  <h3>Best Employee Award</h3>
                  <h4>Saral Shikshya Academy</h4>
                  <p>
                    Recognized for hard work, support and dedication while working
                    at Saral Shikshya Academy. This achievement motivates me to
                    maintain a strong work ethic and keep improving my skills.
                  </p>
                  <div className="award-tags"><span>Dedication</span><span>Excellence</span></div>
                </div>
              </article>

              <article className="award-card">
                <button className="award-photo-button" onClick={() => setActiveCertificate({
                  title: "Best Employee Award — Recognition Moment",
                  organization: "Saral Shikshya Academy",
                  period: "Award presentation",
                  image: "/images/best-employee-moment.jpeg",
                  type: "Achievement moment"
                })} aria-label="View award presentation moment">
                  <img src="/images/best-employee-moment.jpeg" alt="Nibha Gupta receiving an award at Saral Shikshya Academy" loading="lazy"/>
                  <span className="award-photo-label">✨ Recognition Moment</span>
                </button>
                <div className="award-copy">
                  <span className="award-kicker">CAREER MILESTONE</span>
                  <h3>A Moment to Remember</h3>
                  <h4>Appreciation for Dedicated Work</h4>
                  <p>
                    A proud moment celebrating my contribution and commitment.
                    The experience strengthened my confidence and encouraged me
                    to continue contributing positively to a team.
                  </p>
                  <div className="award-tags"><span>Teamwork</span><span>Growth</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="cert-section" id="certificates">
          <div className="section-wrap">
            <div className="section-label">07 / DOCUMENTS</div>
            <div className="section-heading-row"><h2>Certificates &<br/><span>professional documents.</span></h2><p>Open a document preview to view the certificate or letter. The documents are shown as provided.</p></div>
            <div className="cert-grid">
              {certificates.map((cert) => (
                <button className="cert-card" key={cert.title} onClick={() => setActiveCertificate(cert)}>
                  <div className="cert-thumb"><img src={cert.image} alt={`${cert.title} from ${cert.organization}`} loading="lazy"/><span className="view-overlay">View document <ArrowRight size={16}/></span></div>
                  <div className="cert-info"><span className="cert-type">{cert.type}</span><h3>{cert.title}</h3><p>{cert.organization}</p><small>{cert.period}</small></div>
                </button>
              ))}
            </div>
            <p className="document-note"><CheckCircle2 size={16}/> Documents are included for portfolio display. Share personal details publicly only if you are comfortable doing so.</p>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="section-label">08 / LET’S CONNECT</div>
            <h2>Have an opportunity?<br/><span>Let’s talk.</span></h2>
            <p>I’m interested in suitable entry-level opportunities in web development, software development and IT support.</p>
            <div className="contact-details">
              <a href="mailto:nivagupta245@gmail.com"><Mail size={18}/><span><small>Email</small>nivagupta245@gmail.com</span><ArrowRight size={16}/></a>
              <a href="tel:9825713446"><Phone size={18}/><span><small>Phone</small>9825713446</span><ArrowRight size={16}/></a>
              <div><MapPin size={18}/><span><small>Location</small>Kathmandu, Nepal</span></div>
              <a href={githubUrl} target="_blank" rel="noreferrer"><Github size={18}/><span><small>GitHub</small>github.com/nibharauniyar123</span><ArrowRight size={16}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">N</span><span>Nibha<span className="brand-dot">.</span></span></a><p>Designed with care · Built with React</p><a href="#home">Back to top ↑</a></footer>

      {activeCertificate && (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveCertificate(null)}>
          <div className="modal" role="dialog" aria-modal="true" aria-label={activeCertificate.title} onClick={e => e.stopPropagation()}>
            <div className="modal-head"><div><span className="cert-type">{activeCertificate.type}</span><h3>{activeCertificate.title}</h3><p>{activeCertificate.organization} · {activeCertificate.period}</p></div><button className="modal-close" aria-label="Close preview" onClick={() => setActiveCertificate(null)}><X/></button></div>
            <div className="modal-image-wrap"><img src={activeCertificate.image} alt={activeCertificate.title}/></div>
            <div className="modal-actions"><a className="button button-primary" href={activeCertificate.image} target="_blank" rel="noreferrer">Open full image <ExternalLink size={16}/></a><button className="button button-secondary" onClick={() => setActiveCertificate(null)}>Close</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
