export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
  backgroundRed: '#ce383a',

};

export const Items = [
  {
    id: 1,
    category: 'product',
    productName: 'Wireless Headphones',
    productPrice: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/Mi1.png'),
    isAvailable: true,
  },
  {
    id: 2,
    category: 'product',
    productName: 'Headphones 2',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    isOff: false,
    productImage: require('../database/images/products/boat1.png'),
    isAvailable: true,
  },
  /*{
    id: 3,
    category: 'accessory',
    productName: 'Bananas',
    productPrice: 10,
    description:
      'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
    isOff: true,
    offPercentage: 18,
    productImage: require('../database/images/accessories/banana.jpg'),
    isAvailable: true,
  }*//*,
  {
    id: 4,
    category: 'accessory',
    productName: 'Avocado',
    productPrice: 399,
    description:
      'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
    isOff: false,
    productImage: require('../database/images/accessories/avo.jpg'),
    isAvailable: true,
  }*//*,
  {
    id: 5,
    category: 'accessory',
    productName: 'Pear',
    productPrice: 1499,
    description:
      'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
    isOff: false,
    productImage: require('../database/images/accessories/pear.jpg'),
    isAvailable: false,
  },*/
];
