import skills from "../../data/skills";
import "./ShadowArmy.css";

function ShadowArmy() {
  return (
    <section className="shadow-army" id="skills">
      <div className="shadow-header">
        <p>SHADOW EXTRACTION COMPLETE</p>
        <h1>SHADOW ARMY</h1>
        <span>TECHNICAL SKILLS & ABILITIES</span>
      </div>

      <div className="shadow-grid">
        {skills.map((shadow) => (
          <div className="shadow-card" key={shadow.id}>
            <div className="shadow-card-top">
              <div>
                <p className="shadow-rank">{shadow.title}</p>
                <h2>{shadow.shadow}</h2>
              </div>

              <span className="shadow-status">
                {shadow.status}
              </span>
            </div>

            <div className="shadow-skill">
              <span>ABILITY</span>
              <h3>{shadow.skill}</h3>
            </div>

            <div className="mastery-section">
              <div className="mastery-info">
                <span>MASTERY</span>
                <span>{shadow.mastery}%</span>
              </div>

              <div className="mastery-bar">
                <div
                  className="mastery-fill"
                  style={{ width: `${shadow.mastery}%` }}
                ></div>
              </div>
            </div>

            <div className="abilities">
              <span>SKILL SET</span>

              <div className="ability-list">
                {shadow.abilities.map((ability, index) => (
                  <span key={index}>{ability}</span>
                ))}
              </div>
            </div>

            <div className="shadow-category">
              {shadow.category}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShadowArmy;