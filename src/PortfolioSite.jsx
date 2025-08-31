import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { projects } from "./projectsData";
import ProjectDetailPage from "./ProjectDetailPage";
import "./styles.css";
import ScrollToTop from "./ScrollToTop";

function HomePage() {
  return (
    <section className="hero page-dark w-full" id="home">
      <img src="/hero.jpg" alt="Hero" />
      <div className="hero-overlay"></div>
      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col items-center justify-center text-center">
        <p className="kicker">DATA SCIENCE • ENGINEERING • GENAI</p>
        <h1 className="headline scroll-pad">JOSEPH<br className="hidden sm:block"/> GIOVANNELLI</h1>
      </div>
    </section>
  );
}

function AboutPage() {
  const accomplishments = [
    "Reduced network incident response time by 30% with anomaly detection pipelines.",
    "Built Snowflake + dbt data warehouse powering exec dashboards across business units.",
    "Developed AI-driven Text-to-SQL solution; cut query turnaround from hours to minutes.",
  ];

  return (
    <main className="page-dark section-padding" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* LEFT — photo + quick actions + education logos */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="card-dark rounded-2xl overflow-hidden text-center p-6">
              <img
                src="/me.jpg"
                alt="Joseph Giovannelli"
                className="about-photo"
              />
              <h2 className="about-title">About Me</h2>
              <p className="about-lead">
                Principal Data Engineer specializing in data platforms, ML/GenAI, and
                network/cyber analytics. I turn complex datasets into practical,
                scalable products.
              </p>
            </div>

            <div className="card-dark rounded-2xl p-8">
            <h3 className="about-subheading mb-6">Education</h3>
            <ul className="space-y-6 about-list list-none">   {/* 👈 added list-none */}
                <li>
                <div className="flex items-center gap-6">
                    <img
                    src="/syracuse.png"
                    alt="Syracuse University"
                    className="edu-logo"
                    />
                    <div>
                    <div className="font-semibold">M.S. Applied Data Science</div>
                    <div className="about-text">Syracuse University — May 2025</div>
                    <div className="about-text">
                        Focus: Big Data Architecture &amp; AI/ML applications
                    </div>
                    </div>
                </div>
                </li>
                <li>
                <div className="flex items-center gap-6">
                    <img
                    src="/westpoint.png"
                    alt="USMA West Point"
                    className="edu-logo"
                    />
                    <div>
                    <div className="font-semibold">
                        B.S. Information Technology (Systems Engineering)
                    </div>
                    <div className="about-text">
                        United States Military Academy, West Point — May 2016
                    </div>
                    </div>
                </div>
                </li>
            </ul>
            </div>
          </aside>

          {/* RIGHT — narrative + highlights + certs/interests */}
          <section className="lg:col-span-3 space-y-12">
            <h2 className="about-subheading">What I Do</h2>
            <p className="about-lead">
              I design, build, and operationalize data systems that move the needle:
              modern warehouses (Snowflake + dbt), ML pipelines for detection &amp;
              forecasting, and GenAI-powered tools like Text-to-SQL that make data
              self-serve for everyone.
            </p>

            <div className="card-dark rounded-2xl p-10">
              <h3 className="about-subheading mb-6">Key Contributions</h3>
              <ul className="grid sm:grid-cols-2 gap-6 list-disc ml-6 about-list">
                {accomplishments.map((a, i) => (
                  <li key={i} className="opacity-95">
                    {a}
                  </li>
                ))}
                <li className="opacity-95">
                  Led cross-functional initiatives partnering with Security, Network, and
                  Product teams.
                </li>
                <li className="opacity-95">
                  Comfortable across Python, SQL, Spark, dbt, Tableau/Power BI, and cloud
                  (AWS/GCP).
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-dark rounded-2xl p-8">
                <h4 className="about-subheading mb-4">Certifications</h4>
                <p className="about-text">
                  IBM Professional Data Scientist • CISSP • Cisco CCNA
                </p>
              </div>
              <div className="card-dark rounded-2xl p-8">
                <h4 className="about-subheading mb-4">Interests</h4>
                <p className="about-text">
                  Applied ML, MLOps, network telemetry, vector databases, and building
                  fast, usable data products.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="page-dark section-padding" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading scroll-pad mb-10">Projects</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
                <article
                key={p.slug}
                className="space-y-3 text-center card-dark p-4 rounded-2xl"
                >
                <h3 className="project-title">{p.title}</h3>

                <Link
                    to={`/projects/${p.slug}`}
                    className="block group rounded-2xl overflow-hidden"
                >
                    <img
                    src={p.img}
                    alt={p.title}
                    className="project-thumb transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>
                </article>
            ))}
        </div>
      </div>
    </main>
  );
}

/** Small helpers */
function Stat({ label, value }) {
  return (
    <div className="card-dark rounded-2xl p-5">
      <div className="text-sm opacity-80">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="card-dark rounded-2xl p-8 space-y-4">
      <h3 className="sub-heading">{title}</h3>
      {children}
    </section>
  );
}


function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Opens the user’s email client with a prefilled message
  const handleSubmit = (e) => {
    e.preventDefault();
    const to = "you@example.com"; // TODO: replace with your email
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}\n\n— Sent from josephgiovannelli.dev`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <main id="contact" className="page-dark section-padding">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* LEFT: Headline + copy */}
        <section>
          <h1 className="project-title scroll-pad">Let’s build something great.</h1>
          <p className="project-lead max-w-2xl mt-4">
            I’m open to roles in data science, data engineering, and AI/ML—and I love collaborating on
            impactful analytics and GenAI products. The fastest way to reach me is email or LinkedIn.
          </p>

          {/* Quick actions */}
          <div className="contact-icons">
            {/* Email */}
            <a
              href="mailto:jogiovan@syr.edu"
              className="contact-email"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/joseph-giovannelli/"
              target="_blank"
              rel="noreferrer"
              className="contact-linkedin"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.76-2.2 4.02 0 4.77 2.65 4.77 6.1V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Jrgio29"
              target="_blank"
              rel="noreferrer"
              className="contact-github"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.34-3.87-1.34-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.76.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.17a11.1 11.1 0 0 1 5.83 0c2.22-1.48 3.19-1.17 3.19-1.17.63 1.6.23 2.78.11 3.07.75.8 1.2 1.82 1.2 3.07 0 4.41-2.69 5.39-5.26 5.67.42.37.8 1.1.8 2.22v3.29c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
              </svg>
            </a>
          </div>

          {/* Contact stats / reassurance */}
          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            <div className="card-dark rounded-2xl p-5">
              <div className="text-sm opacity-80">Response time</div>
              <div className="text-2xl font-semibold">~24 hrs</div>
            </div>
            <div className="card-dark rounded-2xl p-5">
              <div className="text-sm opacity-80">Timezone</div>
              <div className="text-2xl font-semibold">America/Chicago</div>
            </div>
            <div className="card-dark rounded-2xl p-5">
              <div className="text-sm opacity-80">Availability</div>
              <div className="text-2xl font-semibold">Open to chat</div>
            </div>
          </div>
        </section>

        {/* RIGHT: Contact form */}
        <section className="card-dark rounded-2xl p-8">
          <h2 className="project-subheading">Send a quick note</h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 project-text">Name</label>
              <input
                id="name" name="name" type="text" value={form.name} onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 project-text">Email</label>
              <input
                id="email" name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="example@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 project-text">Message</label>
              <textarea
                id="message" name="message" rows="5" value={form.message} onChange={handleChange}
                placeholder="Tell me a bit about your project or role…"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 border border-white/10"
              >
                Preview Email
              </button>

              {/* small social icons (match header) */}
              <div className="flex items-center gap-3 opacity-90">
                <a href="https://www.linkedin.com/in/joseph-giovannelli/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-svg"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.05c.53-1 1.83-2.2 3.76-2.2 4.02 0 4.77 2.65 4.77 6.1V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z"/></svg>
                </a>
                <a href="https://github.com/Jrgio29" target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-link">
                  <svg viewBox="0 0 24 24" className="icon-svg" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.34-3.87-1.34-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.76.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.17a11.1 11.1 0 0 1 5.83 0c2.22-1.48 3.19-1.17 3.19-1.17.63 1.6.23 2.78.11 3.07.75.8 1.2 1.82 1.2 3.07 0 4.41-2.69 5.39-5.26 5.67.42.37.8 1.1.8 2.22v3.29c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>
                </a>
              </div>
            </div>
          </form>
        </section>
      </div>

      <div className="text-center text-sm text-slate-400 pt-10">
        © {new Date().getFullYear()} Joseph Giovannelli
      </div>
    </main>
  );
}

function Layout() {
  const linkBase =
    "nav-link relative px-2 py-2 flex items-center transition-colors duration-200";
  const active =
    "active text-indigo-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-indigo-300";

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Fixed header */}
     <header className="fixed top-0 inset-x-0 z-40 bg-slate-900/90 backdrop-blur supports-[backdrop-filter]:bg-slate-900/75 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-8">
        <div className="nav-links flex items-center gap-12 text-lg">
          <NavLink to="/" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Projects</NavLink>
          <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Contact</NavLink>
        </div>
      </nav>
    </header>

      {/* Spacer so content doesn't sit under the fixed header */}
      <div className="header-spacer" />

      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default function PortfolioSite() {
  useEffect(() => {
    const onHash = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}> 
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}