import { useState } from "react";
import { Link } from "react-router";

import HistorySection from "../../widgets/history-section/history-section";

import eyeIcon from "../../../assets/img/eye.svg";

import "./profile-page.scss";

const ProfilePage = () => {
  const [inputType, setInputType] = useState("password");

  const toggleInputType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <>
      <nav className="profile-page__nav">
        <Link className="header__link" to={"/"}>
          На главную
        </Link>
      </nav>
      <section className="profile-page ">
        <div className="profile-page__change-profile-wrapper">
          <div className="profile-page__title">Редактировать профиль</div>
          <form className="profile-page__profile" action="">
            <p className="profile-page__profile-item">
              <label htmlFor="name">Имя</label>
              <div className="profile-page__profile-item__inner">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
            </p>

            <p className="profile-page__profile-item">
              <label htmlFor="email">E-mail address</label>
              <div className="profile-page__profile-item__inner">
                <input type="text" name="email" id="email" placeholder="example@gmail.com" />
              </div>
            </p>

            <p className="profile-page__profile-item">
              <label htmlFor="surname">Фамилия</label>
              <div className="profile-page__profile-item__inner">
                <input type="text" name="surname" id="surname" placeholder="Surname" />
              </div>
            </p>

            <p className="profile-page__profile-item">
              <label htmlFor="password">Пароль</label>
              <div className="profile-page__profile-item__inner">
                <input type={inputType} name="password" id="password" placeholder="******" />
                <img onClick={toggleInputType} src={eyeIcon} alt="eye" />
              </div>
            </p>
          </form>
        </div>
        <HistorySection />
      </section>
    </>
  );
};

export default ProfilePage;
