import { ReactComponent as Threedots } from "../images/icon-ellipsis.svg";

function DashBoardCard({ title, timeInfo, prevText }) {
  return (
    <div className="card banner">
      <div className="card__content">
        <div className="card__content__nav">
          <div className="card__title">{title}</div>
          <Threedots />
        </div>
        <div className="card__content__info">
          <div className="big-text">{timeInfo.current}hrs</div>
          <div className="small-text light-text">
            {prevText} - {timeInfo.previous}hrs
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardCard;
