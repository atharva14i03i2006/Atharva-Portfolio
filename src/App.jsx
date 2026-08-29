import { useState } from "react";
import SystemBoot from "./components/SystemBoot/SystemBoot";
import PlayerDashboard from "./components/PlayerDashboard/PlayerDashboard";

function App() {
  const [systemEntered, setSystemEntered] = useState(false);

  const handleEnterSystem = () => {
    setSystemEntered(true);
  };

  return (
    <>
      {!systemEntered ? (
        <SystemBoot onEnter={handleEnterSystem} />
      ) : (
        <PlayerDashboard />
      )}
    </>
  );
}

export default App;