import { useRef } from "react";
import CheckBox from "../../widgets/checkbox/checkbox";
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
            <CheckBox />

            <p>Выгорание</p>
          </div>
          <div className="type">
            <CheckBox />
            <p>Эмоциональный анализ</p>
          </div>
          <div className="type">
            <CheckBox />
            <p>Скорость речи</p>
          </div>
          <div className="type">
            <CheckBox />
            <p>Выбрать все</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default HomePage;
