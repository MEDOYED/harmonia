import { useRef } from "react";

import "./home-page.scss";

const HomePage = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Выбран файл:", file.name);
    }
  };

  return (
    <>
      <div className="home-page">
        <button className="home-page__button" onClick={handleClick}>
          <h1>Загрузить аудиофайл</h1>
          <h2>Форматы (.mp3, .wav, .ogg) до 1гб</h2>
          <input
            type="file"
            id="file-input"
            accept=".mp3,.wav,.ogg"
            style={{ display: "none" }}
            onChange={handleFileChange}
            ref={inputRef}
          />
        </button>

        <form className="home-page__form">
          <div className="type">
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox-round" />
              <div className="checkbox-inner"></div>
            </div>

            <p>Выгорание</p>
          </div>
          <div className="type">
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox-round" />
              <div className="checkbox-inner"></div>
            </div>
            <p>Эмоциональный анализ</p>
          </div>
          <div className="type">
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox-round" />
              <div className="checkbox-inner"></div>
            </div>
            <p>Скорость речи</p>
          </div>
          <div className="type">
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox-round" />
              <div className="checkbox-inner"></div>
            </div>
            <p>Выбрать все</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default HomePage;
