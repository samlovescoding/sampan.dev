import BlobBehance from "components/blobs/behance";
import BlobDiscord from "components/blobs/discord";
import BlobGithub from "components/blobs/github";
import BlobTwitter from "components/blobs/twitter";
import BlobYouTube from "components/blobs/youtube";
import { useState, useEffect } from "react";

export default function Header() {
  const [headerImageOpacity, setHeaderImageOpacity] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", calculateHeaderImageOpacity);

    return () => {
      window.removeEventListener("scroll", calculateHeaderImageOpacity);
    };
  }, []);

  function calculateHeaderImageOpacity() {
    const opacity = 1 - window.scrollY / (window.innerHeight * 1.1);
    setHeaderImageOpacity(opacity);
  }

  return (
    <section className="header">
      <div className="header-content">
        <h1 className="header-title">@samlovescoding</h1>
        <h3 className="header-subtitle">
          Senior Software Developer &{" "}
          <u>
            <i>Gamer</i>
          </u>
        </h3>
        <div className="header-social">
          <div className="header-social-icon header-social-icon-twitter">
            <BlobTwitter
              href="http://twitter.com/TheSampanVerma"
              duration="10s"
            />
          </div>
          <div className="header-social-icon header-social-icon-github">
            <BlobGithub
              href="http://github.com/samlovescoding"
              duration="10s"
            />
          </div>
          <div className="header-social-icon header-social-icon-youtube">
            <BlobYouTube
              href="https://www.youtube.com/channel/UC7lDoOK7XKlXtCf8RiEgVfQ"
              duration="10s"
            />
          </div>
          <div className="header-social-icon header-social-icon-behance">
            <BlobBehance
              href="http://behance.net/infinityengine"
              duration="10s"
            />
          </div>
          <div className="header-social-icon header-social-icon-discord">
            <BlobDiscord
              href="https://discordapp.com/users/252154038697721857"
              duration="10s"
            />
          </div>
        </div>
      </div>
      <div className="header-image-wrapper">
        <img
          className="header-image"
          src="/images/background.jpg"
          style={{ opacity: headerImageOpacity }}
        />
        <div className="header-fade"></div>
      </div>
    </section>
  );
}
