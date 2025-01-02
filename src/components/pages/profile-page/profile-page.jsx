import HistorySection from "../../widgets/history-section/history-section";

import "./profile-page.scss";

const ProfilePage = () => {
  return (
    <>
      <section className="profile-page ">
        <div className="profile-page__change-profile-wrapper">
          <div className="profile-page__title">Редактировать профиль</div>
          <form className="profile-page__profile" action="">
            <p className="profile-page__profile-name">
              <label htmlFor="name">Имя</label>
              <input type="text" name="name" id="name" placeholder="Name" />
            </p>
            <p className="profile-page__profile-email">
              <label htmlFor="email">E-mail address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </p>
            <p className="profile-page__profile-surname">
              <label htmlFor="surname">Фамилия</label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Surname"
              />
            </p>
            <p className="profile-page__profile-pass">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
              />
            </p>
          </form>
        </div>
        <HistorySection />
      </section>
    </>
  );
};

export default ProfilePage;
