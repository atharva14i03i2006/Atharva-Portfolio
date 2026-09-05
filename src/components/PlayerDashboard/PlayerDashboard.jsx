import SystemAI from "../SystemAI/SystemAI";
import "./PlayerDashboard.css";
import profile from "../../data/profile";

import Inventory from "../Inventory/Inventory";
import QuestLog from "../QuestLog/QuestLog";
import ShadowArmy from "../ShadowArmy/ShadowArmy";
import PlayerStatus from "../PlayerStatus/PlayerStatus";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";

function PlayerDashboard() {
  return (
  <>
    <Navbar />

    <main className="player-dashboard">
      <div className="dashboard-header">
        <div>
          <p className="system-status">SYSTEM ONLINE</p>

          <h1>WELCOME, {profile.name}</h1>

          <p className="dashboard-class">
            CLASS: {profile.class}
          </p>
        </div>

        <div className="system-level">
          <span>LEVEL</span>
          <strong>01</strong>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <span>PLAYER</span>
          <h2>{profile.name}</h2>
        </div>

        <div className="dashboard-card">
          <span>CLASS</span>
          <h2>{profile.class}</h2>
        </div>

        <div className="dashboard-card">
          <span>PRIMARY PATH</span>
          <h2>{profile.careerDirection}</h2>
        </div>

        <div className="dashboard-card dashboard-bio">
          <span>SYSTEM PROFILE</span>
          <p>{profile.bio}</p>
        </div>
      </div>
    </main>

    <PlayerStatus />

    <ShadowArmy />

    <QuestLog />

    <Inventory />

    <Projects />

    <SystemAI />
  </>
);
}

export default PlayerDashboard;