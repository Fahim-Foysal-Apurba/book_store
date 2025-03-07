import React from 'react';

const Filters = ({
  region,
  setRegion,
  language,
  setLanguage,
  seed,
  setSeed,
  likes,
  setLikes,
  reviews,
  setReviews,
  setView, // Now available as a prop
}) => {
  return (
    <div className="filters row">
      <div className="col-md-3 mb-3">
        <label>Region</label>
        <select className="form-select" value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="USA">USA</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
        </select>
      </div>

      <div className="col-md-3 mb-3">
        <label>Language</label>
        <select className="form-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>

      <div className="col-md-2 mb-3">
        <label>Seed</label>
        <input
          type="number"
          className="form-control"
          value={seed}
          onChange={(e) => setSeed(Number(e.target.value))}
        />
      </div>

      <div className="col-md-2 mb-3">
        <label>Likes per Book</label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          className="form-range"
          value={likes}
          onChange={(e) => setLikes(parseFloat(e.target.value))}
        />
        <span>{likes}</span>
      </div>

      <div className="col-md-2 mb-3">
        <label>Reviews per Book</label>
        <input
          type="number"
          className="form-control"
          value={reviews}
          onChange={(e) => setReviews(parseFloat(e.target.value))}
        />
      </div>

      <div className="col-md-12 mb-3">
        <button className="btn btn-primary me-2" onClick={() => setView('table')}>
          Table View
        </button>
        <button className="btn btn-secondary" onClick={() => setView('gallery')}>
          Gallery View
        </button>
      </div>
    </div>
  );
};

export default Filters;

