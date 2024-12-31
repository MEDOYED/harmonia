import "./report-page.scss";

const RaportPage = () => {
  return (
    <>
      <section className="raport-page raport">
        <h1>Отчет</h1>
        <ul className="raport__options">
          <li className="raport__option active">Тональность</li>
          <li className="raport__option">Эмоции</li>
          <li className="raport__option">Голоса</li>
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
