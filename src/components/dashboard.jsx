import DashBoardCard from "./dashboard-card";

function Dashboard({ data, timeFrame }) {
  function formatPreviousText() {
    if (timeFrame === "daily") {
      return "Yesterday";
    } else if (timeFrame === "weekly") {
      return "Last Week";
    } else {
      return "Last Month";
    }
  }
  return (
    <>
      {data.map((e) => {
        return (
          <DashBoardCard
            key={crypto.randomUUID()}
            title={e.title}
            timeInfo={e.timeframes[timeFrame]}
            prevText={formatPreviousText()}
          />
        );
      })}
    </>
  );
}

export default Dashboard;
