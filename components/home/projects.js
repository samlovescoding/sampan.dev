import CustomLink from "components/custom-link";

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="section-title">My Projects</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CustomLink href="/articles/case-study-coach">
              <article className="project project-1">
                <div className="project-image-wrapper">
                  <img className="project-image" src="/images/projects/coach_pwa.jpg" />
                </div>
                <h5 className="project-title black">Coach PWA</h5>
              </article>
            </CustomLink>
          </div>
          <div className="col-md-6">
            <CustomLink href="/articles/case-study-pg-developers">
              <article className="project project-2">
                <div className="project-image-wrapper">
                  <img className="project-image" src="/images/projects/pg_developers.jpg" />
                </div>
                <h5 className="project-title ">P&G Developers</h5>
              </article>
            </CustomLink>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12">
            <CustomLink href="/projects/purchasing-platform">
              <article className="project project-3">
                <img className="project-image" src="/images/projects/purchasing_platform_pwa.jpg" />
                <h5 className="project-title">Purchasing Platform PWA</h5>
              </article>
            </CustomLink>
          </div>
        </div> */}
      </div>
    </section>
  );
}
