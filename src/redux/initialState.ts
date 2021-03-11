import { initialStateType } from '../Interfaces';

export const initialState: initialStateType = {
  lang: 'ru',
  countries: [
    {
      name: 'Afganistan',
      capital: '',
      details: {
        info: '',
        views: [
          {
            imgURL: '',
            viewName: '',
            about: '',
          },
        ],
        videoURL: '',
        mapCoords: { x: 0, y: 0 },
      },
      photo:
        'https://interaffairs.ru/i/2018/08/0fec38c2dc45c048e156353bab8d5d6d.jpg',
      rating: 3,
    },
    {
      name: 'Iran',
      capital: '',
      details: {
        info: '',
        views: [
          {
            imgURL: '',
            viewName: '',
            about: '',
          },
        ],
        videoURL: '',
        mapCoords: { x: 0, y: 0 },
      },
      photo:
        'https://i.pinimg.com/originals/fa/6b/7c/fa6b7c06630ad70243be0e93e998a99f.jpg',
      rating: 2,
    },
    {
      name: 'Syria',
      capital: '',
      details: {
        info: '',
        views: [
          {
            imgURL: '',
            viewName: '',
            about: '',
          },
        ],
        videoURL: '',
        mapCoords: { x: 0, y: 0 },
      },
      photo:
        'https://img.tourister.ru/files/7/6/8/3/1/2/0/clones/870_578_fixedwidth.jpg?t=1614297600143',
      rating: 1,
    },
    {
      name: 'North Korea',
      capital: '',
      details: {
        info: '',
        views: [
          {
            imgURL: '',
            viewName: '',
            about: '',
          },
        ],
        videoURL: '',
        mapCoords: { x: 0, y: 0 },
      },
      photo:
        'https://cdn.fishki.net/upload/post/2017/06/14/2314288/b31ecaa2988b66d4717107dd6f3d51c3.jpg',
      rating: 2,
    },
  ],
};
