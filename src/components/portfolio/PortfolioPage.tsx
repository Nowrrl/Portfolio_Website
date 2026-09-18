"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Satellite,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  achievements,
  education,
  experiences,
  identity,
  interests,
  navigation,
  projects,
  skillGroups,
  coursework,
  languages,
} from "@/data/portfolio";

function SectionHeading({ number, eyebrow, title, intro }: { number: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="section-heading reveal">
      <div className="section-index" aria-hidden="true">{number}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
    </header>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="monogram" href="#top" aria-label="Rasul Novruzov, back to top">RN<span>.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="availability" href="mailto:rasul.novruzov@sabanciuniv.edu"><span />Available for opportunities</a>
      <Button
        className="mobile-menu-button"
        variant="ghost"
        size="icon"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
      >{open ? <X /> : <Menu />}</Button>
      {open ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowRight /></a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function NeuralField() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const circles = Array.from(svg.querySelectorAll("circle"));
    const paths = Array.from(svg.querySelectorAll("path"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const RADIUS = 220;

    const reset = () => {
      circles.forEach((circle) => {
        circle.style.opacity = "0";
        if (!reducedMotion) circle.style.transform = "scale(0.4)";
      });
      paths.forEach((path) => {
        path.style.opacity = "0";
      });
    };

    let ticking = false;
    const handlePointerMove = (event: PointerEvent) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const ctm = svg.getScreenCTM();
        if (!ctm) return;
        const cursor = new DOMPoint(event.clientX, event.clientY).matrixTransform(ctm.inverse());

        circles.forEach((circle) => {
          const cx = Number(circle.getAttribute("cx") ?? 0);
          const cy = Number(circle.getAttribute("cy") ?? 0);
          const distance = Math.hypot(cursor.x - cx, cursor.y - cy);
          const intensity = Math.max(0, 1 - distance / RADIUS);
          circle.style.opacity = String(0.1 + intensity * 0.9);
          if (!reducedMotion) {
            circle.style.transform = `scale(${0.55 + intensity * 0.75})`;
          }
        });

        paths.forEach((path) => {
          const length = path.getTotalLength();
          const samples = Math.max(10, Math.floor(length / 36));
          let minDistance = Infinity;
          for (let i = 0; i <= samples; i++) {
            const point = path.getPointAtLength((length * i) / samples);
            const distance = Math.hypot(cursor.x - point.x, cursor.y - point.y);
            if (distance < minDistance) minDistance = distance;
          }
          const intensity = Math.max(0, 1 - minDistance / RADIUS);
          path.style.opacity = String(0.04 + intensity * 0.78);
        });
        ticking = false;
      });
    };

    reset();
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.body.addEventListener("pointerleave", reset, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.body.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div className="neural-field" aria-hidden="true">
      <svg ref={svgRef} viewBox="0 0 720 720" role="presentation">
        <g className="neural-lines">
          <path d="M95 410 210 296 340 354 464 216 612 292" />
          <path d="M210 296 256 160 464 216 548 102" />
          <path d="M340 354 392 506 568 482 612 292" />
          <path d="M95 410 194 530 392 506" />
          <path d="M256 160 116 142 210 296" />
        </g>
        {["95,410", "210,296", "340,354", "464,216", "612,292", "256,160", "548,102", "392,506", "568,482", "194,530", "116,142"].map((point, index) => {
          const [cx, cy] = point.split(",");
          return <circle key={point} cx={cx} cy={cy} r={index % 3 === 0 ? 7 : 4} className={index % 2 ? "node-cyan" : "node-violet"} />;
        })}
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <NeuralField />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-kicker"><span>01</span> Full-stack product engineering meets applied AI</p>
        <h1 id="hero-title"><span>Rasul</span><span className="outline-type">Novruzov</span></h1>
        <div className="hero-role"><BrainCircuit /><p>{identity.role}</p></div>
        <p className="hero-tagline">{identity.tagline}</p>
        <div className="hero-actions">
          <Button variant="portfolio" size="portfolio" asChild><a href="#projects">View Projects <ArrowDown /></a></Button>
          <Button variant="portfolioOutline" size="portfolio" asChild><a href="#contact">Contact Me <ArrowRight /></a></Button>
        </div>
      </div>
      <div className="hero-meta">
        <span><MapPin />{identity.location}</span>
        <span>Scroll to explore <ArrowDown /></span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="page-section">
      <SectionHeading number="01" eyebrow="Profile" title="Engineering across the entire product." intro="I enjoy turning complex technical problems into practical software products." />
      <div className="about-grid">
        <Reveal className="about-story bento-panel"><p className="large-copy">{identity.intro}</p><div className="build-flow"><span>Interface</span><ArrowRight /><span>Services</span><ArrowRight /><span>Data</span><ArrowRight /><span>AI</span></div></Reveal>
        <Reveal className="profile-placeholder bento-panel">
          <div className="profile-mark"><img src="/profile.jpeg" alt="Rasul Novruzov"  /></div>
          <div><p className="eyebrow">Profile</p><p>Rasul Novruzov</p></div>
        </Reveal>
        <Reveal className="education-card bento-panel"><GraduationCap /><div><p className="eyebrow">Education</p><h3>{education.institution}</h3><p>{education.degree}</p><time>{education.period}</time></div></Reveal>
        <Reveal className="interests-card bento-panel"><div className="panel-title"><Sparkles /><p className="eyebrow">Technical interests</p></div><div className="interest-list">{interests.map((interest) => <span key={interest}>{interest}</span>)}</div></Reveal>
        <Reveal className="location-card bento-panel"><MapPin /><div><p className="eyebrow">Based in</p><h3>{identity.location}</h3></div></Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="page-section">
      <SectionHeading number="02" eyebrow="Experience" title="From models to maintained products." />
      <div className="timeline">
        {experiences.map((experience, index) => <ExperienceItem key={experience.company} experience={experience} index={index} />)}
      </div>
    </section>
  );
}

function ExperienceItem({ experience, index }: { experience: (typeof experiences)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <Reveal className="timeline-entry">
      <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
      <Collapsible open={open} onOpenChange={setOpen} className="experience-panel">
        <div className="experience-header">
          <div><p className="eyebrow">{experience.period}</p><h3>{experience.role}</h3><p className="company">{experience.company}{experience.companyDetail ? ` — ${experience.companyDetail}` : ""}</p></div>
          <div className="experience-side"><span><MapPin />{experience.location}</span><CollapsibleTrigger asChild><Button variant="ghost" size="icon" aria-label={`${open ? "Collapse" : "Expand"} ${experience.company} experience`}><ChevronDown className={open ? "rotate-180" : ""} /></Button></CollapsibleTrigger></div>
        </div>
        <p className="experience-summary">{experience.summary}</p>
        <CollapsibleContent className="collapsible-content"><ul>{experience.details.map((detail) => <li key={detail}><Check />{detail}</li>)}</ul></CollapsibleContent>
      </Collapsible>
    </Reveal>
  );
}

function ProjectVisual({ type, label }: { type: string; label: string }) {
  return (
    <div className={`project-visual visual-${type}`} role="img" aria-label={`${label} screenshot placeholder`}>
      <div className="visual-top"><span /><span /><span /><p>VISUAL PLACEHOLDER</p></div>
      <div className="visual-canvas">
        {type === "satellite" ? <><div className="sat-grid" /><div className="scan-line" /><Satellite /></> : null}
        {type === "retrieval" ? <><div className="image-tile tile-one" /><div className="image-tile tile-two" /><div className="image-tile tile-three" /><div className="connection-line" /></> : null}
        {type === "person" ? <><div className="person-frame person-one" /><div className="person-frame person-two" /><div className="match-line" /></> : null}
        {type === "commerce" ? <><div className="commerce-sidebar" /><div className="commerce-products"><i /><i /><i /><i /></div></> : null}
        {type === "detection" ? <><div className="detection-frame frame-one" /><div className="detection-frame frame-two" /><div className="crosshair" /></> : null}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="page-section projects-section">
      <SectionHeading number="03" eyebrow="Selected work" title="Systems built end to end." intro="A selection of professional and academic work across AI, computer vision, and full-stack engineering." />
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal className={project.featured ? "project-card featured-project" : "project-card"}>
      <ProjectVisual type={project.visual} label={project.title} />
      <Collapsible open={open} onOpenChange={setOpen} className="project-copy">
        <div className="project-number">{project.number}</div>
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        <CollapsibleContent className="collapsible-content project-details"><p>{project.details}</p></CollapsibleContent>
        <CollapsibleTrigger asChild><Button variant="ghost" className="case-study-toggle">{open ? "Close details" : "View case study"}<ChevronDown className={open ? "rotate-180" : ""} /></Button></CollapsibleTrigger>
      </Collapsible>
    </Reveal>
  );
}

const skillIcons = [Code2, Layers3, BrainCircuit, BrainCircuit, BriefcaseBusiness, Code2];
function Skills() {
  return (
    <section id="skills" className="page-section">
      <SectionHeading number="04" eyebrow="Technical toolkit" title="Built for full-product ownership." />
      <div className="skills-grid">{skillGroups.map((group, index) => { const Icon = skillIcons[index] ?? Code2; return <Reveal className="skill-group" key={group.title}><div className="skill-header"><Icon /><h3>{group.title}</h3><span>{String(index + 1).padStart(2, "0")}</span></div><div className="skills-list">{group.skills.map((skill) => <div className="skill-chip" key={skill}><span aria-hidden="true">{skill.slice(0, 2).toUpperCase()}</span>{skill}</div>)}</div></Reveal>; })}</div>
    </section>
  );
}

function Education() {
  const achievementIcons = [Award, GraduationCap, Trophy];
  return (
    <section id="education" className="page-section">
      <SectionHeading number="05" eyebrow="Education & recognition" title="A foundation in engineering and discipline." />
      <div className="education-feature reveal"><div className="university-mark">SU</div><div><p className="eyebrow">{education.period}</p><h3>{education.institution}</h3><p>{education.degree}</p></div><GraduationCap /></div>
      <div className="achievements-grid">{achievements.map((achievement, index) => { const Icon = achievementIcons[index] ?? Award; return <Reveal className="achievement-card" key={achievement}><div><Icon /><span>0{index + 1}</span></div><p>{achievement}</p></Reveal>; })}</div>
      <div className="cv-details-grid">
        <Reveal className="cv-detail-panel"><p className="eyebrow">Relevant coursework</p><div>{coursework.map((item) => <span key={item}>{item}</span>)}</div></Reveal>
        <Reveal className="cv-detail-panel"><p className="eyebrow">Languages</p><div>{languages.map((item) => <span key={item}>{item}</span>)}</div></Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
      <p className="eyebrow">Start a conversation</p>
      <h2>Let's Build Something <span>Extraordinary.</span></h2>
      <p className="contact-copy">I'm interested in opportunities involving artificial intelligence, software engineering, and building innovative technology products.</p>
      <div className="contact-actions">
        <Button variant="portfolio" size="portfolio" asChild><a href={`mailto:${identity.email}`}><Mail />Email Me</a></Button>
        <Button variant="portfolioOutline" size="portfolio" asChild><a href={identity.github} target="_blank" rel="noreferrer"><Github />GitHub<ExternalLink /></a></Button>
        <Button variant="portfolioOutline" size="portfolio" asChild><a href={identity.linkedin} target="_blank" rel="noreferrer"><Linkedin />LinkedIn<ExternalLink /></a></Button>
        <Button variant="portfolioOutline" size="portfolio" asChild><a href="/resume.pdf" download="Rasul_Novruzov_CV.pdf">
  <Download />
  Download Resume
</a></Button>
      </div>
      <a className="contact-email" href={`mailto:${identity.email}`}>{identity.email}<ArrowRight /></a>
    </section>
  );
}

function Footer() {
  return <footer><a className="monogram" href="#top">RN<span>.</span></a><p>Rasul Novruzov · Full-Stack Engineer & AI/ML Engineer</p><a href="#top">Back to top <ArrowDown className="footer-arrow" /></a></footer>;
}

export function PortfolioPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    root.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    const handlePointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("pointermove", handlePointer); };
  }, []);
  return <div ref={mainRef} className="portfolio-shell"><div className="cursor-light" aria-hidden="true" /><Header /><main><Hero /><About /><Experience /><Projects /><Skills /><Education /><Contact /></main><Footer /></div>;
}
