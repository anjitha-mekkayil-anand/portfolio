const GITHUB = "https://github.com/anjitha-mekkayil-anand";
const LINKEDIN = "https://linkedin.com/in/anjitha-mekkayil-anand";
const LETTERS = "https://noesisletters.substack.com/";
const CV = "/Anjitha-Mekkayil-Anand-CV.pdf";

type Project = {
  name: string;
  text: string;
  tags: string[];
  links: { label: string; href: string }[];
};

const backend: Project[] = [
  {
    name: "Redis Server",
    text: "A Redis server from scratch in .NET 10, speaking the real RESP2 wire protocol over async TCP, so redis-cli and redis-benchmark talk to it directly. Thread-safe store with key expiry; 25 tests, including a real-socket 25-client concurrency test.",
    tags: [".NET 10", "TCP", "RESP2", "Concurrency"],
    links: [{ label: "GitHub", href: `${GITHUB}/redis-server` }],
  },
  {
    name: "Rate Limiter",
    text: "All four classic rate-limiting algorithms (token bucket, fixed window, sliding-window log and sliding-window counter) behind one interface, as ASP.NET Core middleware. 17 tests, with deterministic time through TimeProvider.",
    tags: ["ASP.NET Core", "Middleware", "TimeProvider"],
    links: [{ label: "GitHub", href: `${GITHUB}/rate-limiter` }],
  },
  {
    name: "Data Privacy Vault",
    text: "A tokenization service that swaps sensitive fields for opaque tokens and stores the originals AES-256-GCM encrypted, gated by scoped API keys: the field-level privacy-masking pattern from production, with 15 tests.",
    tags: [".NET", "AES-256-GCM", "API keys"],
    links: [{ label: "GitHub", href: `${GITHUB}/data-privacy-vault` }],
  },
];

const ai: Project[] = [
  {
    name: "Anamnesis",
    text: "Retrieval-augmented answering over my own published writing, in .NET 10: paragraph-aware chunking, embeddings in SQLite, exact top-k retrieval and answers with inline citations, Claude first with automatic failover to OpenAI. It ships with a 20-question evaluation harness (first baseline: hit-rate@5 0.95, MRR 0.90, faithfulness 1.00). I wrote those twenty questions over my own corpus, so they need adversarial cases before the numbers mean much; what it already does well is say the sources don't cover something instead of inventing.",
    tags: [".NET 10", "RAG", "Evaluation"],
    links: [
      { label: "GitHub", href: `${GITHUB}/anamnesis` },
      { label: "Demo (60s)", href: "https://youtu.be/ZRlSzQ6BE30" },
    ],
  },
  {
    name: "Mathesis",
    text: "A four-agent enterprise learning system for Microsoft's Agents League, with an MCP server and two human approval gates as an architecture decision rather than a demo feature. Built in under a week after the hackathon rules changed; 17 unit tests, consistency evaluation stable across 8 of 8 runs.",
    tags: ["Multi-agent", "MCP", "Azure AI"],
    links: [
      { label: "GitHub", href: `${GITHUB}/Mathesis` },
      { label: "Demo (77s)", href: "https://youtu.be/JYVCqiPeCqM" },
    ],
  },
  {
    name: "Pronoia",
    text: "A predictive-maintenance reasoning agent: streaming sensor data, a deterministic change detector in front of the model, an MCP server the agent can only read and flag through, and a human approval queue.",
    tags: [".NET 10", "MCP", "Blazor"],
    links: [
      { label: "GitHub", href: `${GITHUB}/Pronoia` },
      { label: "Demo (69s)", href: "https://youtu.be/Qn5FaqX1sT8" },
    ],
  },
];

const small = [
  { name: "Aletheia", text: "Open template for an LLM-maintained personal knowledge base, the pattern behind my own notes.", href: `${GITHUB}/Aletheia` },
  { name: "Gnomon", text: "A router for the Claude API that sends each task to the cheapest sufficient model, with per-request cost.", href: `${GITHUB}/Gnomon` },
  { name: "Stentor", text: "A voice interview coach: speak an answer, get feedback on STAR shape, filler words and hedging.", href: `${GITHUB}/Stentor` },
];

function Card({ p }: { p: Project }) {
  return (
    <article className="card">
      <h4>{p.name}</h4>
      <p>{p.text}</p>
      <ul className="tags">
        {p.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="links">
        {p.links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label} &rarr;
          </a>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand">
            Anjitha Mekkayil Anand
          </a>
          <div className="nav-links">
            <a href="#cases">Work</a>
            <a href="#projects">Projects</a>
            <a href="#story">Story</a>
            <a href={CV} className="nav-cv">
              CV
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* Hero */}
        <header className="hero">
          <div className="wrap">
            <p className="eyebrow">Senior .NET Engineer &middot; Kozhikode, India &middot; Remote</p>
            <h1>Old, tangled systems are where I&rsquo;m most useful.</h1>
            <p className="lead">
              I learn them, find what&rsquo;s really breaking, and make them easier to change. Ten years in .NET,
              twelve in software: C#, ASP.NET Core, SQL Server and Azure, currently on a multi-tenant platform for
              Nordic energy utilities.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href={CV}>
                Download CV
              </a>
              <a className="btn" href={LINKEDIN}>
                LinkedIn
              </a>
              <a className="btn" href={GITHUB}>
                GitHub
              </a>
            </div>
          </div>
        </header>

        {/* Proof */}
        <section className="stats" aria-label="At a glance">
          <div className="wrap stats-grid">
            <div className="stat">
              <span className="stat-big">Runner-Up entry</span>
              <span className="stat-label">EG Talent Accelerator 2026: built alone, presented live. The panel: &ldquo;We&rsquo;d like this in production today.&rdquo;</span>
            </div>
            <div className="stat">
              <span className="stat-big">850+</span>
              <span className="stat-label">pull requests reviewed for colleagues on a large .NET platform</span>
            </div>
            <div className="stat">
              <span className="stat-big">10+</span>
              <span className="stat-label">enterprise clients moved onto India&rsquo;s GST in a live billing product, at launch</span>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section id="cases" className="section">
          <div className="wrap">
            <h2>What that looks like</h2>
            <div className="cases">
              <article className="case">
                <span className="case-year">2017</span>
                <h3>A tax regime, learned from the legislation</h3>
                <p>
                  India replaced its tax system. I learned the GST rules from the legislation itself,
                  mapped them onto a live billing product and shipped it to more than ten enterprise clients.
                </p>
              </article>
              <article className="case">
                <span className="case-year">2017&ndash;19</span>
                <h3>FoxPro, read while it ran</h3>
                <p>
                  A billing system in a language I had never seen before and haven&rsquo;t since. I debugged it while
                  it was running until I understood it, then rebuilt it in .NET and SQL Server.
                </p>
              </article>
              <article className="case">
                <span className="case-year">2023&ndash;</span>
                <h3>Seventeen arrays for one status</h3>
                <p>
                  In a front-end module of nearly 9,500 lines, adding one status meant editing 17 hardcoded arrays. A
                  three-layer resolution pipeline replaced them, surfaced 14 pre-existing bugs and cut the two largest
                  files by about 75%.
                </p>
              </article>
              <article className="case">
                <span className="case-year">Now</span>
                <h3>Blazor inside a live legacy app</h3>
                <p>
                  Moving a live KnockoutJS application onto Blazor in steps: Blazor dialogs hosted inside the legacy
                  pages, and a written plan the product owner used to scope the first slice.
                </p>
              </article>
              <article className="case">
                <span className="case-year">2023&ndash;</span>
                <h3>One call per record, down to two</h3>
                <p>
                  An N+1 pattern made one database call for every record. It now makes two calls in total, however
                  many records there are.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section section-alt">
          <div className="wrap">
            <h2>Projects</h2>

            <article className="feature">
              <div className="feature-head">
                <h3>Kilippaattu</h3>
                <span className="pill">Live &middot; open front page</span>
              </div>
              <p>
                A phone-first web app that turns my morning birding into one day log. It reads Merlin species lists
                from screenshots with on-device OCR and BirdNET Live exports straight from their zip, stitches the
                recordings into a mix with human voices filtered out, and makes a shareable MP4 day card on the phone.
                I design and test it; Claude Code writes the code under my review. The front page is open to anyone:
                a calendar of mornings and the birds in each. Recordings and the full log stay private.
              </p>
              <ul className="tags">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Turso</li>
                <li>Vercel</li>
                <li>WebCodecs</li>
              </ul>
              <div className="links">
                <a href="https://kilippaattu.app">kilippaattu.app &rarr;</a>
              </div>
            </article>

            <h3 className="group">Backend in .NET</h3>
            <div className="grid">
              {backend.map((p) => (
                <Card key={p.name} p={p} />
              ))}
            </div>

            <h3 className="group">AI systems</h3>
            <div className="grid">
              {ai.map((p) => (
                <Card key={p.name} p={p} />
              ))}
            </div>

            <h3 className="group">Smaller tools</h3>
            <ul className="small">
              {small.map((s) => (
                <li key={s.name}>
                  <a href={s.href}>{s.name}</a> <span>{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="section">
          <div className="wrap narrow">
            <h2>Since 2006</h2>
            <ol className="timeline">
              <li>
                <span className="year">2006&ndash;08</span>
                <p>A PIC microcontroller factory monitor, my first program: sensors, thresholds, alerts. Then mainframe COBOL at Infosys.</p>
              </li>
              <li>
                <span className="year">2013&ndash;15</span>
                <p>
                  M.Tech in Embedded Systems at NIELIT Calicut, with a project traineeship at Gadgeon: real-time sensor
                  data collection on BeagleBone PRUSS, published at ACM WCI &rsquo;15 (
                  <a href="https://doi.org/10.1145/2791405.2791408">DOI 10.1145/2791405.2791408</a>).
                </p>
              </li>
              <li>
                <span className="year">2016&ndash;19</span>
                <p>ERP and billing in .NET and SQL Server; from 2017, team lead for about six engineers; the GST switch and the FoxPro rebuild.</p>
              </li>
              <li>
                <span className="year">2019&ndash;22</span>
                <p>Industrial IoT platforms on Azure: device fleets, OTA updates, telemetry at scale.</p>
              </li>
              <li>
                <span className="year">2022&ndash;23</span>
                <p>Microservices in .NET Core: Kafka and Event Hubs pipelines, OAuth 2.0 and OpenID Connect.</p>
              </li>
              <li>
                <span className="year">2023&ndash;</span>
                <p>A multi-tenant .NET platform for the Nordic energy market: billing, metering pipelines, market protocols.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* How I work */}
        <section id="how" className="section section-alt">
          <div className="wrap narrow">
            <h2>How I work</h2>
            <p className="prose">
              I read before I change. Most of my best work started with a system nobody in the room fully understood:
              I learn how it behaves, find the real cause and change it in steps small enough to review. Now that AI
              writes more of the code, review is more of the job. I use Claude Code daily at work and read what it
              produces the way I read a colleague&rsquo;s pull request.
            </p>
            <blockquote>
              The question I ask first: is there something here nobody understands yet, and how long does someone get
              to understand it before their first delivery is due?
            </blockquote>
          </div>
        </section>

        {/* Credentials + writing */}
        <section className="section">
          <div className="wrap two-col">
            <div>
              <h2>Credentials</h2>
              <ul className="creds">
                <li>Microsoft Certified: Azure AI Engineer Associate (AI-102)</li>
                <li>Microsoft Certified: Azure Developer Associate (AZ-204)</li>
                <li>GitHub Copilot (GH-300)</li>
                <li>Professional Scrum Master I</li>
                <li>M.Tech, Embedded Systems, NIELIT Calicut</li>
                <li>Built the runner-up entry in a 26-person enterprise leadership programme, 2026</li>
              </ul>
            </div>
            <div>
              <h2>Writing</h2>
              <p className="prose">
                I post on LinkedIn about working inside a large .NET codebase, with the occasional bird, and write
                longer letters at Noesis Letters.
              </p>
              <div className="links">
                <a href={LINKEDIN}>LinkedIn &rarr;</a>
                <a href={LETTERS}>Noesis Letters &rarr;</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <div className="wrap">
            <h2>Contact</h2>
            <p className="contact-line">Open to senior .NET and architect-track roles, remote from India.</p>
            <div className="actions">
              <a className="btn btn-primary" href={LINKEDIN}>
                Message me on LinkedIn
              </a>
              <a className="btn" href={CV}>
                Download CV
              </a>
              <a className="btn" href={GITHUB}>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">Built by hand, with AI in the loop, which is also how I work.</div>
      </footer>
    </>
  );
}
