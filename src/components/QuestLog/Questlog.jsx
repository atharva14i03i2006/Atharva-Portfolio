import "./QuestLog.css";

function QuestLog() {
  const quests = [
    {
      id: 1,
      rank: "S",
      title: "MASTER AI / ML",
      type: "MAIN QUEST",
      description:
        "Strengthen expertise in Artificial Intelligence and Machine Learning.",
      status: "IN PROGRESS",
    },
    {
      id: 2,
      rank: "A",
      title: "BUILD INTELLIGENT SYSTEMS",
      type: "MAIN QUEST",
      description:
        "Design and develop practical AI-powered applications.",
      status: "IN PROGRESS",
    },
    {
      id: 3,
      rank: "A",
      title: "LEVEL UP DEVELOPMENT",
      type: "SIDE QUEST",
      description:
        "Improve full-stack development, APIs, testing, and automation.",
      status: "ACTIVE",
    },
    {
      id: 4,
      rank: "B",
      title: "EXPLORE GAME DEVELOPMENT",
      type: "SIDE QUEST",
      description:
        "Continue building interactive game and creative technology projects.",
      status: "ACTIVE",
    },
    {
      id: 5,
      rank: "B",
      title: "AUTOMATE WITH N8N",
      type: "SIDE QUEST",
      description:
        "Build useful AI and workflow automation systems.",
      status: "LEARNING",
    },
  ];

  return (
    <section className="quest-log" id="quests">
      <div className="quest-header">
        <p>MISSION CONTROL</p>
        <h1>QUEST LOG</h1>
        <span>ACTIVE OBJECTIVES & FUTURE MISSIONS</span>
      </div>

      <div className="quest-list">
        {quests.map((quest) => (
          <div className="quest-card" key={quest.id}>
            <div className="quest-rank">
              <span>RANK</span>
              <strong>{quest.rank}</strong>
            </div>

            <div className="quest-content">
              <p>{quest.type}</p>
              <h2>{quest.title}</h2>
              <span>{quest.description}</span>
            </div>

            <div className="quest-status">
              {quest.status}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuestLog;