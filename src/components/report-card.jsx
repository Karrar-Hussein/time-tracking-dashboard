import { useState } from "react";
import usrImg from "../images/image-jeremy.png";

function Reportcard({ onPress }) {
  const [activeIndex, setActiveIndex] = useState(2);
  function handleActiveButton(index) {
    if (index == activeIndex) {
      return "active";
    }
  }
  return (
    <div className="card report-card">
      <div className="header">
        <img src={usrImg} alt="user image" />
        <div>
          <div className="small-text">Report for</div>
          <div className="user-name big-text">Jeremy Robson</div>
        </div>
      </div>
      <div className="report-card__nav">
        <div>
          <button
            className={handleActiveButton(1)}
            onClick={(e) => {
              setActiveIndex(1);
              onPress("daily");
            }}
          >
            Daily
          </button>
        </div>
        <div>
          <button
            className={handleActiveButton(2)}
            onClick={(e) => {
              setActiveIndex(2);
              onPress("weekly");
            }}
          >
            Weekly
          </button>
        </div>
        <div>
          <button
            className={handleActiveButton(3)}
            onClick={(e) => {
              setActiveIndex(3);
              onPress("monthly");
            }}
          >
            Monthly
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reportcard;
