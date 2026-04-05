export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-mono">

      {/* Header */}
      <header className="relative bg-slate-950 border-b border-teal-500/30 px-8 py-14 overflow-hidden">
        {/* Decorative grid overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(20,184,166,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">
            — Portfolio Resume —
          </p>
          <h1 className="text-5xl font-bold text-white tracking-tight mb-2">
            Iida Kenny
          </h1>
          <p className="text-teal-300 text-lg mb-6">
            Business Analytics &amp; Information Systems
          </p>

          {/* Contact row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <a href="tel:+19416267443" className="hover:text-teal-300 transition-colors">
              +1 (941) 626-7443
            </a>
            <a href="mailto:iida.kenny@icloud.com" className="hover:text-teal-300 transition-colors">
              iida.kenny@icloud.com
            </a>
            <a href="https://linkedin.com/in/iidakenny" target="_blank" rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors">
              linkedin.com/in/iidakenny
            </a>
            <a href="https://github.com/iidakenny" target="_blank" rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors">
              github.com/iidakenny
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-12 space-y-14">

        {/* Summary */}
        <section aria-labelledby="summary-heading">
          <SectionLabel>Overview</SectionLabel>
          <p className="text-slate-300 leading-relaxed text-base border-l-2 border-teal-500 pl-5">
            Business Analytics student with experience in data visualization, analytics tools, and
            dashboard development. Driven by a cross-cultural perspective shaped across two continents
            and three industries toward data analyst or BI roles with global scope.
          </p>
        </section>

        {/* Education */}
        <section aria-labelledby="education-heading">
          <SectionLabel>Education</SectionLabel>
          <div className="border border-slate-800 rounded-lg p-6 bg-slate-900/50 hover:border-teal-500/50 transition-colors">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
              <div>
                <h3 className="text-white font-semibold text-lg">University of South Florida</h3>
                <p className="text-teal-400 text-sm mt-0.5">
                  B.S. in Business Analytics and Information Systems · Minor in Economics
                </p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-sm">Tampa, Florida</p>
                <p className="text-slate-500 text-xs mt-0.5">December 2026</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-teal-500">▸</span>
                <span>GPA: <span className="text-slate-200">3.8 / 4.0</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-500">▸</span>
                <span>Involvement: Data Science Club</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Statistics II",
                  "AI & Analytics",
                  "Business Calculus",
                  "Principles of Finance",
                  "Macro/Microeconomics",
                  "Principles of Accounting",
                  "Managerial Accounting",
                  "Business Law",
                ].map((course) => (
                  <span key={course}
                    className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded border border-slate-700">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section aria-labelledby="experience-heading">
          <SectionLabel>Work Experience</SectionLabel>
          <div className="space-y-6">

            <ExperienceCard
              title="Student Analyst, Office of Decision Support"
              org="University of South Florida"
              location="Tampa, Florida"
              period="Nov 2025 – Present"
              bullets={[
                "Produced 20+ data visualizations and dashboards to support academic planning decisions across the university.",
                "Completed 5+ research projects analyzing enrollment and web benchmarking data across Florida's public universities, identifying key differences in how applicant-facing information is presented.",
                "Analyzed 1,000+ student application records to surface trends in undergraduate vs. graduate enrollment patterns at USF.",
              ]}
            />

            <ExperienceCard
              title="Software Quality Assurance Engineer"
              org="Golf Gamebook"
              location="Helsinki, Finland"
              period="Oct 2022 – Aug 2023"
              bullets={[
                "Executed 500+ manual test cases across multiple platforms to identify and document critical bugs.",
                "Simulated 100+ user interactions in standard time zones, reducing related defects by 30%.",
                "Reported and tracked 150+ software defects, contributing to a 25% increase in release satisfaction.",
              ]}
            />

            <ExperienceCard
              title="People Operations Assistant"
              org="Nordcloud Oy (IBM)"
              location="Helsinki, Finland"
              period="Oct 2020 – Oct 2022"
              bullets={[
                "Managed end-to-end onboarding for 80+ new hires across Sweden, Finland, Denmark, and Norway.",
                "Streamlined onboarding workflows with templates and macros, reducing average onboarding time by 15%.",
                "Drafted and customized 100+ employment contracts and addendums, ensuring full compliance with local labor laws.",
              ]}
            />

          </div>
        </section>

        {/* Projects */}
        <section aria-labelledby="projects-heading">
          <SectionLabel>Projects</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <ProjectCard
              title="Customer Tracker"
              tech={["JavaScript", "HTML", "CSS"]}
              description="A browser-based customer management tool for tracking client records and interactions. Features dynamic DOM manipulation and local state management."
              href="https://github.com/iidakenny/customer-tracker"
            />

            <ProjectCard
              title="Retail Discount Engine"
              tech={["JavaScript", "HTML"]}
              description="A rule-based pricing engine that applies tiered retail discount logic based on customer segments and order thresholds."
              href="https://github.com/iidakenny/retail-discount-engine"
            />

            <ProjectCard
              title="Order Manager"
              tech={["JavaScript", "HTML"]}
              description="An order management interface for creating, viewing, and updating orders — built to practice CRUD logic and event-driven programming."
              href="https://github.com/iidakenny/order-manager"
            />

            <ProjectCard
              title="Portfolio Site"
              tech={["HTML", "CSS"]}
              description="A personal portfolio webpage showcasing projects and professional background, designed with semantic HTML and custom CSS."
              href="https://github.com/iidakenny/portfolio-site"
            />

          </div>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills-heading">
          <SectionLabel>Skills &amp; Certifications</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="border border-slate-800 rounded-lg p-5 bg-slate-900/50">
              <h3 className="text-xs text-teal-400 uppercase tracking-widest mb-3">Languages</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Finnish</span>
                  <span className="text-slate-500">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-slate-500">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>Swedish</span>
                  <span className="text-slate-500">Basic</span>
                </div>
                <div className="flex justify-between">
                  <span>German</span>
                  <span className="text-slate-500">Basic</span>
                </div>
              </div>
            </div>

            <div className="border border-slate-800 rounded-lg p-5 bg-slate-900/50">
              <h3 className="text-xs text-teal-400 uppercase tracking-widest mb-3">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "JavaScript", "HTML", "CSS"].map((s) => (
                  <SkillBadge key={s}>{s}</SkillBadge>
                ))}
              </div>
            </div>

            <div className="border border-slate-800 rounded-lg p-5 bg-slate-900/50">
              <h3 className="text-xs text-teal-400 uppercase tracking-widest mb-3">Analytics &amp; BI Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Tableau", "Power BI", "Excel", "Gray DI"].map((s) => (
                  <SkillBadge key={s}>{s}</SkillBadge>
                ))}
              </div>
            </div>

            <div className="border border-slate-800 rounded-lg p-5 bg-slate-900/50">
              <h3 className="text-xs text-teal-400 uppercase tracking-widest mb-3">Platforms &amp; Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Postman", "Jira", "Figma", "HiBob", "OpenAI", "Claude"].map((s) => (
                  <SkillBadge key={s}>{s}</SkillBadge>
                ))}
              </div>
            </div>

            <div className="border border-slate-800 rounded-lg p-5 bg-slate-900/50 sm:col-span-2">
              <h3 className="text-xs text-teal-400 uppercase tracking-widest mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                <a href="https://www.coursera.org/account/accomplishments/specialization/FEXPTFNLLVZE"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-teal-300 transition-colors">
                  <span className="text-teal-500">✓</span>
                  IBM Data Analyst Professional Certificate
                </a>
                <div className="flex items-center gap-2">
                  <span className="text-teal-500">✓</span>
                  Excel Expert 2019 (MO-201)
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-8 text-center text-slate-600 text-xs">
        <p>© 2025 Iida Kenny · Tampa, Florida</p>
      </footer>

    </main>
  );
}

/* ── Reusable sub-components ──────────────────────────────────────────── */

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-px bg-slate-800" />
    </div>
  );
}

function ExperienceCard({ title, org, location, period, bullets }) {
  return (
    <div className="border border-slate-800 rounded-lg p-6 bg-slate-900/50 hover:border-teal-500/50 transition-colors">
      <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-teal-400 text-sm mt-0.5">{org}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-slate-400 text-sm">{location}</p>
          <p className="text-slate-500 text-xs mt-0.5">{period}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-sm text-slate-300">
            <span className="text-teal-500 mt-0.5 shrink-0">▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, tech, description, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="block border border-slate-800 rounded-lg p-5 bg-slate-900/50 hover:border-teal-500/50 hover:bg-slate-900 transition-all group">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-white font-semibold group-hover:text-teal-300 transition-colors">
          {title}
        </h3>
        <span className="text-slate-600 group-hover:text-teal-400 transition-colors text-sm">↗</span>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="bg-slate-800 text-teal-400 text-xs px-2 py-0.5 rounded border border-slate-700">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

function SkillBadge({ children }) {
  return (
    <span className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded border border-slate-700 hover:border-teal-500/50 hover:text-teal-300 transition-colors cursor-default">
      {children}
    </span>
    
  );
}