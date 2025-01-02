import downloadIcon from "../../../assets/img/download-icon.svg";
import playIcon from "../../../assets/img/play-icon.svg";

import "./history-item.scss";

const HistoryItem = ({ date, time, process }) => {
  return (
    <div>
      <li className="profile-page__history-item">
        <h2 className="title">Название</h2>
        <div className="date">{date}</div>
        <time className="time">{time}</time>
        <div className="process">{process}</div>
        <button>
          <img className="download-icon" src={downloadIcon} alt="download icon" />
        </button>
        <button>
          <img className="play-icon" src={playIcon} alt="play icon" />
        </button>
      </li>
    </div>
  );
};

export default HistoryItem;
