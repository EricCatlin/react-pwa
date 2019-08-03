import { useState, useCallback } from 'react';

const hook = initial => {
  const [number, setNumber] = useState(initial);
  return [number, useCallback(newVal => setNumber(number => newVal))];
};

export { hook };
