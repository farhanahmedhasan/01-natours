import { AiOutlineGlobal, AiOutlineCompass, AiOutlineHeart } from 'react-icons/ai';
import { BsMap } from 'react-icons/bs';

import sliderImg1 from '../img/nat-8.jpg';
import sliderImg2 from '../img/nat-9.jpg';

export const featureData = [
  {
    id: 1,
    icon: <AiOutlineGlobal style={{ fill: 'url(#blue-gradient)' }} />,
    title: 'Explore The World',
    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi rerum ut porro.',
  },
  {
    id: 2,
    icon: <AiOutlineCompass style={{ fill: 'url(#blue-gradient)' }} />,
    title: 'Meet Nature',
    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi rerum ut porro.',
  },
  {
    id: 3,
    icon: <BsMap style={{ fill: 'url(#blue-gradient)' }} />,
    title: 'Find Your Data',
    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi rerum ut porro.',
  },
  {
    id: 4,
    icon: <AiOutlineHeart style={{ fill: 'url(#blue-gradient)' }} />,
    title: 'Live a Healthier life',
    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi rerum ut porro.',
  },
];

export const toursCard = [
  {
    id: 1,
    classM: 'card__side--back--1',
    classM2: 'card__picture--1',
    classM3: 'card__header--span--1',
    header: 'The Sea Explorer',
    price: 299,
    details: ['3 day tours', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficulty: Easy'],
  },
  {
    id: 2,
    classM: 'card__side--back--2',
    classM2: 'card__picture--2',
    classM3: 'card__header--span--2',
    header: 'The forest hiker',
    price: 497,
    details: [
      '7 day tours',
      'Up to 40 people',
      '6 tour guides',
      'Sleep in provided tents',
      'Difficulty: Medium',
    ],
  },
  {
    id: 3,
    classM: 'card__side--back--3',
    classM2: 'card__picture--3',
    classM3: 'card__header--span--3',
    header: 'The snow adventurer',
    price: 897,
    details: [
      '5 day tours',
      'Up to 15 people',
      '3 tour guides',
      'Sleep in provided tents',
      'Difficulty: Hard',
    ],
  },
];

export const sliderData = [
  {
    id: 1,
    name: 'Mary Smith',
    title: 'I had the best week ever with my family',
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita in officiis magnam neque ut eveniet ipsa mollitia molestiae, ad sit aliquid fuga quos molestias, vitae aut, quibusdam dignissimos? aliquid fuga quos molestias, vitae aut, quibusdam dignissimos? fuga quos molestias, vitae aut, quibusdam dignissimos?',
    imgSrc: sliderImg1,
  },
  {
    id: 2,
    name: 'Hitlar Mia',
    title: 'WOW!! My life is completely different now',
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita in officiis magnam neque ut eveniet ipsa mollitia molestiae, ad sit aliquid fuga quos molestias, vitae aut, quibusdam dignissimos? aliquid fuga quos molestias, vitae aut, quibusdam dignissimos? fuga quos molestias, vitae aut, quibusdam dignissimos?',
    imgSrc: sliderImg2,
  },

  {
    id: 3,
    name: 'Trump Sheikh',
    title: 'Damn!! Natours is the best',
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita in officiis magnam neque ut eveniet ipsa mollitia molestiae, ad sit aliquid fuga quos molestias, vitae aut, quibusdam dignissimos? aliquid fuga quos molestias, vitae aut, quibusdam dignissimos? fuga quos molestias, vitae aut, quibusdam dignissimos?',
    imgSrc: sliderImg1,
  },

  {
    id: 4,
    name: 'Obama Ali',
    title: 'East or West natour is the best',
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita in officiis magnam neque ut eveniet ipsa mollitia molestiae, ad sit aliquid fuga quos molestias, vitae aut, quibusdam dignissimos? aliquid fuga quos molestias, vitae aut, quibusdam dignissimos? fuga quos molestias, vitae aut, quibusdam dignissimos?',
    imgSrc: sliderImg2,
  },
];
