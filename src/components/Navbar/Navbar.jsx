import "./Navbar.css";

function Navbar() {
  return (
    <nav className="system-navbar">
      <div className="nav-logo">
        ATHARVA<span>.SYS</span>
      </div>

      <div className="nav-links">
        <a href="#status">STATUS</a>
        <a href="#skills">SHADOW ARMY</a>
        <a href="#quests">QUESTS</a>
        <a href="#inventory">INVENTORY</a>
        <a href="#projects">RAID BOARD</a>
        <a href="#system-ai">SYSTEM AI</a>
        <a href="#guild">GUILD</a>
      </div>
    </nav>
  );
}

export default Navbar;