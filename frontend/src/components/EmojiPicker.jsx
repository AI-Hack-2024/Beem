import React, { useEffect } from 'react';
import data from '@emoji-mart/data/sets/13.1/native.json';
import { Picker } from 'emoji-kitchen-mart';

function EmojiPicker() {
  useEffect(() => {
    const picker = new Picker({
      parent: document.querySelector('#picker'),
      data: data,
      noCountryFlags: true,
    });

    return () => {
      document.querySelector('#picker').innerHTML = '';
    };
  }, []);

  return (
    <div>
      <div id='picker'></div>
    </div>
  );
}

export default EmojiPicker;
