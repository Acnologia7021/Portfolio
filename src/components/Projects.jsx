function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title reveal">Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card reveal">
          <h3>Agentic AI Workflow Automation (n8n)</h3>
          <p className="project-desc">
            Built an agentic AI–driven automation system using n8n that
            orchestrates multi-step workflows, integrates external APIs,
            and executes actions based on dynamic decision logic.
          </p>
          <p className="project-tech">
            n8n · JavaScript · REST APIs · Webhooks · Automation
          </p>
          <a
            href="https://github.com/Acnologia7021/N8n_Agentic_Ai"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card reveal">
          <h3>AI-Based News Research & Analysis System</h3>
          <p className="project-desc">
            Developed a news research pipeline that collects, processes,
            and analyzes news articles to extract insights and trends
            using NLP techniques.
          </p>
          <p className="project-tech">
            Python · NLP · Data Analysis · Automation
          </p>
          <a
            href="https://github.com/Acnologia7021/News_Research"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card reveal">
          <h3>Medicine Prescription Pattern Analyzer</h3>
          <p className="project-desc">
            Designed an NLP-based system to analyze prescription data and
            identify drug utilization patterns, supporting data-driven
            insights in healthcare analytics.
          </p>
          <p className="project-tech">
            Python · NLP · Data Processing · Healthcare Analytics
          </p>
          <a
            href="https://github.com/Acnologia7021/Medicine-Prescription-Pattern-Analyzer-for-Drug-Utilization"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
