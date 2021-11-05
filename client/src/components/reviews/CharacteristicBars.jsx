import React, { useContext } from 'react';
import CharacteristicBar from './CharacteristicBar.jsx';
import { ReviewsContext } from './Reviews.jsx';

export default function CharacteristicBars() {
  const { ratingCharacteristics } = useContext(ReviewsContext);
  // make an array of descriptors to go with characteristics
  const descriptors = {
    Fit: {
      title: 'Size',
      breakdown: [
        'Too Small',
        'Perfect',
        'Too Large',
      ],
    },
    Length: {
      title: 'Length',
      breakdown: [
        'Too Short',
        'Perfect',
        'Too Long',
      ],
    },
    Comfort: {
      title: 'Comfort',
      breakdown: [
        'Poor',
        'Great',
      ],
    },
    Quality: {
      title: 'Quality',
      breakdown: [
        'Poor',
        'Great',
      ],
    },
  };
  const characteristicList = [];
  // make an array of keys from rating Characteristics
  const rCKeys = Object.keys(ratingCharacteristics);
  // iterate over the object ratingCharacteristics
  for (let i = 0; i < rCKeys.length; i++) {
    // grab characteristic information and put it in an object
    const characteristicInformation = {
      title: descriptors[rCKeys[i]].title,
      breakdown: descriptors[rCKeys[i]].breakdown,
      rating: ratingCharacteristics[rCKeys[i]].value,
    };
    characteristicList.push(characteristicInformation);
    // push characteristic information into characteristicList
  }

  return (
    <>
      {characteristicList.map((characteristic, index) => (
        <CharacteristicBar characteristicInfo={characteristic} key={index} />
      ))}
    </>
  );
}

/*
Characteristics:
Fit: --> Size
Too Small, Perfect, Too Large

Length:
Too Short, Perfect, Too Long

Comfort:
Poor, Perfect

Quality:
Poor, Great

*/
