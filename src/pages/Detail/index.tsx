import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import BigHeart from '../../assets/big-heart.svg';
import Book from '../../assets/book.svg';
import Video from '../../assets/video.svg';
import Spiderman from '../../assets/spiderman.jpg';

const Detail: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={Logo} alt="Marvel Search heroes" />
        <input type="text" placeholder="Procure por heróis" />
      </header>
      <div className="content">
        <div className="detail">
          <div className="back">
            <Link to="/">back</Link>
          </div>
          <div className="detailHeader">
            <h1>Spiderman</h1>
            <img src={BigHeart} alt="Favorite" />
          </div>
          <div className="description">
            <p>Homem aranha é o melhor </p>
          </div>
          <div className="products">
            <div className="comicsInfo">
              <span>Quadrinhos</span>
              <div className="comicsCounter">
                <img src={Book} alt="Comics" />
                <span>3.000</span>
              </div>
            </div>
            <div className="moviesInfo">
              <span>Filmes</span>
              <div className="moviesCounter">
                <img src={Video} alt="Movies" />
                <span>3.000</span>
              </div>
            </div>
          </div>
          <div className="rating">
            <img src="" alt="rating" />
          </div>
          <div className="latest">
            <span>13 fev. 2020</span>
          </div>
        </div>
        <div className="heroImage">
          <img src={Spiderman} alt="Spiderman" />
        </div>
      </div>
      <div className="releases">
        <h1>Últimos lançamentos</h1>
        <div className="comics">
          <img src="" alt="Comic Name" />
          <span>Lorem ipsum</span>
        </div>
      </div>
      <footer className="footer" />
    </div>
  );
};

export default Detail;
