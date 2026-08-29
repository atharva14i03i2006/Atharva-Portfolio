import profile from "../../data/profile";
import "./PlayerStatus.css";

function PlayerStatus() {
  return (
    <section className="player-status" id = "status">
      <div className="status-header">
        <p>SYSTEM DATABASE</p>
        <h1>PLAYER STATUS</h1>
      </div>

      <div className="status-panel">
        <div className="player-info">
          <div className="info-row">
            <span>NAME</span>
            <strong>{profile.name}</strong>
          </div>

          <div className="info-row">
            <span>CLASS</span>
            <strong>{profile.class}</strong>
          </div>

          <div className="info-row">
            <span>PATH</span>
            <strong>{profile.careerDirection}</strong>
          </div>

          <div className="info-row">
            <span>LEVEL</span>
            <strong>01</strong>
          </div>

          <div className="info-row">
            <span>RANK</span>
            <strong>UNRANKED</strong>
          </div>
        </div>

        <div className="system-stats">
          <h2>SYSTEM STATS</h2>

          <div className="stat">
            <div>
              <span>INTELLIGENCE</span>
              <span>70</span>
            </div>
            <div className="stat-bar">
              <div className="stat-fill" style={{ width: "70%" }}></div>
            </div>
          </div>

          <div className="stat">
            <div>
              <span>DEXTERITY</span>
              <span>50</span>
            </div>
            <div className="stat-bar">
              <div className="stat-fill" style={{ width: "50%" }}></div>
            </div>
          </div>

          <div className="stat">
            <div>
              <span>EXPERIENCE</span>
              <span>40</span>
            </div>
            <div className="stat-bar">
              <div className="stat-fill" style={{ width: "40%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlayerStatus;