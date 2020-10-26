import React from 'react';

import Logo from '../../assets/logo.svg';
import Hero from '../../assets/hero.svg';
import EmptyHeart from '../../assets/empty-heart.svg';
import Heart from '../../assets/heart.svg';
import Spiderman from '../../assets/spiderman.jpg';

const Home: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={Logo} alt="Marvel Search Heroes" />
        <h1>Explore o Universo</h1>
        <p>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </p>
        <input type="text" placeholder="Procure por heróis" />
      </header>
      <div className="filter">
        <p>Encontrados 20 heróis</p>
        <div className="sort">
          <img src={Hero} alt="Hero Icon" />
          <span>Ordenar por nome - A/Z</span>
          <input
            type="checkbox"
            className="checkbox"
            id="toggleSwitch"
            name="toggleSwitch"
          />
        </div>
        <div className="favorite">
          <img src={Heart} alt="Heart Icon" />
          <span>Somente favoritos</span>
        </div>
      </div>

      <div className="heroesList">
        <div className="heroesCard">
          <img src={Spiderman} alt="Hero Name" />
          <span>Spiderman</span>
          <img src={EmptyHeart} alt="Add Favorite" />
        </div>
      </div>

      <footer className="footer" />
    </div>
  );
};

export default Home;
