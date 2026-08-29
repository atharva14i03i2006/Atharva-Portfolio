import "./Inventory.css";

function Inventory() {
  const weapons = [
    {
      id: 1,
      name: "VS Code",
      original: "Kim Sangshik's Steel Sword",
      type: "DEVELOPMENT",
      description: "Primary development environment for coding and debugging.",
      status: "EQUIPPED",
    },
    {
      id: 2,
      name: "Bootstrap",
      original: "Kasaka's Venom Fang",
      type: "UI FRAMEWORK",
      description: "Frontend toolkit for building responsive interfaces.",
      status: "ACTIVE",
    },
    {
      id: 3,
      name: "Postman",
      original: "Knight Killer",
      type: "API TOOL",
      description: "Used for developing, testing, and debugging APIs.",
      status: "ACTIVE",
    },
    {
      id: 4,
      name: "Figma",
      original: "Baruka's Dagger",
      type: "DESIGN",
      description: "UI design, prototyping, and interface planning.",
      status: "ACTIVE",
    },
    {
      id: 5,
      name: "React",
      original: "Demon King's Daggers",
      type: "FRONTEND",
      description: "Component-based library for building interactive interfaces.",
      status: "EQUIPPED",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      original: "Demon King's Longsword",
      type: "STYLING",
      description: "Utility-first approach to building modern interfaces.",
      status: "ACTIVE",
    },
    {
      id: 7,
      name: "Git / GitHub",
      original: "Kamish's Wrath",
      type: "VERSION CONTROL",
      description: "Version control, source management, and project collaboration.",
      status: "EQUIPPED",
    },
    {
      id: 8,
      name: "ChatGPT / DeepSeek",
      original: "Antares' Fangs",
      type: "AI ASSISTANT",
      description:
        "AI-assisted coding, debugging, research, brainstorming, and development support.",
      status: "SYSTEM TOOL",
    },
  ];

  return (
    <section className="inventory" id="inventory">
      <div className="inventory-header">
        <p>SYSTEM STORAGE</p>
        <h1>INVENTORY</h1>
        <span>WEAPONS & DEVELOPMENT TOOLS</span>
      </div>

      <div className="inventory-grid">
        {weapons.map((weapon) => (
          <div className="weapon-card" key={weapon.id}>
            <div className="weapon-top">
              <span className="weapon-number">
                0{weapon.id}
              </span>

              <span className="weapon-status">
                {weapon.status}
              </span>
            </div>

            <p className="weapon-type">{weapon.type}</p>

            <h2>{weapon.name}</h2>

            <div className="weapon-lore">
              <span>WEAPON CLASS</span>
              <strong>{weapon.original}</strong>
            </div>

            <p className="weapon-description">
              {weapon.description}
            </p>

            <div className="weapon-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Inventory;