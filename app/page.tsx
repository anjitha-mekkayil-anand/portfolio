const GITHUB = "https://github.com/anjitha-mekkayil-anand";
const LINKEDIN = "https://linkedin.com/in/anjitha-mekkayil-anand";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <header>
        <h1>Anjitha Mekkayil Anand</h1>
        <p className="tagline">
          I build systems that sense what&rsquo;s going wrong before it breaks
          - since 2006, from factory-floor microcontrollers to AI reasoning
          agents.
        </p>
        <p className="role-line">
          Senior .NET Engineer &middot; Azure &middot; Agentic AI &middot;
          Energy domain (Nordic enterprise) &middot; Mangaluru, India
        </p>
      </header>

      {/* Proof */}
      <section id="work">
        <h2>Selected work</h2>
        <div className="cards">
          <div className="card">
            <h3>Anamnesis</h3>
            <p>
              Retrieval-augmented answering over my own published writing:
              .NET 10, paragraph-aware chunking, embeddings in SQLite, exact
              top-k retrieval, and grounded answers with inline citations
              - Claude primary, automatic failover to OpenAI (Polly).
              Ships with a 20-question eval harness; first baseline:
              hit-rate@5 0.95, MRR 0.90, faithfulness 1.00. The set is
              twenty questions I wrote over my own corpus, so the honest
              read is that it needs adversarial cases before those numbers
              mean much - but it does say &ldquo;the sources don&rsquo;t
              cover this&rdquo; instead of inventing.
            </p>
            <div className="links">
              <a href={`${GITHUB}/anamnesis`}>GitHub</a>
              <a href="https://youtu.be/ZRlSzQ6BE30">Demo (60s)</a>
            </div>
          </div>

          <div className="card">
            <h3>Mathesis</h3>
            <p>
              Multi-agent enterprise learning system: a four-agent pipeline
              (Curator &rarr; Planner &rarr; Assessor &rarr; Manager Insights)
              on Azure AI Foundry with an MCP server - and two human
              approval gates as an architecture decision, not a demo feature.
              Built in under a week after the hackathon rules changed
              overnight; 17 unit tests, consistency evaluation stable across
              8/8 runs.
            </p>
            <div className="links">
              <a href={`${GITHUB}/Mathesis`}>GitHub</a>
              <a href="https://youtu.be/JYVCqiPeCqM">Demo (77s)</a>
            </div>
          </div>

          <div className="card">
            <h3>Pronoia</h3>
            <p>
              Predictive-maintenance AI reasoning agent: .NET 10, MCP server,
              streaming sensor data, a deterministic change-detector prefilter,
              and a human approval queue. The 2026 version of a system I first
              built in 2006.
            </p>
            <div className="links">
              <a href={`${GITHUB}/Pronoia`}>GitHub</a>
              <a href="https://youtu.be/Qn5FaqX1sT8">Demo (69s)</a>
            </div>
          </div>

          <div className="card">
            <h3>Aletheia</h3>
            <p>
              Open-sourced template for an LLM-maintained personal knowledge
              base - the pattern behind the system that runs my own
              notes, drafts, and decisions.
            </p>
            <div className="links">
              <a href={`${GITHUB}/Aletheia`}>GitHub</a>
            </div>
          </div>
        </div>

        <div className="minor-cards">
          <div className="card">
            <h3>Gnomon</h3>
            <p>
              Model-aware router for the Claude API: sends each task to the
              cheapest sufficient model, with per-request cost reporting.
            </p>
            <div className="links">
              <a href={`${GITHUB}/Gnomon`}>GitHub</a>
            </div>
          </div>
          <div className="card">
            <h3>Stentor</h3>
            <p>
              Voice interview coach: speak an answer, get structured feedback
              on STAR shape, filler words, and hedging.
            </p>
            <div className="links">
              <a href={`${GITHUB}/Stentor`}>GitHub</a>
            </div>
          </div>
          <div className="card">
            <h3>Redis Server</h3>
            <p>
              A Redis server from scratch in .NET 10: the real RESP2 wire
              protocol over async TCP, so redis-cli and redis-benchmark talk to
              it directly. Thread-safe store with key expiry; 25 tests including
              a real-socket 25-client concurrency test.
            </p>
            <div className="links">
              <a href={`${GITHUB}/redis-server`}>GitHub</a>
            </div>
          </div>
          <div className="card">
            <h3>Rate Limiter</h3>
            <p>
              All four classic rate-limiting algorithms - token bucket, fixed
              window, sliding-window log and counter - behind one interface, as
              ASP.NET Core middleware. 17 tests; deterministic time via
              TimeProvider.
            </p>
            <div className="links">
              <a href={`${GITHUB}/rate-limiter`}>GitHub</a>
            </div>
          </div>
          <div className="card">
            <h3>Data Privacy Vault</h3>
            <p>
              A tokenization service that swaps sensitive fields for opaque
              tokens and stores the originals AES-256-GCM encrypted, gated by
              scoped API keys - the field-level privacy-masking pattern from
              production, with 15 tests.
            </p>
            <div className="links">
              <a href={`${GITHUB}/data-privacy-vault`}>GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* The pattern */}
      <section id="pattern">
        <h2>The pattern</h2>
        <ul className="timeline">
          <li>
            <span className="year">2006</span> PIC microcontroller factory
            monitor - my first program: sensors, thresholds, alerts.
          </li>
          <li>
            <span className="year">2015</span> Real-time sensor data collection
            on BeagleBone PRUSS - published at ACM WCI &rsquo;15 (
            <a href="https://doi.org/10.1145/2791405.2791408">
              DOI 10.1145/2791405.2791408
            </a>
            ).
          </li>
          <li>
            <span className="year">2019&ndash;22</span> Industrial IoT
            platforms on Azure: device fleets, OTA updates, telemetry at scale.
          </li>
          <li>
            <span className="year">2023&ndash;</span> Enterprise energy
            platform for the Nordic market - .NET modular monolith,
            event-driven, market-compliance workflows.
          </li>
          <li>
            <span className="year">2026</span> AI reasoning agents that watch
            trends and hand decisions to humans in time to act.
          </li>
        </ul>
        <p className="pattern-line">
          Sense the anomaly. Compare to baseline. Tell a human before it
          breaks.
        </p>
      </section>

      {/* How I work */}
      <section id="how">
        <h2>How I work</h2>
        <p>
          I verify before I ship. The projects above carry their own receipts:
          a 20-question eval harness before Anamnesis had a README, 17 unit
          tests in a hackathon that required none, human approval gates as
          architecture rather than demo dressing. As AI writes more of the
          code, judgment becomes the job - mine comes with evidence
          attached.
        </p>
      </section>

      {/* Credentials */}
      <section id="credentials">
        <h2>Credentials</h2>
        <ul className="creds">
          <li>
            Microsoft Certified: Azure AI Engineer Associate (AI-102, renewed
            2026)
          </li>
          <li>Microsoft Certified: Azure Developer Associate (AZ-204)</li>
          <li>GitHub Copilot (GH-300)</li>
          <li>Professional Scrum Master I</li>
          <li>ACM publication, WCI &rsquo;15 - linked above</li>
          <li>12+ years professional engineering</li>
          <li>
            Runner-up in a 26-person enterprise leadership programme, 2026
          </li>
        </ul>
      </section>

      {/* Writing */}
      <section id="writing">
        <h2>Writing</h2>
        <p>
          I write about AI-assisted engineering - workflows, agent
          design, and what actually holds up in production.{" "}
          <a href={LINKEDIN}>Read on LinkedIn &rarr;</a>
        </p>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact</h2>
        <div className="contact-row">
          <a href={LINKEDIN}>LinkedIn</a>
          <a href={GITHUB}>GitHub</a>
          <a href="/Anjitha-Mekkayil-Anand-CV.pdf">CV (PDF)</a>
        </div>
      </section>

      <footer>
        Built by hand, with AI in the loop - which is also how I work.
      </footer>
    </main>
  );
}
