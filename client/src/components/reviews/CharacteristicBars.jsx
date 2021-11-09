import React, { useContext } from 'react';
import CharacteristicBar from './CharacteristicBar.jsx';
import { ReviewsContext } from './Reviews.jsx';

export default function CharacteristicBars() {
  const { ratingCharacteristics } = useContext(ReviewsContext);
  // make an array of descriptors to go with characteristics
  const descriptors = {
    Fit: {
      title: 'Fit',
      breakdown: [
        'Runs tight',
        'Runs slightly tight',
        'Perfect',
        'Runs slightly long',
        'Runs long',
      ],
    },
    Length: {
      title: 'Length',
      breakdown: [
        'Runs short',
        'Runs slightly short',
        'Perfect',
        'Runs slightly long',
        'Runs long',
      ],
    },
    Comfort: {
      title: 'Comfort',
      breakdown: [
        'Uncomfortable',
        'Slightly uncomfortable',
        'Ok',
        'Comfortable',
        'Perfect',
      ],
    },
    Quality: {
      title: 'Quality',
      breakdown: [
        'Poor',
        'Below average',
        'What I expect',
        'Pretty great',
        'Perfect',
      ],
    },
    Size: {
      title: 'Size',
      breakdown: [
        'A size too small',
        '1/2 a size too small',
        'Perfect',
        '1/2 a size too big',
        'A size too big',
      ],
    },
    Width: {
      title: 'Width',
      breakdown: [
        'Too narrow',
        'Slightly narrow',
        'Perfect',
        'Slightly wide',
        'Too wide',
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
