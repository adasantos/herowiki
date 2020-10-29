import React, { createContext, useContext, useCallback, useState } from 'react';
import md5 from 'md5';

import api from '../service/api';
import { publicKey, privateKey } from '../settings/key';

interface getHeroDetailCredentials {
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

interface heroDetailProps {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: [];
  series: [];
}

interface heroComicProps {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface heroComicTotalProps {
  total: number;
}

interface HeroContextData {
  getHeroDetail(id: getHeroDetailCredentials): Promise<void>;
  addToFavorite(
    id: number,
    name: string,
    thumbnails: { path: string; extension: string },
  ): void;
  removeToFavorite(id: number): void;
  setFavoriteHeroes: React.Dispatch<React.SetStateAction<HeroProps[]>>;
  favoriteHeroes: HeroProps[];
  heroDetail: heroDetailProps;
  heroComics: heroComicProps[];
  heroComicsTotal: heroComicTotalProps;
}

const HeroContext = createContext<HeroContextData>({} as HeroContextData);

export const HeroProvider: React.FC = ({ children }) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);

  const [favoriteHeroes, setFavoriteHeroes] = useState<HeroProps[]>([]);
  const [heroDetail, setHeroDetail] = useState<heroDetailProps>(
    {} as heroDetailProps,
  );
  const [heroComics, setHeroComics] = useState<heroComicProps[]>(
    {} as heroComicProps[],
  );
  const [heroComicsTotal, setHeroComicsTotal] = useState<heroComicTotalProps>(
    {} as heroComicTotalProps,
  );

  const addToFavorite = useCallback(
    (id, name, thumbnail) => {
      if (favoriteHeroes.length < 5) {
        const newFavoriteHero = {
          id,
          name,
          thumbnail,
          favorite: true,
        };

        const newFavoriteHeroes = [...favoriteHeroes, newFavoriteHero];

        localStorage.setItem(
          '@HeroWiki:favorite',
          JSON.stringify(newFavoriteHeroes),
        );

        setFavoriteHeroes(newFavoriteHeroes);
      }
    },
    [favoriteHeroes],
  );

  const removeToFavorite = useCallback(
    (id) => {
      const newFavoriteHeroes = favoriteHeroes.filter((favoriteHero) => {
        return favoriteHero.id !== id;
      });

      localStorage.setItem(
        '@HeroWiki:favorite',
        JSON.stringify(newFavoriteHeroes),
      );

      setFavoriteHeroes(newFavoriteHeroes);
    },
    [favoriteHeroes],
  );

  const getHeroComics = useCallback(
    async (id) => {
      const response = await api.get(
        `/v1/public/characters/${id}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&orderBy=-onsaleDate&limit=10`,
      );

      if (response.data.data.total) {
        setHeroComicsTotal(response.data.data.total);
      }

      const newHeroComics = response.data.data.results.map(
        (comic: heroComicProps) => {
          return {
            id: comic.id,
            title: comic.title,
            thumbnail: comic.thumbnail,
          };
        },
      );

      setHeroComics([...newHeroComics]);
    },
    [hash, timestamp],
  );

  const getHeroDetail = useCallback(
    async ({ id }) => {
      const response = await api.get(
        `/v1/public/characters/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
      );

      const result = response.data.data.results[0];
      const newHeroDetail = {
        id: result.id,
        name: result.name,
        description: result.description,
        thumbnail: result.thumbnail,
        comics: result.comics,
        series: result.series,
      };

      setHeroDetail(newHeroDetail);

      await getHeroComics(id);
    },
    [hash, timestamp, getHeroComics],
  );

  return (
    <HeroContext.Provider
      value={{
        favoriteHeroes,
        heroDetail,
        heroComics,
        heroComicsTotal,
        getHeroDetail,
        addToFavorite,
        removeToFavorite,
        setFavoriteHeroes,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export function useHero(): HeroContextData {
  const context = useContext(HeroContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
