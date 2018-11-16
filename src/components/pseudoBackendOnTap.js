const masterKegList = [
  {
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling Wine & Grapefruit',
    abv: '6.8',
    price: '7',
    remaining: '20'
  },
  {
    name: 'Tart N Juicy',
    brewer: 'Epic',
    description: 'Sour IPA',
    abv: '4.5',
    price: '6',
    remaining: '60'
  },
  {
    name: 'Hamm\'s',
    brewer: 'Miller/Coors',
    description: 'American Lager',
    abv: '4.7',
    price: '3',
    remaining: '65'
  },
  {
    name: 'Prismatic',
    brewer: 'Ninkasi',
    description: 'Juicy IPA',
    abv: '5.9',
    price: '6',
    remaining: '75'
  },
  {
    name: 'Juicy Haze',
    brewer: 'New Belgium',
    description: 'India Pale Ale',
    abv: '7.5',
    price: '6',
    remaining: '18'
  },
  {
    name: '8 Hop',
    brewer: 'New Belgium',
    description: 'Pale Ale',
    abv: '5.5',
    price: '6',
    remaining: '58'
  },
  {
    name: 'High Road',
    brewer: 'Walking Man Brewing',
    description: 'Scotch / Wee Heavy',
    abv: '9.2',
    price: '6',
    remaining: '44'
  },
  {
    name: 'Helldorado',
    brewer: 'Firestone Walker Brewing Company',
    description: 'Barrel Aged Barleywine - Blonde',
    abv: '13.2',
    price: '7',
    remaining: '59'
  },
  {
    name: 'Canadian Breakfast Stout',
    brewer: 'Founders Brewing Co.',
    description: 'Stout',
    abv: '11.6',
    price: '10',
    remaining: '52'
  },
  {
    name: 'Alpha',
    brewer: 'Block 15 Brewing Company',
    description: 'IPA - American',
    abv: '6.4',
    price: '6',
    remaining: '44'
  },
  {
    name: 'Rye Lager',
    brewer: 'Chuckanut Brewery',
    description: 'Rye Beer',
    abv: '5.7',
    price: '6',
    remaining: '48'
  }
];


export default function getTapList() {
  return masterKegList;
}