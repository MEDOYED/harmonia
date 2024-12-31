import { useState } from "react";

import "./report-page.scss";

const RaportPage = () => {
  const [activeOption, setActiveOption] = useState(0);

  const options = ["Тональность", "Эмоции", "Голоса"];

  const handleClick = (index) => {
    setActiveOption(index);
  };

  return (
    <>
      <section className="raport-page raport">
        <h1>Отчет</h1>
        <ul className="raport__options">
          {options.map((option, index) => (
            <li
              key={index}
              className={`raport__option ${activeOption === index ? "active" : ""}`}
              onClick={() => handleClick(index)}>
              {option}
            </li>
          ))}
        </ul>

        <p className="raport__description">
          Тут будет описываться сам отчет по каждой категории отдельно Тут будет
          описываться сам отчет по каждой категории отдельно Тут будет
          описываться сам отчет по каждой категории отдельно Тут будет
          описываться сам отчет по каждой категории отдельно Тут будет
          описываться сам отчет по каждой категории отдельно Тут будет
          описываться сам отчет по каждой категории отдельно
        </p>

        <a
          className="raport__download-btn"
          href="path/to/your/file.pdf"
          download
        >
          Скачать отчет
        </a>
      </section>
    </>
  );
};

export default RaportPage;
