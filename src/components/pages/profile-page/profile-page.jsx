import { useState } from "react";

import HistorySection from "../../widgets/history-section/history-section";

import eyeIcon from "../../../assets/img/eye.svg";

import "./profile-page.scss";

const ProfilePage = () => {
  const [inputTypes, setInputTypes] = useState({
    name: "password",
    email: "password",
    surname: "password",
    password: "password",
  });

  const toggleInputType = (field) => {
    setInputTypes((prevTypes) => ({
      ...prevTypes,
      [field]: prevTypes[field] === "password" ? "text" : "password",
    }));
  };

  return (
    <>
      <section className="profile-page ">
        <div className="profile-page__change-profile-wrapper">
          <div className="profile-page__title">Редактировать профиль</div>
          <form className="profile-page__profile" action="">
            <p className="profile-page__profile-item">
              <label htmlFor="name">Имя</label>
              <div className="profile-page__profile-item__inner">
                <input type={inputTypes.name} name="name" id="name" placeholder="Name" />
                <img onClick={() => toggleInputType("name")} src={eyeIcon} alt="eye" />
              </div>
            </p>

            <p className="profile-page__profile-item">
              <label htmlFor="email">E-mail address</label>
              <div className="profile-page__profile-item__inner">
                <input
                  type={inputTypes.email}
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                />
                <img onClick={() => toggleInputType("email")} src={eyeIcon} alt="eye" />
              </div>
            </p>

            <p className="profile-page__profile-item">
              <label htmlFor="surname">Фамилия</label>
              <div className="profile-page__profile-item__inner">
                <input
                  type={inputTypes.surname}
                  name="surname"
                  id="surname"
                  placeholder="Surname"
                />
                <img onClick={() => toggleInputType("surname")} src={eyeIcon} alt="eye" />
              </div>
            </p>

            <p className="profile-page__profile-item">
              <label htmlFor="password">Пароль</label>
              <div className="profile-page__profile-item__inner">
                <input
                  type={inputTypes.password}
                  name="password"
                  id="password"
                  placeholder="******"
                />
                <img
                  onClick={() => {
                    toggleInputType("password");
                  }}
                  src={eyeIcon}
                  alt="eye"
                />
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
