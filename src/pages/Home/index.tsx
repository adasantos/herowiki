import React, { useCallback, useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import md5 from 'md5';

import Input from '../../components/Input';

import { useHero } from '../../hooks/hero';

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

interface HeroProps {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Home: React.FC = () => {
  const {
    getHeroDetail,
    addToFavorite,
    removeToFavorite,
    setFavoriteHeroes,
    favoriteHeroes,
  } = useHero();
  const history = useHistory();

  const timestamp = Math.round(new Date().getTime() / 1000);
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);

  const [heroes, setHeroes] = useState<HeroProps[]>([]);
  const [orderByName, setOrderByName] = useState(false);
  const [onlyFavorite, setOnlyFavorite] = useState(false);
  const [searchByName, setSearchByName] = useState('');

  const getHeroes = useCallback(async () => {
    const response = await api.get(
      `/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&orderBy=${
        orderByName ? 'name' : 'modified'
      }${searchByName && `&nameStartsWith=${searchByName}`}&limit=20`,
    );

    const newHeroes = response.data.data.results;

    setHeroes(newHeroes);
  }, [timestamp, hash, orderByName, searchByName]);

  useEffect(() => {
    const localFavoriteHeroes = localStorage.getItem('@HeroWiki:favorite');

    if (localFavoriteHeroes) {
      setFavoriteHeroes(JSON.parse(localFavoriteHeroes));
    }

    getHeroes();
  }, [getHeroes, orderByName, setFavoriteHeroes]);

  const toggleOrderByName = useCallback((): void => {
    setOrderByName(!orderByName);
  }, [orderByName]);

  const toggleOnlyFavorite = useCallback((): void => {
    setOnlyFavorite(!onlyFavorite);
  }, [onlyFavorite]);

  const handleSearchHeroByName = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const name = e.target.value;

      setSearchByName(name);
    },
    [],
  );

  const handleClickDetail = useCallback(
    async ({ id }: DetailProps) => {
      await getHeroDetail({
        id,
      });

      history.push('/detail');
    },
    [history, getHeroDetail],
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
          <Input
            name="search"
            type="text"
            placeholder="Procure por heróis"
            onChange={handleSearchHeroByName}
          />
        </div>
        <div className="home__filterBar">
          <p className="home__searchResult">
            {`Encontrados ${
              onlyFavorite ? favoriteHeroes.length : heroes.length
            } heróis.`}
          </p>

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
            </div>

            <div
              className="home__favorite"
              onClick={toggleOnlyFavorite}
              onKeyPress={toggleOnlyFavorite}
              role="button"
              tabIndex={0}
            >
              <img className="home__heartIcon" src={Heart} alt="Heart Icon" />
              <span className="home__filterText">Somente favoritos</span>
            </div>
          </div>
        </div>

        <div className="home__heroesList">
          {onlyFavorite
            ? favoriteHeroes.map(
                ({ id, name, thumbnail: { path, extension } }) => (
                  <div key={id} className="home__heroesCard">
                    <div
                      className="home__heroesImageContainer"
                      onClick={() => handleClickDetail({ id })}
                      onKeyPress={() => handleClickDetail({ id })}
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
                        onClick={() => handleClickDetail({ id })}
                        onKeyPress={() => handleClickDetail({ id })}
                        role="link"
                        tabIndex={0}
                      >
                        {name}
                      </span>

                      <div
                        className="home__favoriteHero"
                        onClick={() => removeToFavorite(id)}
                        onKeyPress={() => removeToFavorite(id)}
                        role="button"
                        tabIndex={0}
                      >
                        <img src={Heart} alt="Remove Favorite" />
                      </div>
                    </div>
                  </div>
                ),
              )
            : heroes.map(
                ({ id, name, thumbnail, thumbnail: { path, extension } }) => (
                  <div key={id} className="home__heroesCard">
                    <div
                      className="home__heroesImageContainer"
                      onClick={() => handleClickDetail({ id })}
                      onKeyPress={() => handleClickDetail({ id })}
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
                        onClick={() => handleClickDetail({ id })}
                        onKeyPress={() => handleClickDetail({ id })}
                        role="link"
                        tabIndex={0}
                      >
                        {name}
                      </span>

                      {favoriteHeroes.find((favoriteHero) => {
                        return favoriteHero.id === id;
                      }) ? (
                        <div
                          className="home__favoriteHero"
                          onClick={() => removeToFavorite(id)}
                          onKeyPress={() => removeToFavorite(id)}
                          role="button"
                          tabIndex={0}
                        >
                          <img src={Heart} alt="Remove Favorite" />
                        </div>
                      ) : (
                        <div
                          className="home__favoriteHero"
                          onClick={() => addToFavorite(id, name, thumbnail)}
                          onKeyPress={() => addToFavorite(id, name, thumbnail)}
                          role="button"
                          tabIndex={0}
                        >
                          <img src={EmptyHeart} alt="Add Favorite" />
                        </div>
                      )}
                    </div>
                  </div>
                ),
              )}
        </div>
      </div>
      <footer className="home__footer" />
    </>
  );
};

export default Home;
