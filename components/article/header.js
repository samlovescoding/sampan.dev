export default function Header({ title, subtitle, backdrop }) {
  return (
    <section className="header header-article">
      <div className="header-content container">
        <h1 className="header-title">{title}</h1>
        <h3 className="header-subtitle">{subtitle}</h3>
        <div style={{ height: 200 }}></div>
      </div>
      {backdrop && (
        <div className="header-image-wrapper">
          <img className="header-image" src={backdrop} />
          <div className="header-fade"></div>
        </div>
      )}
    </section>
  );
}
