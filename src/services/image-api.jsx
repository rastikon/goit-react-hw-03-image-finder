// import { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '31433841-9c408bc215e2389a40b91ba82';

//Запит на сервер
export const getImages = async (newImage, page) => {
  const { data } = await axios.get(
    `?q=${newImage}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

// &per_page=${perPage}
// https://pixabay.com/api/?key=31433841-9c408bc215e2389a40b91ba82&q=yellow+flowers&image_type=photo
