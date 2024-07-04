import React, { useEffect, useRef } from 'react';
import data from '@emoji-mart/data/sets/13.1/native.json';
import { Picker } from 'emoji-kitchen-mart';

function EmojiPicker() {
  const pickerRef = useRef(null);

  useEffect(() => {
    const picker = new Picker({
      parent: pickerRef.current,
      data: data,
      noCountryFlags: true,
    });

    return () => {
      if (pickerRef.current) {
        pickerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div>
      <div id='picker' ref={pickerRef}></div>
    </div>
  );
}

export default EmojiPicker;
