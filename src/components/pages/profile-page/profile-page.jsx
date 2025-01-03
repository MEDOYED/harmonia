import HistorySection from "../../widgets/history-section/history-section";

import eyeIcon from "../../../assets/img/eye.svg";

import "./profile-page.scss";

const ProfilePage = () => {
  return (
    <>
      <section className="profile-page ">
        <div className="profile-page__change-profile-wrapper">
          <div className="profile-page__title">Редактировать профиль</div>
          <form className="profile-page__profile" action="">
            <p className="profile-page__profile-item">
              <label htmlFor="name">Имя</label>
              <div className="profile-page__profile-item__inner">
                <input type="text" name="name" id="name" placeholder="Name" />
                <img src={eyeIcon} alt="eye" />
              </div>
            </p>
            <p className="profile-page__profile-item">
              <label htmlFor="email">E-mail address</label>
              <div className="profile-page__profile-item__inner">
                <input type="email" name="email" id="email" placeholder="example@gmail.com" />
                <img src={eyeIcon} alt="eye" />
              </div>
            </p>
            <p className="profile-page__profile-item">
              <label htmlFor="surname">Фамилия</label>
              <div className="profile-page__profile-item__inner">
                <input type="text" name="surname" id="surname" placeholder="Surname" />
                <img src={eyeIcon} alt="eye" />
              </div>
            </p>
            <p className="profile-page__profile-item">
              <label htmlFor="password">Пароль</label>
              <div className="profile-page__profile-item__inner">
                <input type="password" name="password" id="password" placeholder="******" />
                <img src={eyeIcon} alt="eye" />
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
