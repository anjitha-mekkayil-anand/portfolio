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
          &mdash; twenty years of it, from factory-floor microcontrollers to AI
          reasoning agents.
        </p>
        <p className="role-line">
          Senior .NET Engineer &middot; Azure &middot; Agentic AI &middot;
          Energy domain (Nordic enterprise) &middot; Kerala, India
        </p>
      </header>

      {/* Proof */}
      <section id="work">
        <h2>Selected work</h2>
        <div className="cards">
          <div className="card">
            <h3>Mathesis</h3>
            <p>
              Multi-agent enterprise learning system: a four-agent pipeline
              (Curator &rarr; Planner &rarr; Assessor &rarr; Manager Insights)
              on Azure AI Foundry with an MCP server &mdash; and two human
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
              base &mdash; the pattern behind the system that runs my own
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
        </div>
      </section>

      {/* The pattern */}
      <section id="pattern">
        <h2>The pattern</h2>
        <ul className="timeline">
          <li>
            <span className="year">2006</span> PIC microcontroller factory
            monitor &mdash; my first program: sensors, thresholds, alerts.
          </li>
          <li>
            <span className="year">2015</span> Real-time sensor data collection
            on BeagleBone PRUSS &mdash; published at ACM WCI &rsquo;15 (
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
            platform for the Nordic market &mdash; .NET modular monolith,
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

      {/* Credentials */}
      <section id="credentials">
        <h2>Credentials</h2>
        <ul className="creds">
          <li>
            Microsoft Certified: Azure AI Engineer Associate (AI-102, renewed
            2026)
          </li>
          <li>Microsoft Certified: Azure Developer Associate (AZ-204)</li>
          <li>GitHub Copilot (GH-300) &middot; Professional Scrum Master I</li>
          <li>ACM publication, WCI &rsquo;15 &mdash; linked above</li>
          <li>
            12+ years professional engineering &middot; Runner-up in a
            26-person enterprise leadership programme, 2026
          </li>
        </ul>
      </section>

      {/* Writing */}
      <section id="writing">
        <h2>Writing</h2>
        <p>
          I write about AI-assisted engineering &mdash; workflows, agent
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
        </div>
      </section>

      <footer>
        Built by hand, with AI in the loop &mdash; which is also how I work.
      </footer>
    </main>
  );
}
