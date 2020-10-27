import React from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import BigHeart from '../../assets/big-heart.svg';
import Book from '../../assets/book.svg';
import Video from '../../assets/video.svg';
import Rating from '../../assets/rating.svg';
import EmptyHeart from '../../assets/empty-heart.svg';
import Spiderman from '../../assets/spiderman.png';
import SpidermanComics from '../../assets/spiderman-comics.jpg';

import './styles.css';

const Detail: React.FC = () => {
  const history = useHistory();

  const handleClickBackButton = (): void => {
    history.push('/');
  };

  return (
    <>
      <header className="detail__header">
        <img className="detail__logo" src={Logo} alt="Marvel Search heroes" />
        <input
          className="detail__searchInput"
          type="text"
          placeholder="Procure por heróis"
        />
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
              <h1 className="detail__name">Spiderman</h1>
              <img src={BigHeart} alt="Favorite" />
            </div>
            <p className="detail__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{' '}
            </p>
            <div className="detail__products">
              <div className="detail__comicsInfo">
                <span className="detail__productsTitle">Quadrinhos</span>
                <div className="detail__comicsContainer">
                  <img
                    className="detail__productsImage"
                    src={Book}
                    alt="Comics"
                  />
                  <span className="detail__productsText">3.000</span>
                </div>
              </div>
              <div className="detail__moviesInfo">
                <span className="detail__productsTitle">Filmes</span>
                <div className="detail__moviesContainer">
                  <img
                    className="detail__productsImage"
                    src={Video}
                    alt="Movies"
                  />
                  <span className="detail__productsText">40</span>
                </div>
              </div>
            </div>
            <div className="detail__ratingContainer">
              <span className="detail__ratingTitle">Rating:</span>
              <img className="detail__ratingImage" src={Rating} alt="rating" />
            </div>
            <div className="detail__latestContainer">
              <span className="detail__latestTitle">Último quadrinho:</span>
              <span className="detail__latestDate">13 fev. 2020</span>
            </div>
          </div>
          <div className="detail__heroImageContainer">
            <img
              className="detail__heroImage"
              src={Spiderman}
              alt="Spiderman"
            />
          </div>
        </div>
        <div className="detail__releases">
          <h1 className="detail__releasesTitle">Últimos lançamentos</h1>
          <div className="detail__comicsList">
            <div className="detail__comicsCard">
              <img
                className="detail__comicsCardImage"
                src={SpidermanComics}
                alt="Comic Name"
              />
              <div className="detail__comicsCardDescription">
                <span className="detail__comicsCardName">Lorem ipsum</span>
                <img
                  className="detail__comicsCardfavorite"
                  src={EmptyHeart}
                  alt="Add Favorite"
                />
              </div>
            </div>
            <div className="detail__comicsCard">
              <img
                className="detail__comicsCardImage"
                src={SpidermanComics}
                alt="Comic Name"
              />
              <div className="detail__comicsCardDescription">
                <span className="detail__comicsCardName">Lorem ipsum</span>
                <img
                  className="detail__comicsCardfavorite"
                  src={EmptyHeart}
                  alt="Add Favorite"
                />
              </div>
            </div>
            <div className="detail__comicsCard">
              <img
                className="detail__comicsCardImage"
                src={SpidermanComics}
                alt="Comic Name"
              />
              <div className="detail__comicsCardDescription">
                <span className="detail__comicsCardName">Lorem ipsum</span>
                <img
                  className="detail__comicsCardfavorite"
                  src={EmptyHeart}
                  alt="Add Favorite"
                />
              </div>
            </div>
            <div className="detail__comicsCard">
              <img
                className="detail__comicsCardImage"
                src={SpidermanComics}
                alt="Comic Name"
              />
              <div className="detail__comicsCardDescription">
                <span className="detail__comicsCardName">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </span>
                <img
                  className="detail__comicsCardfavorite"
                  src={EmptyHeart}
                  alt="Add Favorite"
                />
              </div>
            </div>
            <div className="detail__comicsCard">
              <img
                className="detail__comicsCardImage"
                src={SpidermanComics}
                alt="Comic Name"
              />
              <div className="detail__comicsCardDescription">
                <span className="detail__comicsCardName">Lorem ipsum</span>
                <img
                  className="detail__comicsCardfavorite"
                  src={EmptyHeart}
                  alt="Add Favorite"
                />
              </div>
            </div>
            <div className="detail__comicsCard">
              <img
                className="detail__comicsCardImage"
                src={SpidermanComics}
                alt="Comic Name"
              />
              <div className="detail__comicsCardDescription">
                <span className="detail__comicsCardName">Lorem ipsum</span>
                <img
                  className="detail__comicsCardfavorite"
                  src={EmptyHeart}
                  alt="Add Favorite"
                />
              </div>
            </div>
            <div className="detail__comicsCard">
              <img
                className="detail__comicsCardImage"
                src={SpidermanComics}
                alt="Comic Name"
              />
              <div className="detail__comicsCardDescription">
                <span className="detail__comicsCardName">Lorem ipsum</span>
                <img
                  className="detail__comicsCardfavorite"
                  src={EmptyHeart}
                  alt="Add Favorite"
                />
              </div>
            </div>
            <div className="detail__comicsCard">
              <img
                className="detail__comicsCardImage"
                src={SpidermanComics}
                alt="Comic Name"
              />
              <div className="detail__comicsCardDescription">
                <span className="detail__comicsCardName">Lorem ipsum</span>
                <img
                  className="detail__comicsCardfavorite"
                  src={EmptyHeart}
                  alt="Add Favorite"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="detail__footer" />
    </>
  );
};

export default Detail;
