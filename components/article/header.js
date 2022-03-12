export default function Header() {
  return (
    <section className="header">
      <div className="header-content">
        <h1 className="header-title">The Last of Us Part II</h1>
        <h3 className="header-subtitle">Emotionally Shattering Journey</h3>
        <div style={{ height: 200 }}></div>
      </div>
      <div className="header-image-wrapper">
        <img className="header-image" src="/images/articles/backdrops/the-last-of-us-part-2.jpg" />
        <div className="header-fade"></div>
      </div>
    </section>
  );
}
