import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-header">
        <p>PROJECT DATABASE</p>

        <h1>PROJECTS</h1>

        <span>
          RAID SYSTEM // ACTIVE & CLEARED MISSIONS
        </span>
      </div>

      <div className="raid-board">

        {projects.map((project, index) => (

          <article className="raid-card" key={project.id || index}>

            {/* TOP */}
            <div className="raid-top">

              <div className="raid-rank">
                <span>RANK</span>
                <strong>{project.rank || "C"}</strong>
              </div>

              <div className="raid-id">
                RAID_{String(index + 1).padStart(2, "0")}
              </div>

              <div className="raid-status">
                {project.status || "CLEARED"}
              </div>

            </div>


            {/* CONTENT */}
            <div className="raid-content">

              <p>
                {project.type || "PROJECT"}
              </p>

              <h2>
                {project.name || project.title}
              </h2>

              <span className="raid-description">
                {project.description}
              </span>

            </div>


            {/* TECHNOLOGIES */}
            <div className="raid-bottom">

              <div className="raid-tech">

                {(project.technologies || []).map(
                  (technology, techIndex) => (
                    <span key={techIndex}>
                      {technology}
                    </span>
                  )
                )}

              </div>

              <span className="raid-clear">

                {project.status === "IN PROGRESS"
                  ? "MISSION ACTIVE"
                  : "MISSION CLEARED"}

              </span>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;