export default function Projects() {
  return (
    <section className="projects">
      <h1 className="section-title">My Projects</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <article className="project project-1">
              <img className="project-image" src="/images/projects/coach_pwa.jpg" />
              <h5 className="project-title black">Coach PWA</h5>
            </article>
          </div>
          <div className="col-md-6">
            <article className="project project-2">
              <img className="project-image" src="/images/projects/pg_developers.jpg" />
              <h5 className="project-title">P&G Developers Portal</h5>
            </article>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <article className="project project-3">
              <img className="project-image" src="/images/projects/purchasing_platform_pwa.jpg" />
              <h5 className="project-title">Purchasing Platform PWA</h5>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
