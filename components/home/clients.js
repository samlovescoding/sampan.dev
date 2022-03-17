import { useEffect, useRef, useState } from "react";

function Client({ image }) {
  const articleRef = useRef();
  const [articleHeight, setArticleHeight] = useState("0px");

  useEffect(() => {
    calculateArticleHeight();

    window.addEventListener("resize", calculateArticleHeight);

    return () => {
      window.removeEventListener("resize", calculateArticleHeight);
    };
  }, []);

  function calculateArticleHeight() {
    setArticleHeight(articleRef.current.getBoundingClientRect().width + "px");
  }

  return (
    <div className="col-md-3 col-sm-6">
      <article ref={articleRef} className="client" style={{ height: articleHeight }}>
        <img className="client-image" src={image} />
      </article>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="clients">
      <h1 className="section-title">I Worked With</h1>

      <div className="container">
        <div className="row">
          <Client image="/images/clients/coach.png" />
          <Client image="/images/clients/pg.png" />
          <Client image="/images/clients/purchasing-platform.png" />
          <Client image="/images/clients/zenbase.png" />
        </div>
        <div className="row">
          <Client image="/images/clients/maxicus.png" />
          <Client image="/images/clients/litmus7.svg" />
        </div>
      </div>
    </section>
  );
}
