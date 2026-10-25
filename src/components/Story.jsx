import { site } from '../data/site';

export default function Story() {
  return (
    <section id="story" className="story">
      <figure className="story-badge" data-reveal>
        <img src="/logo.png" alt="No.3 Hangout logo — Simple moments, better days" width="256" height="256" loading="lazy" />
      </figure>
      <div className="story-body" data-reveal>
        <p className="kicker">Our story</p>
        <h2 className="story-quote">Simple moments.<br /><span className="accent">Better days.</span></h2>
        {site.story.map((p) => <p key={p}>{p}</p>)}
        <a className="link" href="#visit">Come say hello →</a>
      </div>
    </section>
  );
}
