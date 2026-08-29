import "./SystemBoot.css";

function SystemBoot({ onEnter }) {
  return (
    <section className="system-boot">
      <div className="system-boot-content">
        <p className="system-label">SYSTEM INITIALIZING...</p>

        <h1>PLAYER DETECTED</h1>

        <div className="player-name">ATHARVA SAWANT</div>

        <div className="player-class">
          <span>CLASS:</span> AI/ML ENGINEER
        </div>

        <button className="enter-system-btn" onClick={ onEnter}>
          ENTER SYSTEM
        </button>
      </div>
    </section>
  );
}

export default SystemBoot;