import React from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Hero from '../../assets/hero.svg';
import EmptyHeart from '../../assets/empty-heart.svg';
import Heart from '../../assets/heart.svg';
import Spiderman from '../../assets/spiderman.jpg';

import './styles.css';

const Home: React.FC = () => {
  const history = useHistory();

  const handleClick = (): void => {
    history.push('/detail');
  };

  return (
    <>
      <div className="home__container">
        <header className="home__header">
          <img className="home__logo" src={Logo} alt="Marvel Search Heroes" />
          <h1 className="home__title">EXPLORE O UNIVERSO</h1>
          <p className="home__description">
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve!
          </p>
        </header>
        <div className="home__search">
          <input
            className="home__searchInput"
            type="text"
            placeholder="Procure por heróis"
          />
        </div>
        <div className="home__filterBar">
          <p className="home__searchResult">Encontrados 20 heróis</p>

          <div className="home__filter">
            <div className="home__sort">
              <img className="home__heroIcon" src={Hero} alt="Hero Icon" />

              <span className="home__filterText">Ordenar por nome - A/Z</span>

              <input
                type="checkbox"
                className="home__checkbox"
                id="toggleSwitch"
                name="toggleSwitch"
              />
            </div>

            <div className="home__favorite">
              <img className="home__heartIcon" src={Heart} alt="Heart Icon" />
              <span className="home__filterText">Somente favoritos</span>
            </div>
          </div>
        </div>

        <div className="home__heroesList">
          <div className="home__heroesCard">
            <div
              className="home__heroesImageContainer"
              onClick={handleClick}
              onKeyPress={handleClick}
              role="link"
              tabIndex={0}
            >
              <img
                className="home__heroesImage"
                src={Spiderman}
                alt="Hero Name"
              />
            </div>
            <div className="home__heroesCardDetail">
              <span
                className="home__heroesName"
                onClick={handleClick}
                onKeyPress={handleClick}
                role="link"
                tabIndex={0}
              >
                Spiderman
              </span>
              <img src={EmptyHeart} alt="Add Favorite" />
            </div>
          </div>
          <div className="home__heroesCard">
            <div
              className="home__heroesImageContainer"
              onClick={handleClick}
              onKeyPress={handleClick}
              role="link"
              tabIndex={0}
            >
              <img
                className="home__heroesImage"
                src={Spiderman}
                alt="Hero Name"
              />
            </div>
            <div className="home__heroesCardDetail">
              <span
                className="home__heroesName"
                onClick={handleClick}
                onKeyPress={handleClick}
                role="link"
                tabIndex={0}
              >
                Spiderman
              </span>
              <img src={EmptyHeart} alt="Add Favorite" />
            </div>
          </div>
          <div className="home__heroesCard">
            <div
              className="home__heroesImageContainer"
              onClick={handleClick}
              onKeyPress={handleClick}
              role="link"
              tabIndex={0}
            >
              <img
                className="home__heroesImage"
                src={Spiderman}
                alt="Hero Name"
              />
            </div>
            <div className="home__heroesCardDetail">
              <span
                className="home__heroesName"
                onClick={handleClick}
                onKeyPress={handleClick}
                role="link"
                tabIndex={0}
              >
                Spiderman
              </span>
              <img src={EmptyHeart} alt="Add Favorite" />
            </div>
          </div>
          <div className="home__heroesCard">
            <div
              className="home__heroesImageContainer"
              onClick={handleClick}
              onKeyPress={handleClick}
              role="link"
              tabIndex={0}
            >
              <img
                className="home__heroesImage"
                src={Spiderman}
                alt="Hero Name"
              />
            </div>
            <div className="home__heroesCardDetail">
              <span
                className="home__heroesName"
                onClick={handleClick}
                onKeyPress={handleClick}
                role="link"
                tabIndex={0}
              >
                Spiderman
              </span>
              <img src={EmptyHeart} alt="Add Favorite" />
            </div>
          </div>
          <div className="home__heroesCard">
            <div
              className="home__heroesImageContainer"
              onClick={handleClick}
              onKeyPress={handleClick}
              role="link"
              tabIndex={0}
            >
              <img
                className="home__heroesImage"
                src={Spiderman}
                alt="Hero Name"
              />
            </div>
            <div className="home__heroesCardDetail">
              <span
                className="home__heroesName"
                onClick={handleClick}
                onKeyPress={handleClick}
                role="link"
                tabIndex={0}
              >
                Spiderman
              </span>
              <img src={EmptyHeart} alt="Add Favorite" />
            </div>
          </div>
          <div className="home__heroesCard">
            <div
              className="home__heroesImageContainer"
              onClick={handleClick}
              onKeyPress={handleClick}
              role="link"
              tabIndex={0}
            >
              <img
                className="home__heroesImage"
                src={Spiderman}
                alt="Hero Name"
              />
            </div>
            <div className="home__heroesCardDetail">
              <span
                className="home__heroesName"
                onClick={handleClick}
                onKeyPress={handleClick}
                role="link"
                tabIndex={0}
              >
                Spiderman
              </span>
              <img src={EmptyHeart} alt="Add Favorite" />
            </div>
          </div>
        </div>
      </div>
      <footer className="home__footer" />
    </>
  );
};

export default Home;
