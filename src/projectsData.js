export const projects = [
  {
    slug: "cybersecurity-attack-analysis",
    title: "Cybersecurity Attack Analysis",
    img: "/projects/cybersecurity.jpg",     // put the image in /public/projects/
    summary:
      "40k network records · 25 features · RF/SVM/LogReg/kNN. Non-standard ports ↑ risk; >1200B packets correlate with attacks.",
    details: [
      "Problem: Identify attack types and improve incident response using ML.",
      "Data: 40k network traffic records, 25 metrics (ports, protocols, sizes, anomaly flags).",
      "Models: Random Forest, SVM, Logistic Regression, kNN.",
      "Findings: non-standard ports are risk vectors; large packets correlate with DDoS / exfil; recall prioritized over accuracy.",
      "Outcome: Clear heuristics + ML to support SOC triage and alerting."
    ],
    links: {
      repo: "",          // optional GitHub
      deck: "",          // optional slides
      demo: ""           // optional demo
    }
  },
  {
    slug: "unified-sales-data-warehouse",
    title: "Unified Sales Data Warehouse (Snowflake + dbt)",
    img: "/projects/warehouse.jpg",
    summary:
      "Single source of truth across retail & streaming. Star schema + dbt staging. Reporting latency ↓ ~40%.",
    details: [
      "Problem: Align siloed sources for exec dashboards and finance.",
      "Design: Snowflake star schema (fact_sales) with dbt staging/standardization.",
      "Analytics: Tableau dashboards for revenue, ARPU, churn by segment/channel.",
      "Impact: Reporting latency cut ~40%; consistent KPIs across org."
    ],
    links: {}
  },
  {
    slug: "ai-conversational-sql",
    title: "AI-Driven Conversational SQL (Text-to-SQL)",
    img: "/projects/text2sql.jpg",
    summary:
      "Natural language → SQL with schema-grounded LLM + RAG. Democratizes analytics for non-technical users.",
    details: [
      "Problem: Let business users query data in English.",
      "Approach: LLM + Retrieval-Augmented schema grounding + Network Intent Agent.",
      "Safety: Human-in-the-loop SQL review + guardrails.",
      "Outcome: Faster insights, broader access without deep SQL knowledge."
    ],
    links: {}
  }
];
