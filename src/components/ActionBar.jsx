import { site } from '../data/site';

// Phone-only shortcuts to the two things visitors need most.
export default function ActionBar() {
  return (
    <div className="action-bar">
      <a className="btn btn-ghost-dark" href="#menu">Menu</a>
      {site.phone
        ? <a className="btn" href={`tel:${site.phone.replace(/\s/g, '')}`}>Call</a>
        : <a className="btn" href={site.directionsUrl} target="_blank" rel="noopener noreferrer">Directions</a>}
    </div>
  );
}
