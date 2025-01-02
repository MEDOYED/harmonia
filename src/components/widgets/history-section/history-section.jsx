import HistoryItem from "../history-item/history-item";

import filterIcon from "../../../assets/img/filter-icon.svg";

import "./history-section.scss";

const HistorySection = () => {
  return (
    <div className="profile-page__history-wrapper">
      <div className="profile-page__title history">История скачиваний</div>
      <div className="profile-page__history">
        <ul className="profile-page__history-list">
          <HistoryItem date={"22.12.24"} time={"14:17"} process={"ошибка"} />
          <HistoryItem date={"22.12.24"} time={"14:17"} process={"в процессе"} />
          <HistoryItem date={"21.12.24"} time={"18:21"} process={"завершено"} />
          <HistoryItem date={"21.12.24"} time={"18:21"} process={"в процессе"} />
        </ul>
        <button>
          <img className="filter-img" src={filterIcon} alt="filter icon" />
        </button>
      </div>
    </div>
  );
};

export default HistorySection;
