import { useEffect, useState } from "react";

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  stack: string[];
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string[];
  decisions: string[];
  outcome: string;
  demo: string;
  repo: string;
  image: string;
  gallery: string[];
  accent: string;
};

type LightboxState = {
  images: string[];
  projectTitle: string;
  index: number;
} | null;

export default function App() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const projects: Project[] = [
    {
      slug: "inventory",
      title: "Inventory & Orders System",
      subtitle:
        "Full-stack platform for managing products, suppliers, and purchase/sales workflows.",
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "Zod",
      ],
      summary:
        "Full-stack inventory platform that replaces spreadsheet-heavy workflows with structured product, supplier, and order management.",
      problem:
        "Businesses need a simple way to manage products, suppliers, and order workflows without relying on spreadsheets or disconnected tools.",
      solution:
        "Built a full-stack inventory and orders platform with dashboard-style workflows, relational data models, and authenticated CRUD operations.",
      features: [
        "Product and supplier management",
        "Purchase and sales order workflows",
        "Order lifecycle tracking",
        "Inventory updates tied to order activity",
      ],
      architecture: [
        "React + TypeScript frontend",
        "Node.js + Express REST API",
        "PostgreSQL database with Prisma ORM",
        "JWT authentication and Zod validation",
      ],
      decisions: [
        "Used Prisma ORM for type-safe database queries and schema management",
        "Applied Zod validation before database operations to protect API inputs",
        "Designed dashboard workflows so frontend state reflects backend state clearly",
        "Used JWT authentication for stateless protected routes",
      ],
      outcome:
        "Shows how a business can manage inventory, suppliers, and orders in one structured system instead of fragmented manual workflows.",
      demo: "https://inventory-orders-system-client.onrender.com",
      repo: "https://github.com/Mohamedt19/inventory-orders-system",
      image: "/previews/inventory-dashboard.png",
      gallery: [
        "/previews/inventory-dashboard.png",
        "/previews/inventory-products.png",
        "/previews/inventory-orders.png",
        "/previews/inventory-order-details.png",
        "/previews/inventory-suppliers.png",
      ],
      accent: "from-cyan-500/25 via-sky-500/10 to-emerald-500/20",
    },
    {
      slug: "crm",
      title: "CRM Sales System",
      subtitle:
        "Full-stack CRM for managing companies, leads, and sales pipeline stages.",
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "Zod",
      ],
      summary:
        "CRM system for tracking leads, company relationships, and pipeline movement across a structured sales workflow.",
      problem:
        "Sales workflows require a structured way to manage leads, associate them with companies, and move them through pipeline stages.",
      solution:
        "Built a CRM platform with relational company/lead data, authenticated REST APIs, and a React dashboard for managing pipeline workflows.",
      features: [
        "Lead creation and editing",
        "Company and lead relationship management",
        "Pipeline stage tracking",
        "Filtering and dashboard workflows",
      ],
      architecture: [
        "React + TypeScript dashboard frontend",
        "Node.js + Express API layer",
        "PostgreSQL relational data via Prisma ORM",
        "JWT authentication and Zod schema validation",
      ],
      decisions: [
        "Modeled company and lead relationships with a relational database structure",
        "Used validation-first request handling for safer Express routes",
        "Kept pipeline movement explicit so status changes remain predictable",
        "Designed the UI around common CRM actions: create, edit, filter, and inspect",
      ],
      outcome:
        "Demonstrates a realistic CRM workflow where leads, companies, and pipeline stages are managed in one connected full-stack system.",
      demo: "https://crm-sales-system-client.onrender.com",
      repo: "https://github.com/Mohamedt19/crm-sales-system",
      image: "/previews/crm-pipeline.png",
      gallery: [
        "/previews/crm-dashboard.png",
        "/previews/crm-leads.png",
        "/previews/crm-lead-details.png",
        "/previews/crm-pipeline.png",
      ],
      accent: "from-violet-500/25 via-fuchsia-500/10 to-purple-500/20",
    },
    {
      slug: "tickets",
      title: "Support Ticket System",
      subtitle:
        "Full-stack ticketing platform for managing support requests, priorities, and issue workflows.",
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "Zod",
      ],
      summary:
        "Support workflow system for organizing tickets, priorities, categories, and issue resolution through a structured dashboard.",
      problem:
        "Support teams need a clear workflow for organizing requests, priorities, and issue resolution across multiple ticket states.",
      solution:
        "Built a full-stack support ticket platform with authenticated APIs, relational models, and a dashboard interface for ticket operations.",
      features: [
        "Ticket creation and tracking",
        "Status, priority, and category workflows",
        "Filtering and search support",
        "Protected endpoints and validated requests",
      ],
      architecture: [
        "React + TypeScript dashboard UI",
        "Node.js + Express backend services",
        "PostgreSQL schema modeled with Prisma ORM",
        "JWT auth and Zod request validation",
      ],
      decisions: [
        "Designed ticket status, category, and priority as structured workflow fields",
        "Used validated API requests to reduce invalid state transitions",
        "Focused the UI on quick search and filtering for support use cases",
        "Used a relational schema so tickets and metadata stay consistent",
      ],
      outcome:
        "Shows a production-style support workflow where ticket operations are organized, searchable, and easier to manage than ad hoc communication.",
      demo: "https://support-ticket-system-client.onrender.com",
      repo: "https://github.com/Mohamedt19/support-ticket-system",
      image: "/previews/tickets-board.png",
      gallery: [
        "/previews/tickets-dashboard.png",
        "/previews/tickets-tickets.png",
        "/previews/tickets-board.png",
        "/previews/tickets-ticket-details.png",
      ],
      accent: "from-amber-500/25 via-orange-500/10 to-rose-500/20",
    },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Responsive UI", "State Management"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "REST APIs", "JWT Authentication"],
    },
    {
      title: "Database",
      items: ["PostgreSQL", "Prisma ORM", "Relational Data Modeling", "CRUD"],
    },
    {
      title: "Validation & Deployment",
      items: ["Zod", "Vercel", "Render", "GitHub"],
    },
  ];

  const engineeringFocus = [
    "Full-stack business systems",
    "REST API design",
    "Relational data modeling",
    "Authentication and validation",
    "Dashboard-style products",
  ];

  const currentlyLearning = [
    "System design patterns for scalable APIs",
    "React performance optimization",
    "Database indexing and query optimization",
    "Backend architecture for production systems",
  ];

  function openLightbox(images: string[], index: number, projectTitle: string) {
    setLightbox({ images, index, projectTitle });
  }

  function closeLightbox() {
    setLightbox(null);
  }

  function showPrev() {
    setLightbox((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1,
      };
    });
  }

  function showNext() {
    setLightbox((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        index: prev.index === prev.images.length - 1 ? 0 : prev.index + 1,
      };
    });
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!lightbox) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-8%] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[8%] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[22%] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-tight">
              Mohamed Tfagha
            </div>
            <div className="text-sm text-slate-400">
              Full-Stack Software Engineer
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#case-studies" className="transition hover:text-white">
              Case Studies
            </a>
            <a href="#philosophy" className="transition hover:text-white">
              Philosophy
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Mohamedt19"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/25 hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-tfagha-b4a460147/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Open to junior full-stack opportunities
            </div>

            <div className="space-y-6">
              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-white lg:text-6xl">
                I build production-style full-stack applications with clean UI,
                scalable APIs, and relational data models.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                React, TypeScript, Node.js, Express, PostgreSQL, Prisma, JWT,
                and Zod. I focus on realistic business systems, CRUD workflows,
                and dashboard-style products that feel like real internal tools.
              </p>

              <div className="space-y-2">
                <p className="text-sm font-medium text-cyan-300">
                  New York · Built independently · Full-stack systems
                </p>
                <p className="text-sm text-slate-400">
                  3 production full-stack systems built independently · React •
                  TypeScript • Node • PostgreSQL
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Projects
              </a>
              <a
                href="/Mohamed-Tfagha-Full-Stack-Developer.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/25 hover:bg-white/10"
              >
                View Resume
              </a>
            </div>

            <div className="grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                ["3", "Deployed systems"],
                ["8+", "Core technologies"],
                ["100%", "Built independently"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 ring-1 ring-white/5"
                >
                  <div className="text-3xl font-semibold text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 ring-1 ring-white/5 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-sm text-slate-400">Featured preview</div>
                <div className="mt-1 text-xl font-semibold text-white">
                  Dashboard systems
                </div>
              </div>
              <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
                Active
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/70 shadow-xl shadow-cyan-950/20">
              <img
                src="/previews/inventory-dashboard.png"
                alt="Featured portfolio dashboard preview"
                className="h-56 w-full object-cover object-top"
              />
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Business dashboards",
                "REST API design",
                "Auth + validation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-5">
              <div className="text-sm text-slate-400">Stack snapshot</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "Prisma",
                  "JWT",
                  "Zod",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20"
        >
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                Featured work
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Project grid with production-style systems.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400 md:text-base">
              Three full-stack applications centered on realistic workflows:
              inventory and orders, CRM pipeline management, and support ticket
              operations.
            </p>
          </div>

          <div className="mb-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 ring-1 ring-white/5">
            <div className="grid grid-cols-4 border-b border-white/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              <div>Project</div>
              <div>Type</div>
              <div>Stack</div>
              <div>Demo</div>
            </div>
            {[
              [
                "Inventory & Orders",
                "Full-stack",
                "React / Node / PostgreSQL",
                "Live",
              ],
              [
                "CRM Sales System",
                "Full-stack",
                "React / Node / PostgreSQL",
                "Live",
              ],
              [
                "Support Ticket System",
                "Full-stack",
                "React / Node / PostgreSQL",
                "Live",
              ],
            ].map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-4 border-b border-white/10 px-5 py-4 text-sm text-slate-300 last:border-b-0"
              >
                <div>{row[0]}</div>
                <div>{row[1]}</div>
                <div>{row[2]}</div>
                <div className="text-cyan-300">{row[3]}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/10 ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-cyan-950/30"
              >
                <div className={`h-56 bg-gradient-to-br ${project.accent} p-4`}>
                  <div className="flex h-full flex-col justify-between">
                    <div className="w-fit rounded-2xl border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
                      Full-stack application
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 shadow-lg shadow-black/10">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="h-32 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 6).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm leading-7 text-slate-400">
                    {project.outcome}
                  </p>

                  <div className="flex gap-3 pt-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  </div>

                  <a
                    href={`#${project.slug}`}
                    className="inline-flex text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                  >
                    View case study →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="case-studies"
          className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20"
        >
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
              Case studies
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Deeper look at the systems behind the portfolio.
            </h2>
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <article
                id={project.slug}
                key={project.slug}
                className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-2xl shadow-black/10 ring-1 ring-white/5"
              >
                <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
                  <div
                    className={`flex bg-gradient-to-br ${project.accent} p-6 lg:p-8`}
                  >
                    <div className="flex w-full flex-col gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          openLightbox(project.gallery, 0, project.title)
                        }
                        className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/30 text-left shadow-xl shadow-black/10 transition hover:scale-[1.01]"
                      >
                        <img
                          src={project.gallery[0]}
                          alt={`${project.title} main screenshot`}
                          className="h-[320px] w-full object-cover object-top"
                        />
                      </button>

                      <div className="grid grid-cols-2 gap-4">
                        {project.gallery.slice(1).map((image, index) => (
                          <button
                            key={image}
                            type="button"
                            onClick={() =>
                              openLightbox(
                                project.gallery,
                                index + 1,
                                project.title
                              )
                            }
                            className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/30 text-left shadow-lg shadow-black/10 transition hover:scale-[1.02]"
                          >
                            <img
                              src={image}
                              alt={`${project.title} screenshot ${index + 2}`}
                              className="h-40 w-full object-cover object-top"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 p-6 lg:p-8 xl:p-10">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                        Case study
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                          Problem
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                          Solution
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                        Tech stack
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                        Architecture
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        {project.architecture.map((item) => (
                          <li key={item} className="flex gap-3 leading-7">
                            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                        Engineering decisions
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        {project.decisions.map((decision) => (
                          <li key={decision} className="flex gap-3 leading-7">
                            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                            <span>{decision}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                        Key features
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex gap-3 leading-7">
                            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                        Outcome
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {project.outcome}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
                      >
                        GitHub Repository
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="philosophy"
          className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 ring-1 ring-white/5">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                Engineering philosophy
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                I enjoy building structured systems that model real business
                workflows.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                My focus is on predictable APIs, maintainable architecture,
                relational data, and UI that reflects backend state clearly.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {[
                  "Clean API design",
                  "Predictable data models",
                  "Simple, maintainable architecture",
                  "UI that mirrors backend workflow state",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 ring-1 ring-white/5">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                System design approach
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Practical architecture for full-stack dashboard products.
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  ["Frontend", "React + TypeScript dashboards"],
                  ["API Layer", "Node.js + Express REST APIs"],
                  ["Data Layer", "PostgreSQL with Prisma ORM"],
                  ["Security", "JWT authentication + Zod validation"],
                  [
                    "Deployment",
                    "Render for full-stack apps · Vercel for portfolio",
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {label}
                    </div>
                    <div className="mt-1 text-sm text-slate-200">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[32px] border border-white/10 bg-white/5 p-8 ring-1 ring-white/5">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
              Engineering focus
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {engineeringFocus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20"
        >
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 ring-1 ring-white/5">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                Technical stack
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Practical full-stack delivery across frontend and backend.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Modern frontend work, backend API design, relational data,
                authentication, validation, and deployment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[28px] border border-white/10 bg-slate-900/60 p-6 ring-1 ring-white/5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[32px] border border-white/10 bg-white/5 p-8 ring-1 ring-white/5">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
              Currently learning
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {currentlyLearning.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4 text-sm text-slate-300"
                >
                  <div className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20"
        >
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-violet-500/10 p-8 shadow-2xl shadow-black/10 ring-1 ring-white/5 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Open to junior full-stack opportunities.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                  Available for full-stack roles focused on React, Node.js, and
                  PostgreSQL. I’m looking for opportunities where I can
                  contribute across frontend and backend, build production-style
                  systems, and keep improving as an engineer.
                </p>
              </div>

              <a
                href="mailto:tfagham@gmail.com"
                className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Email Me
              </a>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <a
                href="mailto:tfagham@gmail.com"
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-sm text-slate-200 transition hover:border-white/20 hover:bg-slate-900/70"
              >
                <div className="text-slate-400">Email</div>
                <div className="mt-2 font-medium text-white">
                  tfagham@gmail.com
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/mohamed-tfagha-b4a460147/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-sm text-slate-200 transition hover:border-white/20 hover:bg-slate-900/70"
              >
                <div className="text-slate-400">LinkedIn</div>
                <div className="mt-2 font-medium text-white">
                  mohamed-tfagha-b4a460147
                </div>
              </a>

              <a
                href="https://github.com/Mohamedt19"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-sm text-slate-200 transition hover:border-white/20 hover:bg-slate-900/70"
              >
                <div className="text-slate-400">GitHub</div>
                <div className="mt-2 font-medium text-white">
                  github.com/Mohamedt19
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-0 top-[-3.5rem] rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
            >
              Close
            </button>

            <div className="mb-4 flex items-center justify-between text-sm text-slate-300">
              <div className="font-medium">{lightbox.projectTitle}</div>
              <div>
                {lightbox.index + 1} / {lightbox.images.length}
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
              <img
                src={lightbox.images[lightbox.index]}
                alt={`${lightbox.projectTitle} preview ${lightbox.index + 1}`}
                className="max-h-[75vh] w-full object-contain bg-slate-950"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={showPrev}
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
              >
                ← Previous
              </button>

              <div className="flex flex-wrap justify-center gap-2">
                {lightbox.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() =>
                      setLightbox((prev) =>
                        prev ? { ...prev, index } : prev
                      )
                    }
                    className={`overflow-hidden rounded-xl border ${
                      index === lightbox.index
                        ? "border-cyan-300"
                        : "border-white/10"
                    } bg-slate-900 transition`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-14 w-20 object-cover object-top"
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={showNext}
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}