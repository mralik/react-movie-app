import React from 'react';

import { MdQueue, MdLocalMovies, MdMovieFilter, MdStars } from 'react-icons/md';

const API_KEY = '08258390d3c759f18662c8b2455481ee';
const REQUEST_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const SideBarItems = [
  { icon: <MdLocalMovies />, text: 'Now Playing' },
  { icon: <MdMovieFilter />, text: 'Popular' },
  { icon: <MdStars />, text: 'Top Rated' },
  { icon: <MdQueue />, text: 'Upcoming' }
];


const FuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 50,
  maxPatternLength: 12,
  minMatchCharLength: 3
};

export default { API_KEY, REQUEST_URL, IMAGE_URL, SideBarItems, FuseOptions };
