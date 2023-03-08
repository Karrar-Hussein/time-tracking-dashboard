import Dashboard from "./components/dashboard";
import Reportcard from "./components/report-card";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [timeData, setTimeData] = useState([]);
  const [timeFrame, setTimeFrame] = useState("weekly");
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTimeData(data));
  }, []);

  return (
    <div className="grid-container">
      <Reportcard onPress={(timeFrame) => setTimeFrame(timeFrame)} />
      <Dashboard data={timeData} timeFrame={timeFrame} />
    </div>
  );
}

export default App;
