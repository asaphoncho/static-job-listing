import { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  let filteredData;
  const [roles, setRoles] = useState(data);
  const [filterTags, setFilterTags] = useState([]);
  const [filterState, setFilterState] = useState(false);

  function handleTag(event) {
    const tag = event.target.textContent;
    setFilterTags((f) => [...f, tag]);
    if (window.innerWidth < 500 && !filterState) {
      setFilterState(true);
    }
  }
  function handleRemove(index) {
    setFilterTags((f) => filterTags.filter((_, i) => i !== index));
  }
  function handleClear() {
    setFilterTags([]);
    setFilterState(false);
  }

  return (
    <>
      <div className="main-section">
        <div
          className="filter-section"
          style={
            window.innerWidth < 500 && filterState === false
              ? { display: "none" }
              : { display: "flexbox" }
          }
        >
          <div className="added-tags">
            {filterTags.map((ft, index) => (
              <div key={index} className="filtertag">
                <div
                  className="tag"
                  style={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  {ft}
                </div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(index)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            ))}
          </div>
          <button className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>
        <div className="header"></div>
        <div
          className="roles-container"
          style={
            filterState && window.innerWidth < 500
              ? { marginTop: "2.5rem" }
              : null
          }
        >
          {roles
            .filter((role) => {
              const tags = [
                role.role,
                role.level,
                ...role.languages,
                ...role.tools,
              ];
              return filterTags.every((tag) => tags.includes(tag));
            })
            .map((role, index) => (
              <div
                key={index}
                className="role-card"
                style={
                  role.featured == true
                    ? { borderLeft: "solid 7px hsl(180, 29%, 50%)" }
                    : null
                }
              >
                {window.innerWidth <= 500 ? (
                  <div className="logo-div">
                    {<img src={role.logo} alt={role.company + " logo"} />}
                  </div>
                ) : null}
                <div className="first-part">
                  {window.innerWidth > 500 ? (
                    <div className="logo-div">
                      {<img src={role.logo} alt={role.company + " logo"} />}
                    </div>
                  ) : null}

                  <div className="role-details">
                    <div className="role-headings">
                      <span>{role.company}</span>
                      <div className="labels-container">
                        {role.isNew == true ? (
                          <div className="new-label">NEW!</div>
                        ) : null}
                        {role.featured == true ? (
                          <div className="featured-label">FEATURED</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="position-title">{role.position}</div>
                    <div className="more-details">
                      <span>{role.postedAt}</span>
                      <i
                        className="fa-solid fa-circle"
                        style={{ fontSize: "0.2rem" }}
                      ></i>
                      <span>{role.contract}</span>
                      <i
                        className="fa-solid fa-circle"
                        style={{ fontSize: "0.2rem" }}
                      ></i>
                      <span>{role.location}</span>
                    </div>
                  </div>
                </div>
                <div className="tags">
                  <button className="tag" onClick={handleTag}>
                    {role.role}
                  </button>
                  <button className="tag" onClick={handleTag}>
                    {role.level}
                  </button>
                  {role.languages.map((language, index) => (
                    <button className="tag" onClick={handleTag} key={index}>
                      {language}
                    </button>
                  ))}
                  {role.tools.map((tool, index) => (
                    <button className="tag" onClick={handleTag} key={index}>
                      {tool}
                    </button>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
