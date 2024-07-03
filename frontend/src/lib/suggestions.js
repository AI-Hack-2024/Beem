
const dummyData = [
  {
    id: 1,
    imageUrl:
      'https://cdn.broadsheet.com.au/cache/06/8f/068f34892f2ca0958a7cfb990e1cd518.jpg',
    title: 'Cargo Bar',
    price: '40',
    rating: '4.5',
    statValue: '97',
  },
  {
    id: 2,
    imageUrl: 'https://static.ffx.io/images/$zoom_0.13610586011342155%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/eda1ee5a0fe698987296a1075332d1e7360c35fe',
    title: 'Caterpillar Bar',
    price: '50',
    rating: '2.7',
    statValue: '95',
  },
  {
    id: 3,
    imageUrl: 'https://images.localista.com.au/eatingout/353291_lrg.jpg',
    title: 'The Scary Canary',
    price: '30',
    rating: '3.3',
    statValue: '60'
  },
  {
    id: 4,
    imageUrl: 'https://static1.squarespace.com/static/5b9aeeb489c172c86a13f7e5/t/5cf752f64830f60001915ddc/1683250944656/maloneys-penelope_7906.jpg?format=1500w',
    title: 'Shark Hotel',
    price: '25',
    rating: '3.8',
    statValue: '70'
  },
  {
    id: 5,
    imageUrl: 'https://cdn.broadsheet.com.au/cache/ac/44/ac44d2f794f186823d4bebe405220dd9.jpg',
    title: 'Ni Hao Bar',
    price: '50',
    rating: '4.2',
    statValue: '90'
  },
];

const randomiseSuggestions = (data) => {
  const shuffledData = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  return shuffledData.slice(0, 3);
}

export { dummyData, randomiseSuggestions };
