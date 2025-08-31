import { Link, useNavigate, useParams } from "react-router-dom";

const LINKS = {
  cyberRepo: "https://github.com/Jrgio29/Cybersecurity-Analytics",
  warehouseRepo: "https://github.com/Jrgio29/ist722dbt/tree/Jrgio29-patch-1",
};

function RepoSection({ url, note }) {
  return (
    <section className="card-dark rounded-2xl p-8 space-y-4">
      <h3 className="project-subheading">Code Repository</h3>

      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-200 border border-white/20 text-slate-900 font-semibold w-max"
        >
          {/* GitHub icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-slate-900"
          >
            <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 
                    7.86 10.9.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.34-3.87-1.34-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71
                    1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.76.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.68
                    0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.47.11-3.07 
                    0 0 .98-.31 3.2 1.17a11.1 
                    11.1 0 0 1 5.83 0c2.22-1.48 
                    3.19-1.17 3.19-1.17.63 1.6.23 2.78.11 3.07.75.8 
                    1.2 1.82 1.2 3.07 0 4.41-2.69 5.39-5.26 
                    5.67.42.37.8 1.1.8 
                    2.22v3.29c0 .31.21.67.8.56A11.51 
                    11.51 0 0 0 23.5 12 
                    11.5 11.5 0 0 0 12 .5z"/>
          </svg>
          View Code on GitHub
        </a>
      ) : (
        <p className="project-text">
          {note || "Repository available on request."}
        </p>
      )}
    </section>
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
      <h3 className="project-subheading">{title}</h3>
      {children}
    </section>
  );
}

/** --- Individual project renders --- */

function CybersecurityDetail() {
  return (
    <>
      <header className="space-y-3 text-center">
        <h1 className="project-title scroll-pad">Cybersecurity Attack Analysis</h1>
        <p className="project-lead max-w-3xl mx-auto">
          Built a machine-learning pipeline to detect cyberattack types from network telemetry.
          Compared Logistic Regression, kNN, SVM, and Random Forest on 40k rows × 25 features.
          Prioritized <strong>recall</strong> for security use-cases; overall accuracy plateaued
          around <strong>~34%</strong> due to lack of payload visibility. Key heuristics (e.g.,
          non-standard ports, large packets) meaningfully improved analyst triage.
        </p>
      </header>

      <img
        src="/projects/cybersecurity-hero.jpg"
        alt="Cybersecurity project hero"
        className="project-hero w-full max-w-5xl mx-auto rounded-2xl border border-white/10 shadow-md"
        style={{ aspectRatio: "16 / 9" }}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Dataset Size" value="40,000 rows" />
        <Stat label="Features" value="25 signals" />
        <Stat label="Primary Metric" value="Recall" />
        <Stat label="Top Model" value="Random Forest" />
      </div>

      <Section title="Problem">
        <p className="project-text">
          Detect and characterize cyberattacks from routine network traffic to reduce response time
          and triage effort. Emphasis on <strong>recall</strong> (catching attacks) over raw accuracy.
        </p>
      </Section>

      <Section title="Data">
        <p className="project-text">
          Kaggle cybersecurity telemetry (ports, protocols, packet length/type, alerts, OS, geo,
          anomaly score, etc.). Converted alert columns to binary flags, extracted hour-of-day,
          scaled numeric features, encoded categoricals, and dropped unique identifiers to avoid
          overfitting.
        </p>
      </Section>

      <Section title="Modeling & Methods">
        <ul className="project-list list-disc ml-6 space-y-2">
          <li>Algorithms: Logistic Regression, kNN, SVM, Random Forest.</li>
          <li>Primary selection criterion: high recall for attack classes.</li>
          <li>Random Forest chosen for best recall and explainability (feature importance & paths).</li>
        </ul>
      </Section>

      <Section title="Key Findings">
        <ul className="project-list list-disc ml-6 space-y-2">
          <li>
            <strong>Non-standard ports</strong> carried DNS/FTP/HTTP activity → likely tunneling/evasion;
            monitor high/dynamic ports closely.
          </li>
          <li>
            <strong>Large packets (≥1200 bytes)</strong> correlated with intrusions—simple, explainable
            heuristic to layer alongside ML scoring.
          </li>
          <li>
            <strong>OS targeting:</strong> Windows ≫ Linux &gt; macOS—prioritize patching/controls and triage
            for Windows fleets.
          </li>
          <li>
            <strong>Geo hot-spots</strong> aligned with exposure patterns; useful for geo-aware risk scoring.
          </li>
        </ul>
      </Section>

      <Section title="Limitations & Next Steps">
        <ul className="project-list list-disc ml-6 space-y-2">
          <li>No payload visibility capped model discrimination on subtle attacks.</li>
          <li>Consider richer flow features and class-weighted/focal loss.</li>
          <li>Add analyst-in-the-loop feedback to reduce false positives.</li>
        </ul>
      </Section>
      <RepoSection url={LINKS.cyberRepo} />
    </>
  );
}

function WarehouseDetail() {
  return (
    <>
      <header className="space-y-3 text-center">
        <h1 className="project-title scroll-pad">
          Unified Sales Data Warehouse (Snowflake + dbt)
        </h1>
        <p className="project-lead max-w-3xl mx-auto">
          Designed and implemented a dimensional model in Snowflake with dbt transformations to
          unify retail and streaming sources. Established conformed dimensions and a central{" "}
          <strong>fact_sales</strong> plus a <strong>fact_streaming_engagement</strong> for behavioral
          analytics. Powering executive dashboards with consistent KPIs.
        </p>
      </header>

      <img
        src="/projects/warehouse-hero.jpg"
        alt="Warehouse project hero"
        className="project-hero w-full max-w-5xl mx-auto rounded-2xl border border-white/10 shadow-md"
        style={{ aspectRatio: "16 / 9" }}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Warehouse" value="Snowflake" />
        <Stat label="Transformations" value="dbt" />
        <Stat label="BI" value="Tableau / Power BI" />
        <Stat label="Outcome" value="Consistent KPIs, faster reporting" />
      </div>

      <Section title="Problem">
        <p className="project-text">
          Business teams consumed metrics from siloed systems with conflicting definitions. We needed
          a <strong>single source of truth</strong> with standardized business logic and low-latency
          reporting.
        </p>
      </Section>

      <Section title="Design & Dimensional Modeling">
        <ul className="project-list list-disc ml-6 space-y-2">
          <li>
            Star schema with <strong>fact_sales</strong> at its core (grain: order line/day), conformed
            dimensions (date, product, customer, channel, region).
          </li>
          <li>
            Parallel <strong>fact_streaming_engagement</strong> (grain: user-day or session) to measure plays,
            watch time, retention and ARPU drivers.
          </li>
          <li>
            dbt staging models for standardization, type casting, surrogate keys, and SCD handling for
            slowly changing dimensions.
          </li>
        </ul>
      </Section>

      <Section title="Analytics & Dashboards">
        <ul className="project-list list-disc ml-6 space-y-2">
          <li>
            <strong>Sales:</strong> revenue, ARPU, segment/channel mix, promo impact, regional performance.
          </li>
          <li>
            <strong>Streaming:</strong> engagement funnels, retention curves, content performance.
          </li>
        </ul>
      </Section>

      <Section title="Data Quality & Governance">
        <ul className="project-list list-disc ml-6 space-y-2">
          <li><strong>Reconciliation</strong> across sources and grain alignment.</li>
          <li>Assumptions documented in dbt and surfaced to BI.</li>
          <li>Clear <strong>analysis levels</strong> (daily, weekly, monthly) to avoid mixed grain reporting.</li>
        </ul>
      </Section>

      <Section title="Biggest Challenges">
        <ul className="project-list list-disc ml-6 space-y-2">
          <li>Upstream schema drift and late-arriving facts.</li>
          <li>Aligning legacy KPI definitions across teams.</li>
          <li>Performance tuning (clustering/partitioning & dbt materializations).</li>
        </ul>
      </Section>

      <RepoSection url={LINKS.warehouseRepo} />
    </>
  );
}

function TextToSQLDetail() {
  return (
    <>
      <header className="space-y-3 text-center">
        <h1 className="project-title scroll-pad">
          AI-Driven Conversational SQL (Text-to-SQL)
        </h1>
        <p className="project-lead max-w-3xl mx-auto">
          Natural-language interface that lets business and operations users query enterprise data
          using plain English. Schema-grounded LLM (Gemini Pro) + RAG + a Network Intent Agent
          produce executable SQL with guardrails and human-in-the-loop validation.
        </p>
      </header>

      <img
        src="/projects/text2sql-hero.jpg"
        alt="Text-to-SQL hero"
        className="project-hero w-full max-w-5xl mx-auto rounded-2xl border border-white/10 shadow-md"
        style={{ aspectRatio: "16 / 9" }}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Primary Goal" value="Reduce time-to-insight" />
        <Stat label="LLM" value="Gemini Pro" />
        <Stat label="Context" value="RAG + Network Intent Agent" />
        <Stat label="Output" value="Executable SQL" />
      </div>

      <Section title="Problem Statement">
        <p className="project-text">
          Reduce dependency on technical teams by enabling non-technical users to generate SQL queries
          from natural-language questions—accelerating decisions and democratizing access to data.
        </p>
      </Section>

      <Section title="Data Sources">
        <ul className="project-list list-disc ml-6 space-y-2">
          <li>Network and operations databases (Verizon).</li>
          <li>Metadata schemas accessed via RAG for schema grounding.</li>
        </ul>
      </Section>

      <Section title="Techniques & Tools">
        <ul className="project-list list-disc ml-6 space-y-2">
          <li>
            <strong>Data preparation & contextualization:</strong> database schemas embedded in a vector
            store; queries enriched with Verizon-specific network knowledge via a <em>Network Intent Agent</em>.
          </li>
          <li>
            <strong>Modeling & processing:</strong> Gemini Pro for NL → SQL; schema validation via APIs;
            output is an executable SQL query ready to run.
          </li>
          <li>
            <strong>Guardrails & review:</strong> Human-in-the-loop review before execution to confirm intent
            and avoid unsafe/invalid statements.
          </li>
        </ul>
      </Section>

      <Section title="Example UI & Flow">
        <div className="grid md:grid-cols-3 gap-6">
          <figure className="text-center">
            <img
              src="/projects/text2sql-input.png"
              alt="Text-to-SQL Input"
              className="rounded-8xl border border-white/10 mx-auto"
              style={{ maxWidth: "640px", maxHeight: "520px", objectFit: "contain" }}
            />
            <figcaption className="text-sm opacity-80 mt-2">Figure 5: Text-to-SQL Input</figcaption>
          </figure>
          <figure className="text-center">
            <img
              src="/projects/text2sql-output.png"
              alt="Text-to-SQL Output"
              className="rounded-8xl border border-white/10 mx-auto"
              style={{ maxWidth: "640px", maxHeight: "520px", objectFit: "contain" }}
            />
            <figcaption className="text-sm opacity-80 mt-2">Figure 6: Text-to-SQL Output (SQL preview)</figcaption>
          </figure>
          <figure className="text-center">
            <img
              src="/projects/text2sql-workflow.png"
              alt="Text-to-SQL Workflow"
              className="rounded-8xl border border-white/10 mx-auto"
              style={{ maxWidth: "640px", maxHeight: "520px", objectFit: "contain" }}
            />
            <figcaption className="text-sm opacity-80 mt-2">Figure 7: Text-to-SQL Workflow</figcaption>
          </figure>
        </div>
      </Section>

      <Section title="Findings">
        <ul className="project-list list-disc ml-6 space-y-2">
          <li><strong>Time savings:</strong> hours → minutes for common questions.</li>
          <li><strong>User empowerment:</strong> non-technical staff can self-serve insights.</li>
          <li><strong>Democratized access:</strong> broader usage and faster cross-functional analytics.</li>
        </ul>
      </Section>

      <Section title="Learning Outcomes">
        <ul className="project-list list-disc ml-6 space-y-2">
          <li><strong>Guardrails matter:</strong> schema grounding + intent checking are essential.</li>
          <li><strong>Human-in-the-loop:</strong> SQL review prior to execution increases trust.</li>
          <li><strong>Scalability:</strong> expand schema coverage + prompt tuning to 50+ databases.</li>
        </ul>
      </Section>

      <Section title="Code Repository">
        <p className="project-text">Proprietary (Verizon); code not publicly available.</p>
      </Section>
    </>
  );
}

/** --- Router wrapper that chooses which project to render --- */

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const content = {
    "cybersecurity-attack-analysis": <CybersecurityDetail />,
    "unified-sales-data-warehouse": <WarehouseDetail />,
    "ai-conversational-sql": <TextToSQLDetail />,
  }[slug];

  if (!content) {
    return (
      <main className="page-dark section-padding">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="project-title">Project not found</h2>
          <p className="project-text mt-4">
            Try going back to <Link className="nav-link" to="/projects">Projects</Link>.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-dark section-padding">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
        >
          ← Back
        </button>

        {content}
      </div>
    </main>
  );
}