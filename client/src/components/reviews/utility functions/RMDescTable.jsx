import React, { useContext, useEffect, useState } from 'react';
import { ModalSetUpContext } from '../ModelSetUp.jsx';

export default function RMDescTable(props) {
  const { rmCharacteristics, setrmCharacteristics } = useContext(ModalSetUpContext);
  // create an object.keys array
  const charactersticsKeys = Object.keys(props.characteristics);
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
  const [charOutput, setCharOutput] = useState({});

  function onClickCharacteristic(e) {
    const newProp = props.characteristics[e.target.name].id.toString();
    const tempCharOutput = { ...rmCharacteristics };
    tempCharOutput[newProp] = Number(e.target.value);
    setrmCharacteristics(tempCharOutput);
  }

  // create object to house characteristisc

  return (

    <table id="rmDescTable" border="1">
      <tbody>
        {charactersticsKeys.map((characteristic, index) => (
          <tr key={index}>
            <th>{characteristic}</th>
            {descriptors[characteristic].breakdown.map((desc, index) => (
              <th key={index}>
                <div>{desc}</div>
                <input type="radio" value={index + 1} name={characteristic} onClick={onClickCharacteristic} />
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

  );
}
