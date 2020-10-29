import React from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { useHero } from '../../hooks/hero';

import Logo from '../../assets/logo.png';
import BigHeart from '../../assets/big-heart.svg';
import Book from '../../assets/book.svg';
import Video from '../../assets/video.svg';
import BigEmptyHeart from '../../assets/big-empty-heart.svg';

import './styles.css';

const Detail: React.FC = () => {
  const {
    heroDetail: { id, name, description, thumbnail, series, comics },
    heroComics,
    addToFavorite,
    removeToFavorite,
    favoriteHeroes,
  } = useHero();
  const history = useHistory();

  const handleClickBackButton = (): void => {
    moment.locale('pt-br');
    history.push('/');
  };

  return (
    <>
      <header className="detail__header">
        <img className="detail__logo" src={Logo} alt="Marvel Search heroes" />
      </header>
      <div className="detail__container">
        <div
          className="detail__back"
          onClick={handleClickBackButton}
          onKeyPress={handleClickBackButton}
          role="link"
          tabIndex={0}
        >
          Back
        </div>
        <div className="detail__content">
          <div className="detail__descriptionContainer">
            <div className="detail__nameContainer">
              <h1 className="detail__name">{name}</h1>
              {favoriteHeroes.find((favoriteHero) => {
                return favoriteHero.id === id;
              }) ? (
                <div
                  className="detail__favoriteHero"
                  onClick={() => removeToFavorite(id)}
                  onKeyPress={() => removeToFavorite(id)}
                  role="button"
                  tabIndex={0}
                >
                  <img src={BigHeart} alt="Remove Favorite" />
                </div>
              ) : (
                <div
                  className="detail__favoriteHero"
                  onClick={() => addToFavorite(id, name, thumbnail)}
                  onKeyPress={() => addToFavorite(id, name, thumbnail)}
                  role="button"
                  tabIndex={0}
                >
                  <img src={BigEmptyHeart} alt="Add Favorite" />
                </div>
              )}
            </div>

            <p className="detail__description">{description}</p>
            <div className="detail__products">
              <div className="detail__comicsInfo">
                <span className="detail__productsTitle">Quadrinhos</span>
                <div className="detail__comicsContainer">
                  <img
                    className="detail__productsImage"
                    src={Book}
                    alt="Comics"
                  />
                  <span className="detail__productsText">{comics}</span>
                </div>
              </div>
              <div className="detail__moviesInfo">
                <span className="detail__productsTitle">Series</span>
                <div className="detail__moviesContainer">
                  <img
                    className="detail__productsImage"
                    src={Video}
                    alt="Movies"
                  />
                  <span className="detail__productsText">{series}</span>
                </div>
              </div>
            </div>
            <div className="detail__latestContainer">
              <span className="detail__latestTitle">Último quadrinho:</span>
              <span className="detail__latestDate">
                {moment(heroComics[0].date).format('DD MMM YYYY')}
              </span>
            </div>
          </div>
          <div className="detail__heroImageContainer">
            <img
              className="detail__heroImage"
              src={`${thumbnail.path}.${thumbnail.extension}`}
              alt={name}
            />
          </div>
        </div>
        <div className="detail__releases">
          <h1 className="detail__releasesTitle">Últimos lançamentos</h1>
          <div className="detail__comicsList">
            {heroComics.map(
              ({ id: comicId, title, thumbnail: { path, extension } }) => (
                <div key={comicId} className="detail__comicsCard">
                  <img
                    className="detail__comicsCardImage"
                    src={`${path}.${extension}`}
                    alt={title}
                  />
                  <div className="detail__comicsCardDescription">
                    <span className="detail__comicsCardName">{title}</span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <footer className="detail__footer" />
    </>
  );
};

export default Detail;
