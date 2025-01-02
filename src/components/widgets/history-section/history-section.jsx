import downloadIcon from "../../../assets/img/download-icon.svg";
import playIcon from "../../../assets/img/play-icon.svg";
import filterIcon from "../../../assets/img/filter-icon.svg";

import "./history-section.scss";

const HistorySection = () => {
  return (
    <div className="profile-page__history-wrapper">
      <div className="profile-page__title history">История скачиваний</div>
      <div className="profile-page__history">
        <ul className="profile-page__history-list">
          <li className="profile-page__history-item">
            <h2 className="title">Название</h2>
            <div className="date">22.12.24</div>
            <time className="time">14:17</time>
            <div className="process">ошибка</div>
            <button>
              <img
                className="download-icon"
                src={downloadIcon}
                alt="download icon"
              />
            </button>
            <button>
              <img className="play-icon" src={playIcon} alt="play icon" />
            </button>
          </li>

          <li className="profile-page__history-item">
            <h2 className="title">Название</h2>
            <div className="date">22.12.24</div>
            <time className="time">14:17</time>
            <div className="process">завершено</div>
            <button>
              <img
                className="download-icon"
                src={downloadIcon}
                alt="download icon"
              />
            </button>
            <button>
              <img className="play-icon" src={playIcon} alt="play icon" />
            </button>
          </li>

          <li className="profile-page__history-item">
            <h2 className="title">Название</h2>
            <div className="date">21.12.24</div>
            <time className="time">18:21</time>
            <div className="process">в процессе</div>
            <button>
              <img
                className="download-icon"
                src={downloadIcon}
                alt="download icon"
              />
            </button>
            <button>
              <img className="play-icon" src={playIcon} alt="play icon" />
            </button>
          </li>

          <li className="profile-page__history-item">
            <h2 className="title">Название</h2>
            <div className="date">21.12.24</div>
            <time className="time">18:21</time>
            <div className="process">в процессе</div>
            <button>
              <img
                className="download-icon"
                src={downloadIcon}
                alt="download icon"
              />
            </button>
            <button>
              <img className="play-icon" src={playIcon} alt="play icon" />
            </button>
          </li>
        </ul>
        <button>
          <img className="filter-img" src={filterIcon} alt="filter icon" />
        </button>
      </div>
    </div>
  );
};

export default HistorySection;
