import React, { useEffect } from 'react';
import data from '@emoji-mart/data/sets/13.1/native.json';
import { Picker } from 'emoji-kitchen-mart';

function LocationInfo() {
  useEffect(() => {
    new Picker({
      parent: document.querySelector('#picker'),
      data: data,
      noCountryFlags: true,
    });
  }, []);

  return (
    <div>
      {/* This div is where the Picker will be rendered */}
      <div id='picker'></div>
    </div>
  );
}

export default LocationInfo;
