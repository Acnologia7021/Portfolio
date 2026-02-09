function Projects() {
  return (
    <section className="projects">
      <h2 className="section-title reveal">Projects</h2>

      <div className="projects-grid">
        <div className="project-card reveal">
          <h3>Workflow Automation Platform</h3>
          <p className="project-desc">
            Designed and automated multi-step workflows using event-driven
            triggers, APIs, and conditional logic to reduce manual effort.
          </p>
          <p className="project-tech">
            n8n · REST APIs · JavaScript · Webhooks
          </p>
        </div>

        <div className="project-card reveal">
          <h3>Intelligent Process Automation System</h3>
          <p className="project-desc">
            Built automation pipelines with rule-based and data-driven logic
            to automatically route and execute repetitive processes.
          </p>
          <p className="project-tech">
            Python · Workflow Orchestration · Automation Logic
          </p>
        </div>

        <div className="project-card reveal">
          <h3>ML-Assisted Automation</h3>
          <p className="project-desc">
            Integrated machine learning predictions into automation workflows
            to enable data-driven decision making instead of static rules.
          </p>
          <p className="project-tech">
            Python · Pandas · Scikit-learn · Automation Pipelines
          </p>
        </div>

        <div className="project-card reveal">
          <h3>System & Task Automation Tools</h3>
          <p className="project-desc">
            Developed small automation utilities to streamline repetitive
            system-level tasks and improve operational reliability.
          </p>
          <p className="project-tech">
            Python · Scripting · Task Scheduling
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
