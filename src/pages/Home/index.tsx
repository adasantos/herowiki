import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import md5 from 'md5';

import api from '../../service/api';
import { publicKey, privateKey } from '../../settings/key';

import Logo from '../../assets/logo.png';
import Hero from '../../assets/hero.svg';
import EmptyHeart from '../../assets/empty-heart.svg';
import Heart from '../../assets/heart.svg';

import './styles.css';

interface DetailProps {
  id: number;
}

const Home: React.FC = () => {
  const history = useHistory();

  const timestamp = Math.round(new Date().getTime() / 1000);

  const hash = md5(`${timestamp}${privateKey}${publicKey}`);

  const [heroes, setHeroes] = useState([]);
  const [orderByName, setOrderByName] = useState(false);

  const getHeroes = useCallback(async () => {
    const response = await api.get(
      `/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&orderBy=${
        orderByName ? 'name' : 'modified'
      }&limit=20`,
    );

    setHeroes(response.data.data.results);
  }, [timestamp, hash, orderByName]);

  useEffect(() => {
    getHeroes();
  }, [getHeroes, orderByName]);

  const toggleOrderByName = useCallback((): void => {
    setOrderByName(!orderByName);
  }, [orderByName]);

  const handleClickDetail = useCallback(
    ({ id }: DetailProps) => {
      history.push({
        pathname: '/detail',
        state: { id },
      });
    },
    [history],
  );

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

              <span
                className="home__filterText"
                onClick={toggleOrderByName}
                onKeyPress={toggleOrderByName}
                role="link"
                tabIndex={0}
              >
                Ordenar por nome - A/Z
              </span>

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
          {heroes.map(({ id, name, thumbnail: { path, extension } }) => (
            <div key={id} className="home__heroesCard">
              <div
                className="home__heroesImageContainer"
                onClick={() => handleClickDetail(id)}
                onKeyPress={() => handleClickDetail(id)}
                role="link"
                tabIndex={0}
              >
                <img
                  className="home__heroesImage"
                  src={`${path}.${extension}`}
                  alt={name}
                />
              </div>
              <div className="home__heroesCardDetail">
                <span
                  className="home__heroesName"
                  onClick={() => handleClickDetail(id)}
                  onKeyPress={() => handleClickDetail(id)}
                  role="link"
                  tabIndex={0}
                >
                  {name}
                </span>
                <img src={EmptyHeart} alt="Add Favorite" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="home__footer" />
    </>
  );
};

export default Home;
