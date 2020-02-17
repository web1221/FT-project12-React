import React from 'react';
import Kegs from './Kegs'
import Header from './Header'
import BreakSide from './img/breakside.png'
import FlyingDog from './img/flyingdog.png'
import Denizens from './img/denizens2.png'
import HeavySeas from './img/heavyseas.png'
import BaseCamp from './img/basecamp.png'
import Pelican from './img/pelican.png'
import DogFish from './img/dogfish.png'
import Rogue from './img/rogue.png'

var masterKegList = [
  {
    names: 'WanderLust',
    brewery: 'Breakside',
    AlcContent: '6.7% ABV',
    image: BreakSide
  },
  {
    names: 'SouthSide',
    brewery: 'Denizens Brewing Co.',
    AlcContent: '7.2% ABV',
    image: Denizens
  },
  {
    names: 'Family Drama',
    brewery: 'Flying Dog',
    AlcContent: '8.4% ABV',
    image: FlyingDog
  },
  {
    names: '120 Minute IPA',
    brewery: 'Dog Fish',
    AlcContent: '15% ABV',
    image: DogFish
  },
  {
    names: 'Peg Leg',
    brewery: 'Heavy Seas',
    AlcContent: '8% ABV',
    image: HeavySeas
  },
  {
    names: 'Hazy Rock',
    brewery: 'Pelican',
    AlcContent: '6.2% ABV',
    image: Pelican
  },
  {
    names: 'Send It',
    brewery: 'Base Camp',
    AlcContent: '7.3% ABV',
    image: BaseCamp
  },
  {
    names: 'DEAD GUY',
    brewery: 'Rouge',
    AlcContent: '6.8% ABV',
    image: Rogue
  },
];

function KegList(){
  return (
    <div>
    <Header />
    <div>
    {masterKegList.map((keg, index) =>
      <Kegs names={keg.names}
      brewery={keg.brewery}
      AlcContent={keg.AlcContent}
      image={keg.image}
      key={index}/>
    )}
    </div>
    </div>
  );
}

export default KegList;
